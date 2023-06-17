import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { CardContent } from "@mui/material";
import { USDC_POLYGON_ADDRESS, USDC_abi } from "../../../constants/USDC";
import ModalBox from "../Modal";
import Loading from "../Loading";
import { useStorageUpload } from "@thirdweb-dev/react";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { GRATIE_CONTRACT_ADDRESS, GRATIE_ABI } from "../../../constants/Gratie";
import { SIGNATURE } from "@/constants/Signature";
import { ethers } from "ethers";
export default function List(props: any) {
  const [openMsg, setOpenMsg] = React.useState(false);
  const [openLoading, setOpenLoading] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalDesc, setModalDesc] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [file, setFile] = React.useState<any>();
  const [tokenUrl, setTokenUrl] = React.useState<any>();
  const { mutateAsync: upload } = useStorageUpload();
  const uploafdToIpfs = async () => {
    const uploadurl = await upload({
      data: [file],
      options: {
        uploadWithGatewayUrl: true,
        uploadWithoutDirectory: true,
      },
    });
    setTokenUrl(uploadurl);
    console.log("Upload Url:", uploadurl);
  };

  const nameHandler = (e: any) => {
    setName(e.target.value);
  };
  const emailHandler = (e: any) => {
    setEmail(e.target.value);
  };
  const handleModalClose = () => {
    setOpenMsg(false);
    setModalTitle("");
    setModalDesc("");
  };
  const handleLoaderToggle = (status: boolean) => {
    setOpenLoading(status);
  };
  const { address, isConnected, isDisconnected } = useAccount();
  console.log("user address:", address);
  const { data: allowance } = useContractRead({
    address: "0xB3D73A5b58DdCa4338e3dEB418d384D5d3dEeBa8",
    abi: USDC_abi,
    functionName: "allowance",
    args:[address,GRATIE_CONTRACT_ADDRESS]
  });
  console.log("allowance data:", Number(allowance));

  const { data: aprovedata, write: approve } = useContractWrite({
    address: "0xB3D73A5b58DdCa4338e3dEB418d384D5d3dEeBa8",
    abi: USDC_abi,
    functionName: "approve",
    args: [GRATIE_CONTRACT_ADDRESS, ethers.utils.parseUnits("1", 6)],
  });
  const { isLoading, isSuccess: aprroveSuccess } = useWaitForTransaction({
    hash: aprovedata?.hash,
  });
  // console.log(aprovedata?.hash);
  if (aprroveSuccess) {
    console.log("successfully approved!");
  }
  console.log(name, email, tokenUrl);
  const businessData = {
    name: name,
    email: email,
    nftMetadataURI: tokenUrl,
    businessNftTier: 1,
  };

  const payment = {
    method: USDC_POLYGON_ADDRESS,
    amount: ethers.utils.parseUnits("1", 6),
  };

  const signature = SIGNATURE;

  const { data: registerdata, write: registerBusinesswrite } = useContractWrite(
    {
      address: GRATIE_CONTRACT_ADDRESS,
      abi: GRATIE_ABI,
      functionName: "registerBusiness",
      args: [businessData, ["Service Provider"], ["abc"], payment, signature],
    }
  );
  const { isSuccess: registerSucces } = useWaitForTransaction({
    hash: registerdata?.hash,
  });
  console.log("Registering the business hash", registerdata?.hash);
  if (registerSucces) {
    console.log("successfully Registered!");
  }

  return (
    <div className="">
      <React.Fragment>
        <Container component="main" maxWidth="md" sx={{ mt: 4 }}>
          <Box className="form-box">
            <CardContent>
              <Box component="form" noValidate sx={{ mt: 5 }}>
                {props.users &&
                  props.users.map((user: any) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        md={12}
                        sx={{ display: "flex", mb: 2 }}
                      >
                        <Typography noWrap variant="h6" className="form-label">
                          {user.account.userId}
                        </Typography>
                        <Button
                          variant="contained"
                          className="create-token-btn"
                        >
                          Send Tokens
                        </Button>
                      </Grid>
                    );
                  })}
              </Box>
              <Box>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className="buy-form">
                    <Typography variant="subtitle2">Company Name</Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      value={name}
                      onChange={nameHandler}
                      required
                    />
                  </div>
                  <div className="buy-form">
                    <Typography variant="subtitle2">Company Email</Typography>
                    <TextField
                      type="email"
                      id="outlined-basic"
                      variant="outlined"
                      value={email}
                      onChange={emailHandler}
                      required
                    />
                  </div>
                  <div className="buy-form">
                    <Typography variant="subtitle2">Upload Logo</Typography>
                    <input
                      type="file"
                      onChange={(e) => {
                        if (e.target.files) {
                          setFile(e.target.files[0]);
                        }
                      }}
                    />
                    <Button onClick={uploafdToIpfs} variant="contained">
                      upload
                    </Button>
                  </div>
                  <div className="buy-form">
                    <Typography variant="subtitle2">NFT Tier</Typography>
                    <Typography variant="subtitle2" className="sub-buy-nft">
                      Paradise
                    </Typography>
                  </div>
                  <div className="center-btn">
                    <Button
                      onClick={() => {
                        if (Number(allowance) === 0) approve?.();
                      }}
                      variant="contained"
                    >
                      Approve
                    </Button>
                  </div>
                  <div className="center-btn">
                    <Button
                      onClick={() => registerBusinesswrite?.()}
                      variant="contained"
                    >
                      Mint
                    </Button>
                  </div>
                </Box>
              </Box>
            </CardContent>
          </Box>
        </Container>

        <Loading open={openLoading} handleClose={handleLoaderToggle} />
        <ModalBox
          open={openMsg}
          handleClose={handleModalClose}
          heading={modalTitle}
          description={modalDesc}
        />
      </React.Fragment>
    </div>
  );
}

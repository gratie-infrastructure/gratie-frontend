import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Alert, CardContent } from "@mui/material";
import { USDC_POLYGON_ADDRESS, USDC_abi } from "../../../constants/USDC";
import ModalBox from "../Modal";
import Loading from "../Loading";
import { useContract, useOwnedNFTs, useStorageUpload } from "@thirdweb-dev/react";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { GRATIE_CONTRACT_ADDRESS, GRATIE_ABI } from "../../../constants/Gratie";
import { SIGNATURE } from "@/constants/Signature";
import { BigNumber, ethers } from "ethers";

import { Payment } from "@mui/icons-material";
import { toast } from "react-toastify";
import axios from "axios";
import { readContract } from "wagmi/actions";
export default function List(props: any) {
  const { setProfileTab } = props;
  const [openMsg, setOpenMsg] = React.useState(false);
  const [openLoading, setOpenLoading] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalDesc, setModalDesc] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [file, setFile] = React.useState<any>();
  const [tokenUrl, setTokenUrl] = React.useState<any>();
  const [metadataurl, setMetadataUrl] = React.useState<any>();
  const [signature, setSignature] = React.useState<any>("");
  const fileInputRef: any = React.useRef(null);
  const [metadataupload, setmetadataUpload] = React.useState<any>(false);
  const { mutateAsync: upload ,isLoading:ipfsLoading} = useStorageUpload();

  //Uploading to IPFS--->
  const uploafdToIpfs = async () => {
    handleLoaderToggle(true);
    const uploadurl = await upload({
      data: [file],
      options: {
        uploadWithGatewayUrl: true,
        uploadWithoutDirectory: true,
      },
    });
    setTokenUrl(uploadurl);
    const metadata:any = {
      tierID: props.data.tierID,
      name: name,
      email: email,
      image: uploadurl,
    };
    handleLoaderToggle(true);
    const uploadurlofMetadata = await upload({
      data: [metadata],
      options: {
        uploadWithGatewayUrl: true,
        uploadWithoutDirectory: true,
      },
    });
    setMetadataUrl(uploadurlofMetadata);
 
    if (uploadurlofMetadata) {
      handleLoaderToggle(false);
      toast.success("🦄 Recieved metadata URL", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    console.log("metadata Url:", metadataurl);
  };
  
// console.log("TokenURL before adding to metadata:",tokenUrl)
  //Uploading the Metdata to IPFS --->
  
  
// console.log("Metadata", metadata);

  // const uploadmetadata = async () => {

  //   handleLoaderToggle(true);
  //   const uploadurl = await upload({
  //     data: [metadata],
  //     options: {
  //       uploadWithGatewayUrl: true,
  //       uploadWithoutDirectory: true,
  //     },
  //   });
  //   setMetadataUrl(uploadurl);
 
  //   if (uploadurl) {
  //     handleLoaderToggle(false);
  //     toast.success("🦄 Recieved metadata URL", {
  //       position: "bottom-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  //   console.log("metadata Url:", uploadurl?.[0]);
  // };
  console.log("tier data:", props.data.tierID);

  //Updating the data form the form--->
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

  // Getting the address from the account--->
  const { address, isConnected, isDisconnected } = useAccount();
  console.log("user address:", address);
  //  let allowance:any;
  //Checking the allowance--->
  // const { data: allowance,error:allowanceError,isSuccess:allowanceSuccess,status:allowanceStatus } = useContractRead({
  // //   const response = useContractRead({
  //   address: USDC_POLYGON_ADDRESS,
  //   abi: USDC_abi,
  //   functionName: "allowance",
  //   args: [address, GRATIE_CONTRACT_ADDRESS],
  //   onError(error) {
  //     console.log('Error', error)
  //   },
  // });
  const handleReadAllowance=async()=>{
    const data = await readContract({
      address: USDC_POLYGON_ADDRESS,
      abi:  USDC_abi,
      functionName: 'allowance',
      args: [address, GRATIE_CONTRACT_ADDRESS],
    });
      console.log("allowance",Number(data));
    
  }
 
 
  // const { data, error:ownedNFT } = useOwnedNFTs(
  //   "0xb7E8c6B586c1C263D318eFC7Da45948115Eb6562",
  //   address,
  // );
  


  // // console.log("Name:",ReadName);
  // console.log("allowance data:",Number(allowance));
  // console.log("allowance error",response);
  //Approving the data --->
  const { data: aprovedata, write: approve } = useContractWrite({
    address: USDC_POLYGON_ADDRESS,
    abi: USDC_abi,
    functionName: "approve",
    args: [GRATIE_CONTRACT_ADDRESS, ethers.utils.parseUnits(props.data.nftprice.toString(), 6)],
  });
  const { isLoading, isSuccess: aprroveSuccess,error:approveError } = useWaitForTransaction({
    hash: aprovedata?.hash,
  });
  
  // console.log(aprovedata?.hash);
  React.useEffect(() => {
    if (aprroveSuccess) {
      console.log('successfully Approved !');
      toast.success('🦄 successfully Approved', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else if (approveError) {
      console.log('error occurred', approveError.message);
      toast.error('There was an error in approval!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }, [aprroveSuccess, approveError]);

  console.log(name, email, metadataurl?.[0]);

  const businessData = {
    name: name,
    email: email,
    nftMetadataURI: metadataurl?.[0],
    businessNftTier: props.data.tierID,
  };

  const paymentforApi = {
    paymentMethod: USDC_POLYGON_ADDRESS,
    paymentAmount: ethers.utils.parseUnits(props.data.nftprice.toString(), 6),
    tierID: props.data.tierID,
    buyer: address,
  };
  const paymentforContract = {
    method: USDC_POLYGON_ADDRESS,
    amount: ethers.utils.parseUnits(props.data.nftprice.toString(), 6),
    
  };
  console.log("On Clicking Mint",USDC_POLYGON_ADDRESS,GRATIE_CONTRACT_ADDRESS,address);
  // fetching the signature--->
  React.useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paymentforApi),
    };

    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://dev.api.gratie.xyz/api/v1/org/nft/purchase",
          requestOptions.body,
          { headers: requestOptions.headers }
        );
        console.log("SIGNATURE:", response.data.purchaseSignature);
        setSignature(response.data.purchaseSignature);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };

    fetchData();
    handleReadAllowance();
  }, []);
  console.log("Payment Object",USDC_POLYGON_ADDRESS,GRATIE_CONTRACT_ADDRESS,address,paymentforContract,signature)
  console.log("Before Write:",[businessData, ["Service Provider"], metadataurl, paymentforContract, signature])
  //Register business and mint functionality--->
  const { data: registerdata, write: registerBusinesswrite } = useContractWrite(
    {
      address:GRATIE_CONTRACT_ADDRESS,
      abi: GRATIE_ABI,
      functionName: "registerBusiness",
      args: [businessData, ["Service Provider"], metadataurl, paymentforContract, signature],
    }
  );
  const { isSuccess: registerSucces,error:registerError } = useWaitForTransaction({
    hash: registerdata?.hash,
  });
  console.log("Registering the business hash", registerdata?.hash);

  React.useEffect(() => {
    if (registerSucces) {
      console.log("successfully Registered!");
      toast.success("🦄 successfully Registered Business!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setProfileTab(1);
    }
    else if (registerError) {
      console.log("error occured", registerError.message);
      toast.error("There was an error in minting!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [aprroveSuccess, approveError]);
  
  const handleUpload = () => {
    fileInputRef.current.click();
   
  };

  const uploadFile = (e: any) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
    
  };

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

                    <div onClick={handleUpload}>
                      <svg
                        width="77"
                        height="77"
                        viewBox="0 0 77 77"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_i_596_745)">
                          <rect
                            width="76.2857"
                            height="76.2857"
                            rx="38.1429"
                            fill="#030302"
                            fill-opacity="0.2"
                          />
                          <path
                            d="M27 44.1429V45.8572C27 46.7665 27.3612 47.6386 28.0042 48.2815C28.6472 48.9245 29.5193 49.2857 30.4286 49.2857H45.8571C46.7665 49.2857 47.6385 48.9245 48.2815 48.2815C48.9245 47.6386 49.2857 46.7665 49.2857 45.8572V44.1429"
                            stroke="#15D648"
                            stroke-width="1.71429"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M33 33L38.1429 27L43.2857 33"
                            stroke="#15D648"
                            stroke-width="1.71429"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M38.1428 27V42.4286"
                            stroke="#15D648"
                            stroke-width="1.71429"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <rect
                            x="0.5"
                            y="0.5"
                            width="75.2857"
                            height="75.2857"
                            rx="37.6429"
                            stroke="#00FF01"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_i_596_745"
                            x="0"
                            y="0"
                            width="78.2856"
                            height="80.2857"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx="2" dy="4" />
                            <feGaussianBlur stdDeviation="5" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_596_745"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="w-20 text-black"
                        onChange={uploadFile}
                      />
                    </div>

                    <Button
                      className="btn"
                      onClick={() => {
                        
                        uploafdToIpfs();
                      }}
                      variant="contained"
                    >
                      upload
                    </Button>
                  </div>
                  <div className="buy-form">
                    <Typography variant="subtitle2">NFT Tier</Typography>
                    <Typography variant="subtitle2" className="sub-buy-nft">
                      {props.data.name}
                    </Typography>
                  </div>

                  
                </Box>
              </Box>
            </CardContent>
            {/* {(Number(allowance) === 0 
            ||
                    ethers.BigNumber.from(allowance) <
                      ethers.utils.parseUnits(
                        props.data.nftprice.toString(),
                        6
                      )
                      ) 
                      && ( */}
                    <Button
                    variant="contained"
                      style={{ padding: "5px 10px", border: "none" }}
                      onClick={() => approve?.()}
                    >
                      Approve
                    </Button>
                   {/* )}  */}

                  <Button

             variant="contained"
                      onClick={() => registerBusinesswrite?.()}
                      style={{padding:"5px 10px",border:"none"}}
                    >
                      Mint
                    </Button> 
                  
          </Box>
         
        </Container>

        {/* <Loading open={openLoading} handleClose={handleLoaderToggle} />
        <ModalBox
          open={openMsg}
          handleClose={handleModalClose}
          heading={modalTitle}
          description={modalDesc}
        /> */}
      </React.Fragment>
     
                  <Loading open={openLoading} handleClose={handleLoaderToggle} />
    </div>
    
  );
}

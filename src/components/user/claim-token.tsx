import * as React from "react";

import Container from "@mui/material/Container";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";

import { SERVICE_PROVIDER_ADDRESS } from "@/constants/Serviceprovider";
import axios from "axios";
import { GRATIE_ABI, GRATIE_CONTRACT_ADDRESS } from "@/constants/Gratie";
import { toast } from "react-toastify";
import ModalBox from "../Modal";
import { useRouter } from "next/router";

export default function ClaimToken(props: any) {
  const router = useRouter();
  const { setProfileTab } = props;
  const [openMsg, setOpenMsg] = React.useState(false);
  const [openLoading, setOpenLoading] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalDesc, setModalDesc] = React.useState("");
  const [companyObject,setCompanyObject]=React.useState<any>();

  const {address:walletAddress}=useAccount();
  const handleLoaderToggle = (status: boolean) => {
    setOpenLoading(status);
  };
  React.useEffect(() => {
    handleLoaderToggle(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://devapi.gratie.xyz/api/v1/org/user/companies?walletAddr=${walletAddress}`
        );
        console.log("Company Data for Claim:", response.data);
        if (response.data.data.length === 0) {
          setOpenMsg(true);
          setModalTitle("You can't claim!");
          setModalDesc("You will be able to claim your NFT after the company approves");
          // Reload the page after showing the modal
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        }
       setCompanyObject(response.data);
       
      } catch (error) {
        console.error("Error occurred:", error);
        setOpenMsg(true)
        setModalTitle("You are not Aprroved by the company!");
        setModalDesc("Please make a request!")
      }
      handleLoaderToggle(false)
    };
  
    fetchData();
  }, []);
  let tokenId:any;
  if(companyObject?.data.length!==0){
     tokenId=(companyObject?.data[0].companies[0].tokenId);
  }

  console.log("Token Id",tokenId);
  const { data: claimData, write: claimRewards } = useContractWrite({
    address: GRATIE_CONTRACT_ADDRESS,
    abi: GRATIE_ABI,
    functionName: "claimRewardTokens",
    args: [tokenId, 1],
  });
  const { isLoading, isSuccess: aprroveSuccess,error:approveError,isError } = useWaitForTransaction({
    hash: claimData?.hash,
  });
  
  // console.log(aprovedata?.hash);
  if (aprroveSuccess) {
    console.log("successfully Claimed !");
    toast.success("🦄 successfully Claimed", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setProfileTab(3);
  }
  if (isError) {
    console.log("error occured", isError);
    toast.error("There was an error in approval!", {
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

  
  const handleModalClose = () => {
    
    setOpenMsg(false);
    setModalTitle("");
    setModalDesc("");
    router.reload();
  };
  
  return (<>
    <Container sx={{ mt: 3 }} className="create-user-container">
      {companyObject?.data.length!==0 &&<Box className="form-box" style={{ width: "600px", margin: "0px auto" }}>
        <Typography
          id="modal-modal-title"
          style={{
            color: "#00FF01",
            fontWeight: "400",
            fontFamily: "Book Antiqua",
            marginBottom: "30px",
            marginTop: "40px",
            fontSize: "28px",
            textAlign: "center",
          }}
          variant="h6"
          component="h6"
        >
          {companyObject?.data[0].companies.length} REWARD
        </Typography>
        <Grid
          container
          spacing={1}
          sx={{ mt: 5, mb: 5 }}
          style={{ justifyContent: "center" }}
        >
          <Grid item xs={12} md={5}>
            <Typography noWrap variant="h6" className="form-label">
            {companyObject?.data[0].companies.length} Token to Claim
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} className="user-grid">
            <Button
              type="submit"
              variant="contained"
              className="create-token-btn"
              style={{
                margin: "0px 0px 0px 0px",
                width: "60px",
                background: "transparent",
                border: "1px solid #00FF01",
                marginLeft:"-640px"
              }}
              onClick={()=>claimRewards()}
            >
              Claim
            </Button>
          </Grid>
        </Grid>
      </Box>}
    </Container>
    {openMsg&&<div onClick={handleModalClose}><ModalBox
    open={openMsg}
   
    modalTitle={modalTitle}
    description={modalDesc}
  /></div>}
  </>
  );
}

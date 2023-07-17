import * as React from "react";
import { useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";

import Loading from "../Loading";
import ModalBox from "../Modal";
import axios from "axios";
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";
import { GRATIE_ABI, GRATIE_CONTRACT_ADDRESS } from "@/constants/Gratie";
import {readContract} from "wagmi/actions";
import { ethers } from "ethers";
import { USDC_abi } from "@/constants/USDC";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
export default function CreateToken(props: any) {
  const router = useRouter();
  const [formObject, setFormObject] = useState({
    name: "",
    symbol: "",
    description: "",
  });
  const [openMsg, setOpenMsg] = React.useState(false);
  const [openLoading, setOpenLoading] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalDesc, setModalDesc] = React.useState("");
  const [companyObject,setCompanyObject]=React.useState<any>();
  const [rewardTokensAvailable,setRewardTokensAvailable]=React.useState<any>();
  const [totalSupply,setTotalSupply]=React.useState<any>();
  const [distribution,setDistribution]=React.useState<any>();
  const {address:walletAddress}=useAccount();

  let tokenAddress:any=companyObject?.data?.tokenAddr;
  let tokenID:any=companyObject?.data?.tokenId;
  const handleReadrewardTokensAvailable=async()=>{
    handleLoaderToggle(true)
    console.log("token id from company data:",tokenID);
    const data:any = await readContract({
      address: GRATIE_CONTRACT_ADDRESS,
      abi:  GRATIE_ABI,
      functionName: 'rewardTokensAvailable',
      args: [tokenID],
    });
    if(data){ handleLoaderToggle(false)};
    setRewardTokensAvailable(Number(ethers.utils.formatEther(data.toString())));
      console.log("REWARD TOKENS AVAILABLE:",Number(ethers.utils.formatEther(data.toString())));
    
  }

  const handleTotalSupply=async()=>{
    handleLoaderToggle(true)
    console.log("token Address from company data:",tokenAddress);
    const data:any = await readContract({
      address: tokenAddress,
      abi:  USDC_abi,
      functionName: 'totalSupply',
    });
    if(data){ handleLoaderToggle(false)};
    setTotalSupply(Number(ethers.utils.formatEther(data.toString())));
    console.log("TOTAL SUPPLY:",Number(ethers.utils.formatEther(data.toString())));
  };
  React.useEffect(()=>{
    if(tokenID)
    {handleReadrewardTokensAvailable();}
    if(tokenAddress){
      handleTotalSupply();
    }
  
   },[tokenID,tokenAddress]);
  React.useEffect(() => {
    handleLoaderToggle(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://devapi.gratie.xyz/api/v1/org?walletAddr=${walletAddress}`
        );
        console.log("Company Data:", response.data);
       setCompanyObject(response.data);

      } catch (error) {
        console.error("Error occurred:", error);
        setOpenMsg(true)
        setModalTitle("Register Business");
        setModalDesc("Please Register you business first")
      }
      handleLoaderToggle(false)
    };
  
    fetchData();
    handleReadrewardTokensAvailable();
  }, []);
   console.log("Distribution:",distribution*100);
  const { data: generateRewardsData, write: generateRewards } = useContractWrite({
    address: GRATIE_CONTRACT_ADDRESS,
    abi: GRATIE_ABI,
    functionName: "startRewardDistribution",
    args: [tokenID,distribution*100],
  });
  const { isLoading, isSuccess: generateRewardsSuccess,error:generateRewardsError } = useWaitForTransaction({
    hash: generateRewardsData?.hash,
  });
  
  // console.log(aprovedata?.hash);
  if (generateRewardsSuccess) {
    console.log("Generated Rewards !");
   
    toast.success("🦄 Generated Rewards", {
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
  if (generateRewardsError) {
    console.log("error occured", generateRewardsError.message);
    toast.error("There was an error in generating rewards!", {
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
  const handleLoaderToggle = (status: boolean) => {
    setOpenLoading(status);
  };

  const onValChange = (event: any) => {
    const value = (res: any) => ({
      ...res,
      [event.target.id]: event.target.value,
    });
    setFormObject(value);
  };

  return (
    <React.Fragment>
      <Container sx={{ mt: 4 }}>
        <Box className="form-box">
          <CardContent>
            <Box
              component="form"
              noValidate
              sx={{ mt: 6 }}
              style={{ width: "928px", margin: "0px auto" }}
            >
              <Typography
                id="modal-modal-title"
                style={{
                  color: "#00FF01",
                  fontWeight: "400",
                  fontFamily: "Book Antiqua",
                  marginBottom: "50px",
                  fontSize: "28px",
                  textAlign: "center",
                  marginLeft:"-290px"
                }}
              
                variant="h6"
                component="h6"
              >
                Available supply : {rewardTokensAvailable}
              </Typography>
              <Grid
                container
                spacing={1}
                sx={{ mt: 5, mb: 5 }}
                style={{
                  justifyContent: "center",
                  margin: "30px 0px",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} md={4}>
                  <Typography
                    noWrap
                    variant="h6"
                    style={{ textAlign: "start",marginLeft:"-50px" }}
                    className="form-label"
                  >
                    Distribution Percentage
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    id="name"
                    type="text"
                    autoComplete="off"
                    required
                    onChange={(e)=>{setDistribution(Number(e.target.value))}}
                    value={distribution}
                    className="form-textfield"
                    focused
                    sx={{ input: { color: "#fff", fontSize: "20px", } }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  
                </Grid>
              </Grid>

              <Grid
                container
                spacing={1}
                sx={{ mb: 5 }}
                style={{
                  justifyContent: "center",
                  margin: "30px 0px",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} md={4}>
                  <Typography
                    noWrap
                    variant="h6"
                    style={{ textAlign: "start" }}
                    className="form-label"
                  >
                    Existing Users
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography
                    noWrap
                    variant="h6"
                    style={{ textAlign: "start" }}
                    className="form-label"
                  >
                    {companyObject?.data.users.length}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}></Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                sx={{ mb: 5 }}
                style={{ justifyContent: "end", margin: "30px 0px" }}
              >
                <Grid item xs={12} md={5} style={{marginRight:"760px"}}>
                  <Button
                    onClick={()=>generateRewards()}
                    variant="contained"
                    className="create-token-btn"
                    style={{ margin: "0px -190px 0px 0px", }}
                  >
                    Generate Rewards
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography noWrap variant="h6" sx={{ color: "#fff" }}>
              Total Tokens generated : {totalSupply}
            </Typography>
            <Typography
              noWrap
              variant="h6"
              sx={{ color: "#fff" }}
              className="profile-label"
            ></Typography>
          </div>
        </Box>
      </Container>
      <Loading open={openLoading} handleClose={handleLoaderToggle} />
      {openMsg&&<div onClick={handleModalClose}><ModalBox
        open={openMsg}
       
        modalTitle={modalTitle}
        description={modalDesc}
      /></div>}
    </React.Fragment>
  );
}

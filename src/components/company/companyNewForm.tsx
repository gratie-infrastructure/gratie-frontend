import React, { useEffect } from "react";
import { useState } from "react";

import CardContent from "@mui/material/CardContent";
import {
  Box,
  Container,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {readContract} from "wagmi/actions"
import Loading from "../Loading";
import ModalBox from "../Modal";
import { toast } from "react-toastify";
import { Token, useStorageUpload } from "@thirdweb-dev/react";
import axios from "axios";
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";
import { GRATIE_ABI, GRATIE_CONTRACT_ADDRESS } from "@/constants/Gratie";
import { BigNumber, ethers } from "ethers";
import { useRouter } from "next/router";
export default function FormPage(props: any) {
  const router = useRouter();
  const {address:walletAddress}=useAccount();
  const [openMsg, setOpenMsg] = React.useState(false);
  const [openLoading, setOpenLoading] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalDesc, setModalDesc] = React.useState("");
  const [file, setFile] = React.useState<any>();
  const [tokenUrl, setTokenUrl] = React.useState<any>();
  const [metadataurl, setMetadataUrl] = React.useState<any>();
  const [signature, setSignature] = React.useState<any>("");
  const fileInputRef: any = React.useRef(null);
  const [metadataupload, setmetadataUpload] = React.useState<any>(false);
  const { mutateAsync: upload ,isLoading:ipfsLoading} = useStorageUpload();
  const [companyObject, setCompanyObject] = React.useState<any>();
  const [companyName, setCompanyName]=React.useState<any>("");
  const [companyEmail, setCompanyEmail]=React.useState<any>("")
  const [distribution,setDistribution]=React.useState<number>()
  const [valuation,setValuation]=React.useState<number>()
  const [companyDetails,setCompanyDetails]=React.useState<any>(true)
  const [tokenDetails,setTokenDetails]=React.useState<any>(false)
  const [tokenName,setTokenName]=React.useState<any>("")
  const [tokenSymbol,setTokenSymbol]=React.useState<any>("")
  const [rewardTokenMintsData,setRewardTokenMintsData]=React.useState<Number>(0)
  const [CID,setCID]=React.useState<any>("");
  // const [tokenID,settokenID]=React.useState<any>()
  let tokenID:any=companyObject?.data.tokenId;
  const handleRewardMintTokenData=async()=>{
    // settokenID(companyObject?.data.tokenId);
    console.log("Inside handleRewardTokenMints",tokenID);
    const dataforRewardToken = await readContract({
      address: GRATIE_CONTRACT_ADDRESS,
      abi:  GRATIE_ABI,
      functionName: 'rewardTokenMints',
      args: [tokenID],
    });
   setRewardTokenMintsData(Number(dataforRewardToken)+1);
      console.log("Reward token data",rewardTokenMintsData);
    
  }

 useEffect(()=>{
  if(tokenID)
  {handleRewardMintTokenData();}

 },[tokenID])
 const handleCloseModal = () => {
  router.push('/company'); // Navigate to the new page
};

  React.useEffect(() => {
    handleLoaderToggle(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://devapi.gratie.xyz/api/v1/org?walletAddr=${walletAddress}`
        );
        console.log("Company Data:", response.data);
       setCompanyObject(response.data);

       setCompanyName(response.data.name);
       setCompanyEmail(response.data.email);
      } catch (error) {
        console.error("Error occurred:", error);
        setOpenMsg(true)
        setModalTitle("Register Business");
        setModalDesc("Please Register you business first")
      }
      handleLoaderToggle(false)
    };
  
    fetchData();
  }, []);

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  const uploadFile = (e: any) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleDistribution=(e:any)=>{
    setDistribution(e.target.value);
  }
  const handleValuation=(e:any)=>{
    setValuation(e.target.value);
  }
  const uploafdTokentoipfs = async () => {
    handleLoaderToggle(true);
    const uploadurl = await upload({
      data: [file],
      options: {
        uploadWithGatewayUrl: true,
        uploadWithoutDirectory: true,
      },
    });
    setTokenUrl(uploadurl);
    if (uploadurl) {
      handleLoaderToggle(false);
      toast.success("🦄 uploaded to ipfs!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });}
  }

//Uploading to IPFS--->
const uploafdToIpfs = async () => {
  handleLoaderToggle(true);
  const uploadurl = await upload({
    data: [file],
    options: {
      uploadWithGatewayUrl: true,
      uploadWithoutDirectory: true,
    },
  }
  );
  setTokenUrl(uploadurl);
 if(companyObject){
  const metadata:any = {
    name: companyObject.data.name,
    email: companyObject.data.email,
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
    });}
  }
  console.log("metadata Url:", metadataurl);
};

// const url: string = metadataurl?.[0];
//   const urlParts: string[] = url.split('/');
//   const ipfsIndex: number = urlParts.indexOf('ipfs');
//   if (ipfsIndex !== -1 && ipfsIndex + 1 < urlParts.length) {
    
//     const cid: string = urlParts[ipfsIndex + 1];
//     setCID(cid);
//     console.log(cid); // Output: QmZ4u9Gj6BPDJnuQD996xZtb5e3Aj9ajANAALH9rv9vcQo
//   } else {
//     console.log('CID not found in the URL.');
//   }

let formObject:any={
  name: "",
  email: "",
  valuation: 0,
  distribution: 0,
  walletAddr: "",
  tokenName:"",
  tokenSymbol:"",
  fileLocationHash:"",
}
if(companyObject?.data.status=="MINTED"){
 formObject={
  name: companyObject.data.name,
  email: companyObject.data.email,
  valuation: Number(valuation),
  distribution:Number(distribution),
  walletAddr: walletAddress,
  fileLocationHash:CID, 
};
console.log("FORM OBJECT FOR MINTED:",formObject);
}
console.log(formObject);
const handleCompanyUpdate = async (event: React.FormEvent) => {
  event.preventDefault();
  handleLoaderToggle(true);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formObject),
    };
  try {
    
    const response = await axios.put(
    'https://devapi.gratie.xyz/api/v1/org/update',
    requestOptions.body,
    { headers: requestOptions.headers }
  );
    
    console.log("Company Data:", response.data);
    handleLoaderToggle(false);
    toast.success("🦄Business Updated!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setOpenMsg(true)
        setModalTitle("Business Updated!");
        setModalDesc("Wait for the approval! We will intimate you via email. :)")
  } catch (error) {
    handleLoaderToggle(false);
    console.error("An error occurred while updating the company:", error);
    toast.error("Error Occurred while Updating the Company!", {
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
};



  const handleModalClose = () => {
    
    setOpenMsg(false);
    setModalTitle("");
    setModalDesc("");
    router.reload();
  };
  const handleLoaderToggle = (status: boolean) => {
    setOpenLoading(status);
  };
  const valuationData = companyObject?.data.valuation?.$numberDecimal?.toString() || "0";
  console.log("Token Update",[ [Number(companyObject?.data.tokenId),(Number(ethers.utils.parseUnits(valuationData, 18))), Number(companyObject?.data.distribution.$numberDecimal)*100, Number(rewardTokenMintsData) ], companyObject?.data.rewardSignatureHash, tokenName, tokenSymbol, tokenUrl?.[0] ]);
  const { data: generateRewardsData, write: generateRewards } = useContractWrite({
    address: GRATIE_CONTRACT_ADDRESS,
    abi: GRATIE_ABI,
    functionName: "generateRewardTokens",
    args:  [ [Number(companyObject?.data.tokenId),(Number(ethers.utils.parseUnits(valuationData, 18))), Number(companyObject?.data.distribution.$numberDecimal)*100, Number(rewardTokenMintsData) ], companyObject?.data.rewardSignatureHash, tokenName, tokenSymbol, tokenUrl?.[0] ],
  });
  const { isLoading, isSuccess: generateReqrdsSuccess,error:generateRewardError } = useWaitForTransaction({
    hash: generateRewardsData?.hash,
  });
  
  // console.log(aprovedata?.hash);
  if (generateReqrdsSuccess) {
    console.log("Tokens Gnerated !");
    toast.success("🦄 Token Generated!", {
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
  if (generateRewardError) {
    console.log("error occured", generateRewardError.message);
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
  return (
    <React.Fragment>
     {companyObject && <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            xs={3}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="">
              <div className="">
                <Button
                  className="R-btn"
                  style={{ marginBottom: "20px", width: "100%" }}
                  variant="contained"
                  onClick={()=>{setTokenDetails(false);setCompanyDetails(true);
                  }}
                >
                  Company Details
                </Button>
              </div>
              <div className="">
                <Button
                  className="R-btn"
                  style={{ width: "100%" }}
                  variant="contained"
                  disabled={companyObject.data.status === "MINTED"||companyObject.data.status === "PENDING"}
                  onClick={()=>{setCompanyDetails(false);setTokenDetails(true);
                  }}
                >
                  Token Details
                </Button>
              </div>
            </div>
          </Grid>
          {companyObject.data.status === "MINTED" && <Grid className="" xs={9} >
            <Box
              className="form-box-2"
              style={{ marginBottom: "0px", textAlign: "start"}}
            >
              <CardContent>
                <Box
                  component="form"
                  noValidate
                  sx={{ mt: 6 }}
                >
                  
                  <Grid container spacing={1} sx={{ mt: 5, mb: 5 }}>
                    <Grid item xs={12} md={6}>
                      <Typography
                        style={{ textAlign: "start", marginLeft: "60px" }}
                        noWrap
                        variant="h6"
                        className="form-label"
                      >
                        Company Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography  style={{ fontSize:"18px",textAlign: "start", marginLeft: "60px" }}>{companyObject.data.name}</Typography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={1} sx={{ mb: 5 }}>
                    <Grid item xs={12} md={6}>
                      <Typography
                        style={{ textAlign: "start", marginLeft: "60px" }}
                        noWrap
                        variant="h6"
                        className="form-label"
                      >
                        Company Email
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Typography style={{ fontSize:"18px",textAlign: "start", marginLeft: "60px" }}>{companyObject.data.email}</Typography>
                    </Grid>
                    <Grid item xs={12} md={2}></Grid>
                  </Grid>

                  <Grid container spacing={1} sx={{ mb: 5 }} style={{}}>
                    <Grid item xs={12} md={6}>
                      <Typography
                        style={{ textAlign: "start", marginLeft: "60px" }}
                        noWrap
                        variant="h6"
                        className="form-label"
                      >
                        Company Valuation
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} >
                      <TextField
                        style={{ width: "240px" }}
                        fullWidth
                        type="text"
                        id="evaluation"
                        autoComplete="off"
                        required
                        onChange={handleValuation}
                        value={valuation}
                        className="form-textfield"
                        focused
                        sx={{ input: { color: "#fff", fontSize: "20px" } }}
                      />
                        
                   
                        

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

                    
                  
                    </Grid>
                    <Button
                      className="btn-1"
                      onClick={() => {
                        uploafdToIpfs()
                      }}
                      variant="contained"
                    >
                      upload
                    </Button>
                    <Grid item xs={12} md={2}>
                    </Grid>
                  </Grid>

                  <Grid container spacing={1} sx={{ mb: 5 }}>
                    <Grid item xs={12} md={6}>
                      <Typography
                        style={{ textAlign: "start", marginLeft: "60px" }}
                        noWrap
                        variant="h6"
                        className="form-label"
                      >
                        % locked for distribution
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        style={{ width: "240px" }}
                        fullWidth
                        type="text"
                        id="evaluation"
                        autoComplete="off"
                        required
                        onChange={handleDistribution}
                        value={distribution}
                        className="form-textfield"
                        focused
                        sx={{ input: { color: "#fff", fontSize: "20px" } }}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    style={{ justifyContent: "end", display: "flex" }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      className="form-wallet-button"
                      onClick={handleCompanyUpdate}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Box>
              </CardContent>
            </Box>
          </Grid>}
          {(companyObject.data.status === "ADMIN_APPROVED"||companyObject.data.status === "APPROVED"||companyObject.data.status === "PENDING")&& companyDetails && <Grid className="" xs={9} >
            <Box
              className="form-box-2"
              style={{ marginBottom: "0px", textAlign: "start"}}
            >
              <CardContent>
                <Box
                  component="form"
                  noValidate
                  sx={{ mt: 6 }}
                >
                  
                  <Grid container spacing={1} sx={{ mt: 5, mb: 5 }}>
                    <Grid item xs={12} md={6}>
                      <Typography
                        style={{ textAlign: "start", marginLeft: "60px" }}
                        noWrap
                        variant="h6"
                        className="form-label"
                      >
                        Company Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography  style={{ fontSize:"18px",textAlign: "start", marginLeft: "60px" }}>{companyObject.data.name}</Typography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={1} sx={{ mb: 5 }}>
                    <Grid item xs={12} md={6}>
                      <Typography
                        style={{ textAlign: "start", marginLeft: "60px" }}
                        noWrap
                        variant="h6"
                        className="form-label"
                      >
                        Company Email
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Typography style={{ fontSize:"18px",textAlign: "start", marginLeft: "60px" }}>{companyObject.data.email}</Typography>
                    </Grid>
                    <Grid item xs={12} md={2}></Grid>
                  </Grid>

                  <Grid container spacing={1} sx={{ mb: 5 }} style={{}}>
                    <Grid item xs={12} md={6}>
                      <Typography
                        style={{ textAlign: "start", marginLeft: "60px" }}
                        noWrap
                        variant="h6"
                        className="form-label"
                      >
                        Company Valuation
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} >
                    <Typography  style={{ fontSize:"18px",textAlign: "start", marginLeft: "60px" }}>{companyObject.data.valuation.$numberDecimal}</Typography>
                        
                    </Grid>
          
                  </Grid>

                  <Grid container spacing={1} sx={{ mb: 5 }}>
                    <Grid item xs={12} md={6}>
                      <Typography
                        style={{ textAlign: "start", marginLeft: "60px" }}
                        noWrap
                        variant="h6"
                        className="form-label"
                      >
                        % locked for distribution
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Typography  style={{ fontSize:"18px",textAlign: "start", marginLeft: "60px" }}>{companyObject.data.distribution.$numberDecimal}%</Typography>
                        
                    </Grid>
                  </Grid>
                  
                </Box>
              </CardContent>
            </Box>
          </Grid>}

          {companyObject.data.status === "ADMIN_APPROVED" && tokenDetails && <Grid className="" xs={9} >
            <Box
              className="form-box-2"
              style={{ marginBottom: "0px", textAlign: "start"}}
            >
              <CardContent>
                <Box
                  component="form"
                  noValidate
                  sx={{ mt: 6 }}
                >
                  
                  

                  <Grid container spacing={1} sx={{ mb: 5 }} style={{}}>
                    <Grid item xs={12} md={6}>
                      <Typography
                        style={{ textAlign: "start", marginLeft: "60px" }}
                        noWrap
                        variant="h6"
                        className="form-label"
                      >
                        Token Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} >
                    <TextField
                        style={{ width: "240px" }}
                        fullWidth
                        type="text"
                        id="evaluation"
                        autoComplete="off"
                        required
                        value={tokenName}
                        onChange={(e)=>{setTokenName(e.target.value)}}
                        className="form-textfield"
                        focused
                        sx={{ input: { color: "#fff", fontSize: "20px" } }}
                      />  
                    </Grid>
          
                  </Grid>

                  <Grid container spacing={1} sx={{ mb: 5 }}>
                    <Grid item xs={12} md={6}>
                      <Typography
                        style={{ textAlign: "start", marginLeft: "60px" }}
                        noWrap
                        variant="h6"
                        className="form-label"
                      >
                        Token Symbol
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        style={{ width: "240px" }}
                        fullWidth
                        type="text"
                        id="evaluation"
                        autoComplete="off"
                        required
                        onChange={(e)=>{setTokenSymbol(e.target.value)}}
                        value={tokenSymbol}
                        className="form-textfield"
                        focused
                        sx={{ input: { color: "#fff", fontSize: "20px" } }}
                      />   
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} sx={{ mb: 5 }}>
                    <Grid item xs={12} md={6}>
                      <Typography
                        style={{ textAlign: "start", marginLeft: "60px" }}
                        noWrap
                        variant="h6"
                        className="form-label"
                      >
                        Token Logo
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
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
                      className="btn-1"
                      onClick={() => {
                        uploafdTokentoipfs()
                        
                      }}
                      variant="contained"
                    >
                      upload
                    </Button>
                    </Grid>
                  </Grid>
                  <Button
                      className="btn-1"
                      onClick={()=>generateRewards()}
                      variant="contained"
                    >
                      Generate Tokens
                    </Button>
                </Box>
              </CardContent>
            </Box>
          </Grid>}
        </Grid>
        <div style={{ marginBottom: "50px" }}></div>
      </Container>}
      <Loading open={openLoading} handleClose={handleLoaderToggle} />
      {openMsg&&<div onClick={handleModalClose}><ModalBox
        open={openMsg}
       
        modalTitle={modalTitle}
        description={modalDesc}
      /></div>}
    </React.Fragment>
  );
}

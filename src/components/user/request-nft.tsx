import * as React from "react";

import Container from "@mui/material/Container";
import { Box, Button, Grid, Input, InputLabel, TextField, Typography } from "@mui/material";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import Loading from "../Loading";
import ModalBox from "../Modal";

export default function RequestNft(props: any) {

  const [companyObject, setCompanyObject] = React.useState<any>();

  const [openMsg, setOpenMsg] = React.useState(false);
  const [openLoading, setOpenLoading] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState<any>("");
  const [modalDesc, setModalDesc] = React.useState<any>("");
  const [selectedValue, setSelectedValue] = React.useState<any>("");
const [companyId, setCompanyId] = React.useState<any>("");
const [name,setName]=React.useState<any>("");
const [email,setEmail] = React.useState<any>("")
const {address:walletAddress}=useAccount();
const handleSelectChange = (event:any) => {
  const selectedCompany = companyObject?.data.find((item:any) => item.name === event.target.value);
  const companyId = selectedCompany ? selectedCompany._id : "";
  console.log("Company Id:",companyId);
  setSelectedValue(event.target.value);
  setCompanyId( companyId );
};

 
  React.useEffect(() => {
    handleLoaderToggle(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://dev.api.gratie.xyz/api/v1/org/list?status=APPROVED"
        );
        console.log("Company Data:", response.data);
       setCompanyObject(response.data);
      } catch (error) {
        console.error("Error occurred:", error);

      }
      handleLoaderToggle(false)
    };
  
    fetchData();
  }, []);

let formObject={
  name:"",
  email:"",
  status:"",
  walletAddr:"",
  companyId:""
}
if(name&&email&&companyId&&walletAddress){
  formObject.name = name;
    formObject.email = email;
    formObject.status = "APPROVE";
    formObject.walletAddr = walletAddress;
    formObject.companyId = companyId;
}
  console.log("Form Object:",formObject);
  const handleLoaderToggle = (status: boolean) => {
    setOpenLoading(status);
  };
  const handleRequestNFT = async (event: React.FormEvent) => {
    event.preventDefault();
    handleLoaderToggle(true);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObject),
      };
    try {
      
      const response = await axios.post(
      'http://dev.api.gratie.xyz/api/v1/org/user',
      requestOptions.body,
      { headers: requestOptions.headers }
    );
      
      console.log("Data after NFT request:", response.data);
      handleLoaderToggle(false);
      toast.success("🦄NFT Requested!", {
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
          setModalTitle("NFT Requested!");
          setModalDesc("You will be able to claim your NFT after the company approves.)")
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
  return (<>
    <Container sx={{ mt: 3 }} className="create-user-container">
      <Box className="form-box" style={{ width: "600px", margin: "0px auto" }}>
        <Grid
          container
          spacing={1}
          sx={{ mt: 5, mb: 5 }}
          style={{ justifyContent: "center" }}
        >
          <Grid item xs={12} md={5}>
            <Typography
              noWrap
              variant="h6"
              style={{ textAlign: "start" }}
              className="form-label"
            >
              Name
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} className="user-grid">
            <TextField
              fullWidth
              id="name"
              type="text"
              autoComplete="off"
              required
              value={name}
              onChange={(e)=>{setName(e.target.value);}}
              className="form-textfield"
              focused
              sx={{ input: { color: "#fff", fontSize: "20px" } }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          sx={{ mt: 5, mb: 5 }}
          style={{ justifyContent: "center" }}
        >
          <Grid item xs={12} md={5}>
            <Typography
              noWrap
              variant="h6"
              style={{ textAlign: "start" }}
              
              className="form-label"
            >
              Company Email
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} className="user-grid">
            <TextField
              fullWidth
              id="name"
              type="text"
              autoComplete="off"
              required
              value={email}
              onChange={(e)=>{setEmail(e.target.value);}}
              className="form-textfield"
              focused
              sx={{ input: { color: "#fff", fontSize: "20px" } }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          sx={{ mt: 5, mb: 5 }}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid item xs={12} md={5}>
            <Typography
              noWrap
              variant="h6"
              style={{ textAlign: "start" }}
              className="form-label"
            >
              Company Name
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} className="user-grid">
  <FormControl sx={{ m: 1, minWidth: 234 }}>
    


<Select style={{color:"white"}}
    value={selectedValue}
    onChange={handleSelectChange}
    renderValue={(value) => (
      <div>{value}</div>
    )}
    inputProps={{ "aria-label": "Without label" }}
    
    >
      {companyObject?.data.map((item: any) => (
        <MenuItem key={item._id} style={{ backgroundColor: "black", color: "white" }} value={item.name}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          sx={{ mt: 5, mb: 5 }}
          style={{ justifyContent: "end", alignItems: "center" }}
        >
          <Grid item xs={12} md={5}>
            <Button
              type="submit"
              variant="contained"
              className="create-token-btn"
              style={{ margin: "0px 30px 0px 0px" }}
              onClick={handleRequestNFT}
            >
              NFT Request
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
    <Loading open={openLoading} handleClose={handleLoaderToggle} />
    {openMsg&&<ModalBox
      open={openMsg}
      modalTitle={modalTitle}
      description={modalDesc}
    />}
    </>
  );
}

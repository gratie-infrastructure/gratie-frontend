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
import { useAccount } from "wagmi";

export default function Profile(props: any) {
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
  const handleModalClose = () => {
    setOpenMsg(false);
    setModalTitle("");
    setModalDesc("");
  };

  const handleLoaderToggle = (status: boolean) => {
    setOpenLoading(status);
  };
 const {address:walletAddress}=useAccount()
  const onValChange = (event: any) => {
    const value = (res: any) => ({
      ...res,
      [event.target.id]: event.target.value,
    });
    setFormObject(value);
  };

  React.useEffect(() => {
    handleLoaderToggle(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://devapi.gratie.xyz/api/v1/org/user/companies?walletAddr=${walletAddress}`
        );
        console.log("Company Data for profile:", response.data.data[0]);
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
  const companies = companyObject?.data[0].companies;
  const companyNames:any = companies?.map((company: { name: any; }) => company.name);
  const companyNamesText = companyNames?.join(", ");
  return (
    <React.Fragment>
      <Grid className="" xs={9} >
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
                      <Typography  style={{ fontSize:"18px",textAlign: "start", marginLeft: "60px" }}>{companyObject?.data[0]?.name}</Typography>
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
                        List of Company
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Typography style={{ fontSize:"18px",textAlign: "start", marginLeft: "60px" }}>{companyNamesText}</Typography>
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
                        Earned NFTS
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} >
                    {companies.map((company:any) => (
        <div key={company._id}>
         
          <img src={company.tokenIconUrl} alt={company.tokenName} style={{ width: 100 }} />
          <p>Token Name: {company.tokenName}</p>
          
        </div>
      ))}
                        
                    </Grid>
          
                  </Grid>

                
                  
                </Box>
              </CardContent>
            </Box>
          </Grid>
      <Loading open={openLoading} handleClose={handleLoaderToggle} />
      <ModalBox
        open={openMsg}
        handleClose={handleModalClose}
        heading={modalTitle}
        description={modalDesc}
      />
    </React.Fragment>
  );
}

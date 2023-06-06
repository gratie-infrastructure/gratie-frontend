import React from "react";
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

import Loading from "../Loading";
import ModalBox from "../Modal";

export default function FormPage(props: any) {

  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    evaluation: "",
    jsonMetadataUrl: "",
  });

  const [openMsg, setOpenMsg] = React.useState(false);
  const [openLoading, setOpenLoading] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalDesc, setModalDesc] = React.useState("");

  const handleModalClose = () => {
    setOpenMsg(false);
    setModalTitle("");
    setModalDesc("");
  };
  const handleLoaderToggle = (status: boolean) => {
    setOpenLoading(status);
  };

  const onValChange = (event: any) => {
    console.log("event", event.target.value);

    const value = (res: any) => ({
      ...res,
      [event.target.id]: event.target.value,
    });
    setFormObject(value);
  };

  return (
    <React.Fragment>
      <Container>
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
                >
                  Company Details
                </Button>
              </div>
              <div className="">
                <Button
                  className="R-btn"
                  style={{ width: "100%" }}
                  variant="contained"
                >
                  Token Details
                </Button>
              </div>
            </div>
          </Grid>
          <Grid xs={9}>
            <Box
              className="form-box"
              style={{ marginBottom: "0px", textAlign: "start" }}
            >
              <CardContent>
                <Box
                  component="form"
                  noValidate
                  sx={{ mt: 6 }}
                >
                  <div className="edit-btn-wrap">
                    <Button variant="text" className="edit-btn">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.71429 21.1272L1 23.2872L3.16 15.5729L17.2857 1.51579C17.4454 1.35251 17.636 1.22277 17.8465 1.1342C18.057 1.04563 18.2831 1 18.5114 1C18.7398 1 18.9659 1.04563 19.1763 1.1342C19.3868 1.22277 19.5775 1.35251 19.7371 1.51579L22.7714 4.56722C22.9321 4.72658 23.0596 4.91618 23.1467 5.12508C23.2337 5.33399 23.2785 5.55805 23.2785 5.78436C23.2785 6.01066 23.2337 6.23473 23.1467 6.44363C23.0596 6.65253 22.9321 6.84214 22.7714 7.0015L8.71429 21.1272Z"
                          stroke="#F5F5F5"
                          stroke-width="1.71429"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Button>
                  </div>
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
                      <TextField
                        fullWidth
                        style={{ width: "240px" }}
                        type="text"
                        id="name"
                        autoComplete="off"
                        required
                        onChange={onValChange}
                        value={formObject.name}
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
                        Company Email
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        style={{ width: "240px" }}
                        fullWidth
                        type="text"
                        id="email"
                        autoComplete="off"
                        required
                        onChange={onValChange}
                        value={formObject.email}
                        className="form-textfield"
                        focused
                        sx={{ input: { color: "#fff", fontSize: "20px" } }}
                      />
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
                    <Grid item xs={12} md={4}>
                      <TextField
                        style={{ width: "240px" }}
                        fullWidth
                        type="text"
                        id="evaluation"
                        autoComplete="off"
                        required
                        onChange={onValChange}
                        value={formObject.evaluation}
                        className="form-textfield"
                        focused
                        sx={{ input: { color: "#fff", fontSize: "20px" } }}
                      />
                    </Grid>
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
                      <Select
                        sx={{ m: 1, minWidth: 150, color: "#fff" }}
                        style={{ width: "240px", margin: "0px" }}
                        labelId="tierID"
                        displayEmpty
                        input={<OutlinedInput />}
                        id="tierID"
                        label="Subscription"
                      >
                        <MenuItem disabled value="">
                          <em>Select</em>
                        </MenuItem>
                        <MenuItem selected value="1">
                          Fractal
                        </MenuItem>
                        <MenuItem value="2">Optical</MenuItem>
                        <MenuItem value="3">Paradise</MenuItem>
                        <MenuItem value="4">Cosmos</MenuItem>
                      </Select>
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
                    >
                      Submit
                    </Button>
                  </Grid>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        </Grid>
        <div style={{ marginBottom: "50px" }}></div>
      </Container>
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

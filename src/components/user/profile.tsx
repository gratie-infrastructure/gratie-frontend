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

  const handleModalClose = () => {
    setOpenMsg(false);
    setModalTitle("");
    setModalDesc("");
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
                }}
                variant="h6"
                component="h6"
              >
                Available supply : #value
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
                    style={{ textAlign: "start" }}
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
                    onChange={onValChange}
                    value={formObject.name}
                    className="form-textfield"
                    focused
                    sx={{ input: { color: "#fff", fontSize: "20px" } }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography
                    noWrap
                    variant="h6"
                    style={{
                      color: "rgba(245, 245, 245, 0.5)",
                      textAlign: "start",
                      marginLeft: "20px",
                    }}
                    className="form-label"
                  >
                    #value
                  </Typography>
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
                    #Nos
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
                <Grid item xs={12} md={5}>
                  <Button
                    type="submit"
                    variant="contained"
                    className="create-token-btn"
                    style={{ margin: "0px 30px 0px 0px" }}
                  >
                    Generate Rewards
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography noWrap variant="h6" sx={{ color: "#fff" }}>
                Total Tokens generated :
              </Typography>
              <Typography
                noWrap
                variant="h6"
                sx={{ color: "#fff" }}
                className="profile-label"
              >
              </Typography>
            </div>
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
  );
}

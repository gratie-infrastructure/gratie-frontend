import * as React from "react";

import Container from "@mui/material/Container";
import { Box, Button, Grid } from "@mui/material";

import styles from "./home.module.css";
import ModalBox from "../Modal";

export default function Home() {
  const [openMsg, setOpenMsg] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalDesc, setModalDesc] = React.useState("");

  const handleModalClose = () => {
    setOpenMsg(false);
    setModalTitle("");
    setModalDesc("");
  };

  const forceWalletConnection = (url: string) => {
    window.location.replace(url);
  };

  return (
    <>
      <React.Fragment>
        <Container component="main" maxWidth="md">
          <Box
            className={styles.homeMainBox}
            component="form"
            noValidate
            sx={{ mt: 12 }}
          >
            <Grid container spacing={2}>
              <p className="company-welcome-text">
                Welcome to next generation crypto reward management system !
              </p>
              <Grid
                className="company-main-content"
                item
                xs={12}
                md={12}
                style={{ paddingTop: "80px" }}
              >
                <div style={{ paddingRight: "120px" }}>
                  <Button onClick={() => forceWalletConnection("/company")}>
                    I am an Enterprise
                  </Button>
                </div>
                <Button onClick={() => forceWalletConnection("/user")}>
                  I work for an Enterprise
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <ModalBox
          open={openMsg}
          handleClose={handleModalClose}
          heading={modalTitle}
          description={modalDesc}
        />
      </React.Fragment>
    </>
  );
}

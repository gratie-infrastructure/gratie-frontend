import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { CardContent } from "@mui/material";

import ModalBox from "../Modal";
import Loading from "../Loading";

export default function List(props: any) {
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
                    <TextField id="outlined-basic" variant="outlined" />
                  </div>
                  <div className="buy-form">
                    <Typography variant="subtitle2">Company Email</Typography>
                    <TextField id="outlined-basic" variant="outlined" />
                  </div>
                  <div className="buy-form">
                    <Typography variant="subtitle2">NFT Tier</Typography>
                    <Typography variant="subtitle2" className="sub-buy-nft">
                      Paradise
                    </Typography>
                  </div>
                  <div className="center-btn">
                    <Button variant="contained">Connect wallet</Button>
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

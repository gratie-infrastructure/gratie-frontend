import * as React from "react";

import Container from "@mui/material/Container";
import { Box, Button, Grid, Typography } from "@mui/material";

export default function ClaimToken(props: any) {
  return (
    <Container sx={{ mt: 3 }} className="create-user-container">
      <Box className="form-box" style={{ width: "600px", margin: "0px auto" }}>
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
          XXX REWARD
        </Typography>
        <Grid
          container
          spacing={1}
          sx={{ mt: 5, mb: 5 }}
          style={{ justifyContent: "center" }}
        >
          <Grid item xs={12} md={5}>
            <Typography noWrap variant="h6" className="form-label">
              xxx Token
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} className="user-grid">
            <Button
              type="submit"
              variant="contained"
              className="create-token-btn"
              style={{
                margin: "0px 30px 0px 0px",
                width: "150px",
                background: "transparent",
                border: "1px solid #00FF01",
              }}
            >
              Claim
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

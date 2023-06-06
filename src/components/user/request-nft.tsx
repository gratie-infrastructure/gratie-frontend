import * as React from "react";

import Container from "@mui/material/Container";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function RequestNft(props: any) {
  return (
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
              value=""
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
              value=""
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
              <Select
                value=""
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={10}>aaa</MenuItem>
                <MenuItem value={20}>bbb</MenuItem>
                <MenuItem value={30}>ccc</MenuItem>
                <MenuItem value={40}>ddd</MenuItem>
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
            >
              NFT Request
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

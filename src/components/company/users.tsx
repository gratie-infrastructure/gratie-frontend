import * as React from "react";

import Container from "@mui/material/Container";
import { Box, Button, CardContent, TextField } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import Loading from "../Loading";
import ModalBox from "../Modal";

export default function CreateUsers(props: any) {
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

  const label = { inputProps: { "aria-label": "Select" } };

  return (
    <Container sx={{ mt: 3 }} className="create-user-container">
      <div className="btn-group">
        <Button variant="outlined">User Request</Button>
        <Button variant="outlined">Existing Users </Button>
      </div>
      <Box className="form-box">
        <CardContent>
          <div className="card-search-wrap">
            <TextField
              className="search_bar"
              variant="outlined"
              value=""
              placeholder="Search the user"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="table-wrap">
            <TableContainer>
              <Table aria-label="My Table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Wallet address</TableCell>
                    <TableCell>
                      Select <Checkbox {...label} />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>abc</TableCell>
                    <TableCell>abc@gmail.com</TableCell>
                    <TableCell>0X...4532</TableCell>
                    <TableCell>
                      <Checkbox {...label} />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>abc</TableCell>
                    <TableCell>abc@gmail.com</TableCell>
                    <TableCell>0X...4532</TableCell>
                    <TableCell>
                      <Checkbox {...label} defaultChecked />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>abc</TableCell>
                    <TableCell>abc@gmail.com</TableCell>
                    <TableCell>0X...4532</TableCell>
                    <TableCell>
                      <Checkbox {...label} defaultChecked />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>abc</TableCell>
                    <TableCell>abc@gmail.com</TableCell>
                    <TableCell>0X...4532</TableCell>
                    <TableCell>
                      <Checkbox {...label} defaultChecked />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="del-btn-wrap">
                <Button variant="text">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 85 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="42.5"
                      cy="42.5"
                      r="41.5"
                      stroke="#FF0000"
                      stroke-width="2"
                    />
                    <path
                      d="M58.6245 35.9883L55.0412 64.6549H29.9578L26.3745 35.9883"
                      stroke="#FF0000"
                      stroke-width="1.71429"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 28.8218H64"
                      stroke="#FF0000"
                      stroke-width="1.71429"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M33.3989 27.7825V21.5833C33.3989 20.633 33.7765 19.7215 34.4485 19.0495C35.1205 18.3775 36.0319 18 36.9823 18H47.7323C48.6826 18 49.5941 18.3775 50.2661 19.0495C50.9381 19.7215 51.3156 20.633 51.3156 21.5833V28.75"
                      stroke="#FF0000"
                      stroke-width="1.71429"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M39 40L39.3636 56M47 40V56"
                      stroke="#FF0000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </TableContainer>
          </div>
        </CardContent>
      </Box>
      <Loading open={openLoading} handleClose={handleLoaderToggle} />
      <ModalBox
        open={openMsg}
        handleClose={handleModalClose}
        heading={modalTitle}
        description={modalDesc}
      />
    </Container>
  );
}

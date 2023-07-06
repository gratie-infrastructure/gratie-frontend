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
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";
import axios from "axios";
import { toast } from "react-toastify";
import { GRATIE_ABI, GRATIE_CONTRACT_ADDRESS } from "@/constants/Gratie";

export default function CreateUsers(props: any) {
  const [openMsg, setOpenMsg] = React.useState(false);
  const [openLoading, setOpenLoading] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalDesc, setModalDesc] = React.useState("");
  const [approvedUsers,setApprovedUsers]=React.useState<any>()
  const [companyObject,setCompanyObject]=React.useState<any>();
  const [selectedAddresses, setSelectedAddresses] = React.useState<string[]>([]);

  const {address:walletAddress}=useAccount();
  console.log(walletAddress)
  React.useEffect(() => {
    handleLoaderToggle(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://devapi.gratie.xyz/api/v1/org/user/list?status=PENDING&walletAddr=${walletAddress}`
        );
        console.log("Company Data:", response.data);
        if (response.data?.data.length === 0 ) {
          setOpenMsg(true)
        setModalTitle("You are not yet approved!");
        setModalDesc("Nothing to show here")
        } else {
          setCompanyObject(response.data);
        }

  
      } catch (error) {
        console.error("Error occurred:", error);
        setOpenMsg(true)
        setModalTitle("You are not yet approved!");
        setModalDesc("Please wait till we approve!")
      }
      handleLoaderToggle(false)
    };
    const fetchApprovedData = async () => {
      try {
        const response = await axios.get(
          `https://devapi.gratie.xyz/api/v1/org/user/list?status=PENDING&walletAddr=${walletAddress}`
        );
        console.log("Company Data:", response.data);
        if (response.data?.data.length === 0 ) {
          setOpenMsg(true)
        setModalTitle("You are not yet approved!");
        setModalDesc("Nothing to show here")
        } else {
          setApprovedUsers(response.data);
        }

  
      } catch (error) {
        console.error("Error occurred:", error);
        
      }
      handleLoaderToggle(false)
    };
    fetchData();
    fetchApprovedData();
  }, []);

  const handleModalClose = () => {
    setOpenMsg(false);
    setModalTitle("");
    setModalDesc("");
  };
  const handleLoaderToggle = (status: boolean) => {
    setOpenLoading(status);
  };

  console.log("Selected Addresses:", selectedAddresses);
  const { data: aprovedata, write: approve } = useContractWrite({
    address: GRATIE_CONTRACT_ADDRESS,
    abi: GRATIE_ABI,
    functionName: "registerServiceProviders",
    args: [companyObject?.data[0]?.tokenId, 1, selectedAddresses],
  });
  const { isLoading, isSuccess: aprroveSuccess,error:approveError } = useWaitForTransaction({
    hash: aprovedata?.hash,
  });
  console.log("Approval Data:",[companyObject?.data[0]?.tokenId, 1, selectedAddresses]);
  console.log("Approval Success:", aprroveSuccess);
  
  // console.log(aprovedata?.hash);
  if (aprroveSuccess) {
    console.log("successfully Approved !");
    toast.success("🦄 successfully Approved users", {
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
  if (approveError) {
    console.log("error occured", approveError.message);
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
 
  
 

  const label = { inputProps: { "aria-label": "Select" } };

  return (
    <Container sx={{ mt: 3, }} className="create-user-container">
      <div className="btn-group">
        <Button variant="outlined">User Request</Button>
        <Button variant="outlined">Existing Users </Button>
      </div>
      <Box className="form-box" width={900}>
        <CardContent>
          
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
                  {companyObject?.data[0]?.users.map((i:any)=><TableRow>
                    <TableCell>{i.name}</TableCell>
                    <TableCell>{i.email}</TableCell>
                    <TableCell>{i.walletAddr.substring(0, 6) +
                      "..." +
                      i.walletAddr.substring(
                        i.walletAddr.length - 4,
                        i.walletAddr.length
                      )}</TableCell>
                    <TableCell>
                    <Checkbox
  {...label}
  checked={selectedAddresses.includes(i.walletAddr)}
  onChange={(e) => {
    const checked = e.target.checked;
    if (checked) {
      setSelectedAddresses((prevAddresses) => [...prevAddresses, i.walletAddr]);
    } else {
      setSelectedAddresses((prevAddresses) =>
        prevAddresses.filter((address) => address !== i.walletAddr)
      );
    }
  }}
/>

                    </TableCell>
                  </TableRow>)}
                  
                </TableBody>
              </Table>
              <div className="del-btn-wrap">
              <Button className="btn-1" variant="contained" onClick={()=>{approve();


              }
              }>
  Approve
</Button>
                {/* <Button variant="text">
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
                </Button> */}
              </div>
            </TableContainer>
          </div>
        </CardContent>
      </Box>
      <Loading open={openLoading} handleClose={handleLoaderToggle} />
      <ModalBox
        open={openMsg}
        heading={modalTitle}
        description={modalDesc}
      />
    </Container>
  );
}

import React from 'react'

  import Tabs from "@mui/material/Tabs";
  import Tab from "@mui/material/Tab";
  import Typography from "@mui/material/Typography";
  import Box from "@mui/material/Box";
  import Container from "@mui/material/Container";
  import { useEffect } from "react";
  import ListUserTable from "./table";
  import TierCreation from "./tier";
import { useAccount, useConnect, useContractRead } from 'wagmi';
import { GRATIE_ABI, GRATIE_CONTRACT_ADDRESS } from '@/constants/Gratie';
import Loading from '../Loading';
import ModalBox from '../Modal';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
  
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

function TabPanel(props: TabPanelProps) {

      const { children, value, index, ...other } = props;
      
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }
    
    function a11yProps(index: number) {
      return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
      };
    }
    
    export default function ListOfRequests() {
      const [value, setValue] = React.useState(0);
      const [pendingLicenses, setPendingLicenses] = React.useState(null);
      const [approvedLicenses, setApprovedLicenses] = React.useState(null);
      const [companyData, setCompanyData]=React.useState<any>();
      const [openMsg, setOpenMsg] = React.useState(false);
  const [openLoading, setOpenLoading] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalDesc, setModalDesc] = React.useState("");
    const { address, isConnected, isDisconnected } = useAccount();

    const handleLoaderToggle = (status: boolean) => {
      setOpenLoading(status);
    };
  
      const { data: adminData } = useContractRead({
          address: GRATIE_CONTRACT_ADDRESS,
          abi: GRATIE_ABI,
          functionName: "hasRole",
          args: ["0x1e5ca7d599fb35041afe8c30005054e07b396952ed6970c661389db329398daf", address],
          onError(error) {
            console.log('Error', error)
          },
        });
    console.log("Admin data:",adminData );

  
  
      const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };
      React.useEffect(() => {
      
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "http://dev.api.gratie.xyz/api/v1/org/list?status=PENDING"
            );
            console.log("Pending company Data:", response.data);
           setCompanyData(response.data);
           console.log("Company Data:", companyData.data[0].name);
          } catch (error) {
            console.error("Error occurred:", error);
          }
          
        };
      
        fetchData();
      }, []);
    
      return (
        <Container className="admin-list" component="main" maxWidth="md">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  className={value == 0 ? "selected-tab" : "non-selected-tab"}
                  label="Pending Company"
                  {...a11yProps(0)}
                />
                <Tab
                  className={value == 1 ? "selected-tab" : "non-selected-tab"}
                  label="Verified Company"
                  {...a11yProps(1)}
                />

              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {companyData && (
                <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Valuation</TableCell>
                      <TableCell>Distribution</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Wallet Address</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {companyData?.data.map((i:any) => (<ListUserTable data={i}/>))}
                  </TableBody>
                </Table>
              </TableContainer>
              )}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {approvedLicenses && <ListUserTable data={companyData.data} />}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {<TierCreation />}
            </TabPanel>
          </Box>
        </Container>
        
      );
    }


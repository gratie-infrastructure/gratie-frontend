import * as React from "react";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Token from "./token";
import Profile from "./profile";
import Users from "./users";
import Subscription from "./subscription";
import ListUsers from "./list";

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
        <Box sx={{ p: 0, ml: 0 }}>
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

export default function CompanyTab(props: any) {
  const [value, setValue] = React.useState(props.showProfile ? 4 : 0);

  const [data, setData] = React.useState();

  const handleDataFromChild1 = (childData:any) => {
   
    setData(childData);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClickTab = (tabNo: number) => {
    setValue(tabNo);
  };

  return (
    <Grid
      className="admin-list"
      style={{ maxWidth: "2200px" }}
      component="main"
      container
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            style={{ justifyContent: "center" }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              style={{ marginRight: "54px" }}
              className={value == 0 || 4 ? "selected-tab" : "non-selected-tab"}
              label="Subscription"
              {...a11yProps(0)}
            />
            <Tab
              style={{ marginRight: "54px" }}
              className={value == 1 ? "selected-tab" : "non-selected-tab"}
              label="Profile"
              {...a11yProps(1)}
            />
            <Tab
              style={{ marginRight: "54px" }}
              className={value == 2 ? "selected-tab" : "non-selected-tab"}
              label="User"
              {...a11yProps(2)}
            />
            <Tab
              className={value == 3 ? "selected-tab" : "non-selected-tab"}
              label="Issue reward"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <Grid item xs={12}>
          <TabPanel value={value} index={0}>
            {<Subscription  onData={handleDataFromChild1} handleClickTab={handleClickTab} />}
          </TabPanel>
        </Grid>
        <Grid item xs={12}>
          <TabPanel value={value} index={1}>
            {<Profile/>}
          </TabPanel>
        </Grid>
        <Grid item xs={12}>
          <TabPanel value={value} index={2}>
            {<Users/>}
          </TabPanel>
        </Grid>
        <Grid item xs={12}>
          <TabPanel value={value} index={3}>
            {<Token/>}
          </TabPanel>
        </Grid>
        <Grid item xs={12}>
          <TabPanel value={value} index={4}>
            {<ListUsers data={data} />}
          </TabPanel>
        </Grid>
      </Box>
    </Grid>
  );
}

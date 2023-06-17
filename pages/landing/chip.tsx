import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

export default function Chip() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={1} sx={{ margin: "auto" }}>
      <Typography
        variant="h1"
        gutterBottom
        style={{
          textAlign: "center",
          width: "100%",
          fontFamily: "ClashDisplay-Variable",
          fontWeight: "600",
          fontSize: "42px",
          marginBottom: "40px",
          marginTop: "40px",
        }}
      >
        Our Solutions
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            className="landing-tab"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className="single-tab"
              label="Reward Infrastructure"
              {...a11yProps(0)}
            />
            <Tab
              className="single-tab"
              label="Healthy ecosystem"
              {...a11yProps(1)}
            />
            <Tab
              className="single-tab"
              label="Customer analysis"
              {...a11yProps(2)}
            />
            <Tab
              className="single-tab"
              label="Improve retention"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2} style={{ alignItems: "center" }}>
            <Grid item xs={5}>
              <img
                alt="rewardBox"
                src="/images/gift-box-landing.png"
                className="image"
              />
            </Grid>
            <Grid item xs={7}>
              <Typography
                variant="body1"
                gutterBottom
                style={{ fontFamily: "DM Sans", fontSize: "24px" }}
              >
                Decentralized infrastructure where enterprise 
                can create reward incentivization using 
                cryptocurrency which will keep the service
                providers loyal and motivated to stay within 
                the enterprise.
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={2} style={{ alignItems: "center" }}>
            <Grid item xs={5}>
              <img
                alt="rewardBox"
                src="/images/gift-box-landing.png"
                className="image"
              />
            </Grid>
            <Grid item xs={7}>
              <Typography
                variant="body1"
                gutterBottom
                style={{ fontFamily: "DM Sans", fontSize: "24px" }}
              >
                Retaining service providers is difficult for 
                shared economy businesses, where they 
                tend to find loopholes to eliminate platform 
                fees. By using our infrastructure enterprises 
                can reward back to the service providers and 
                maintain a healthy ecosystem.
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={2} style={{ alignItems: "center" }}>
            <Grid item xs={5}>
              <img
                alt="rewardBox"
                src="/images/gift-box-landing.png"
                className="image"
              />
            </Grid>
            <Grid item xs={7}>
              <Typography
                variant="body1"
                gutterBottom
                style={{ fontFamily: "DM Sans", fontSize: "24px" }}
              >
                Enterprises can list their rewarding token to 
                open markets where new consumers can 
                invest and trade. Collaborating with co-
                relating services to use rewarded tokens.
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid container spacing={2} style={{ alignItems: "center" }}>
            <Grid item xs={5}>
              <img
                alt="rewardBox"
                src="/images/gift-box-landing.png"
                className="image"
              />
            </Grid>
            <Grid item xs={7}>
              <Typography
                variant="body1"
                gutterBottom
                style={{ fontFamily: "DM Sans", fontSize: "24px" }}
              >
                Boost retention rates by offering incentives to 
                users and employees, creating a thriving 
                network that sustains long-term growth and a 
                harmonious business environment.
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Grid>
  );
}

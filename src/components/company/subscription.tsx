import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Arrow from "@mui/icons-material/ArrowRight";
import { Container } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

export default function Subscription(props: any) {
  return (
    <Container sx={{ mt: 1 }}>
      <br />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
      >
        <Grid item xs={12} md={6} lg={4}>
          <Box className="price-box price-box1">
            <div className="card-box">
              <img
                width={120}
                height={120}
                alt="price1"
                src="/images/NFT4 .png"
                className="nft-price"
              />
              <br />
              <Typography
                variant="h5"
                sx={{
                  fontSize: "30px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                  mt: 3,
                }}
              >
                Fractal
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                }}
              >
                3 SQL
                <img
                  width={30}
                  height={21}
                  alt="price1"
                  src="/images/Solona icon.png"
                />
              </Typography>
              <br />
              <Button
                variant="contained"
                onClick={() => props.handleClickTab(4)}
                className="social-button"
              >
                {" "}
                Buy Now <Arrow sx={{ color: "#fff" }} />{" "}
              </Button>
            </div>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box className="price-box price-box2">
            <div className="card-box">
              <img
                width={120}
                height={120}
                alt="price1"
                src="/images/NFT3 .png"
                className="nft-price"
              />
              <Typography
                variant="h5"
                sx={{
                  fontSize: "30px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                  mt: 3,
                }}
              >
                Optical
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                }}
              >
                3 SQL
                <img
                  width={30}
                  height={21}
                  alt="price1"
                  src="/images/Solona icon.png"
                />
              </Typography>
              <br />
              <Button
                variant="contained"
                onClick={() => props.handleClickTab(4)}
                className="social-button"
              >
                {" "}
                Buy Now <Arrow sx={{ color: "#fff" }} />{" "}
              </Button>
            </div>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box className="price-box price-box3">
            <div className="card-box">
              <img
                width={120}
                height={120}
                alt="price1"
                src="/images/NFT2.png"
                className="nft-price"
              />
              <Typography
                variant="h5"
                sx={{
                  fontSize: "30px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                  mt: 3,
                }}
              >
                Paradise
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                }}
              >
                3 SQL
                <img
                  width={30}
                  height={21}
                  alt="price1"
                  src="/images/Solona icon.png"
                />
              </Typography>
              <br />
              <Button
                variant="contained"
                onClick={() => props.handleClickTab(4)}
                className="social-button"
              >
                {" "}
                Buy Now <Arrow sx={{ color: "#fff" }} />{" "}
              </Button>
            </div>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box className="price-box price-box4">
            <div className="card-box">
              <img
                width={120}
                height={120}
                alt="price1"
                src="/images/NFT1.png"
                className="nft-price"
              />
              <br />
              <Typography
                variant="h5"
                sx={{
                  fontSize: "30px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                  mt: 3,
                }}
              >
                Cosmos
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                }}
              >
                3 SQL
                <img
                  width={30}
                  height={21}
                  alt="price1"
                  src="/images/Solona icon.png"
                />
              </Typography>
              <br />
              <Button
                onClick={() => props.handleClickTab(4)}
                variant="contained"
                className="social-button"
              >
                {" "}
                Buy Now <Arrow sx={{ color: "#fff" }} />{" "}
              </Button>
            </div>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box className="price-box price-box4">
            <div className="card-box">
              <img
                width={120}
                height={120}
                alt="price1"
                src="/images/NFT1.png"
                className="nft-price"
              />
              <br />
              <Typography
                variant="h5"
                sx={{
                  fontSize: "30px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                  mt: 3,
                }}
              >
                Cosmos
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                }}
              >
                3 SQL
                <img
                  width={30}
                  height={21}
                  alt="price1"
                  src="/images/Solona icon.png"
                />
              </Typography>
              <br />
              <Button
                onClick={() => props.handleClickTab(4)}
                variant="contained"
                className="social-button"
              >
                {" "}
                Buy Now <Arrow sx={{ color: "#fff" }} />{" "}
              </Button>
            </div>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box className="price-box price-box4">
            <div className="card-box">
              <img
                width={120}
                height={120}
                alt="price1"
                src="/images/NFT1.png"
                className="nft-price"
              />
              <br />
              <Typography
                variant="h5"
                sx={{
                  fontSize: "30px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                  mt: 3,
                }}
              >
                Cosmos
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Book antique",
                  color: "#d9d9d9",
                  textAlign: "center",
                }}
              >
                3 SQL
                <img
                  width={30}
                  height={21}
                  alt="price1"
                  src="/images/Solona icon.png"
                />
              </Typography>
              <br />
              <Button
                onClick={() => props.handleClickTab(4)}
                variant="contained"
                className="social-button"
              >
                {" "}
                Buy Now <Arrow sx={{ color: "#fff" }} />{" "}
              </Button>
            </div>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}

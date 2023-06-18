import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

// import ToggleButtonNotEmpty from './toggleMenu';
import Link from "next/link";

const pages = [
  { page: "About", link: "#useCase" },
  { page: "Pricing", link: "#price" },
  { page: "Community", link: "#community" },
  { page: "LitePaper", link: "#useCase" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [visibleWallet, setVisibleWallet] = React.useState(false);

  React.useEffect(() => setVisibleWallet(true));

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar className="navbar">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: "flex", alignItems: "center", margin: "auto" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  margin: "auto",
                  pr: 3,
                }}
              >
                <Link
                  style={{ display: "flex", alignItems: "center" }}
                  href="/"
                >
                  {/* <img width={70} height={70} alt='logo' src='/images/Favicon.png' className='logo-icon'/>
                  <img width={105} height={95} alt='logo' src='/images/Logo.png' /> */}
                  <svg
                    width="55"
                    height="54"
                    viewBox="0 0 55 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="27.8327"
                      cy="26.9714"
                      rx="27.1472"
                      ry="26.8161"
                      fill="black"
                    />
                    <path
                      d="M11.1738 20.2638C11.1738 20.2638 14.0658 12.3711 23.7546 10.2809C33.4434 8.19072 41.5272 17.3816 41.5272 17.3816L33.0521 17.2333C33.0521 17.2333 30.0241 13.1631 22.8276 13.5231C15.8655 13.8725 11.1738 20.2638 11.1738 20.2638Z"
                      fill="#32D94B"
                      stroke="#32D94B"
                      stroke-width="0.420027"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M36.7561 31.0068C36.7561 31.0068 35.2598 39.3697 25.9979 41.0998C16.736 42.83 11.1738 34.8992 11.1738 34.8992C11.1738 34.8992 14.4864 45.1362 27.4962 45.1362C40.506 45.1362 44.5218 31.0068 44.5218 31.0068H36.7561Z"
                      fill="#32D94B"
                      stroke="#32D94B"
                      stroke-width="0.420027"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.1957 39.5582C21.364 39.5595 19.5575 39.1263 17.9212 38.2932C16.2848 37.4602 14.8643 36.2506 13.7734 34.7615C12.6826 33.2724 11.9519 31.5453 11.6399 29.7187C11.328 27.8921 11.4435 26.0169 11.9772 24.2437C12.5109 22.4705 13.4479 20.8485 14.713 19.508C15.9781 18.1676 17.5362 17.1459 19.2621 16.5249C20.9879 15.904 22.8336 15.7012 24.651 15.9327C26.4683 16.1642 28.2068 16.8236 29.7267 17.858C29.7459 17.8705 29.7604 17.889 29.7682 17.9106C29.7761 17.9322 29.7767 17.9558 29.7701 17.9778C29.7635 17.9998 29.7499 18.0191 29.7315 18.0326C29.7131 18.0462 29.6909 18.0533 29.6681 18.0528C29.6558 18.0558 29.6429 18.0558 29.6305 18.0528C28.0733 17.4279 26.3887 17.1981 24.7236 17.3835C23.0585 17.5688 21.4635 18.1637 20.0777 19.1161C18.692 20.0686 17.5576 21.3498 16.7736 22.8479C15.9895 24.3459 15.5796 26.0154 15.5796 27.7107C15.5796 29.4059 15.9895 31.0754 16.7736 32.5735C17.5576 34.0715 18.692 35.3527 20.0777 36.3052C21.4635 37.2577 23.0585 37.8525 24.7236 38.0379C26.3887 38.2232 28.0733 37.9934 29.6305 37.3685H29.6681C29.6872 37.3685 29.706 37.3736 29.7225 37.3832C29.739 37.3929 29.7528 37.4068 29.7623 37.4235C29.7743 37.4468 29.7774 37.4739 29.7708 37.4993C29.7642 37.5247 29.7485 37.5468 29.7267 37.5612C27.7951 38.8707 25.5207 39.5661 23.1957 39.5582Z"
                      fill="#32D94B"
                    />
                    <path
                      d="M23.1968 15.952C25.5027 15.9483 27.7569 16.6431 29.6692 17.9469C28.0966 17.3168 26.3955 17.0855 24.7143 17.2733C23.0331 17.4611 21.4228 18.0623 20.0239 19.0244C18.6249 19.9865 17.4798 21.2803 16.6883 22.793C15.8968 24.3058 15.4831 25.9915 15.4831 27.7032C15.4831 29.4149 15.8968 31.1006 16.6883 32.6134C17.4798 34.1261 18.6249 35.4199 20.0239 36.382C21.4228 37.3441 23.0331 37.9453 24.7143 38.1331C26.3955 38.3209 28.0966 38.0896 29.6692 37.4595C28.1629 38.4829 26.4406 39.1349 24.6404 39.3632C22.8401 39.5915 21.0121 39.3897 19.3028 38.774C17.5936 38.1583 16.0507 37.1458 14.7978 35.8178C13.545 34.4898 12.6171 32.8832 12.0885 31.1268C11.5599 29.3703 11.4454 27.513 11.7541 25.7037C12.0628 23.8944 12.7861 22.1835 13.8661 20.7082C14.9461 19.2328 16.3527 18.0341 17.973 17.2082C19.5934 16.3822 21.3825 15.952 23.1968 15.952ZM23.1968 15.7403C21.3503 15.7405 19.5296 16.1784 17.8805 17.019C16.2314 17.8596 14.7998 19.0794 13.7004 20.5807C12.6011 22.0821 11.8646 23.8231 11.5499 25.6644C11.2352 27.5057 11.3511 29.396 11.8883 31.1837C12.4256 32.9715 13.3691 34.6071 14.6435 35.9593C15.9178 37.3116 17.4874 38.343 19.2266 38.9708C20.9657 39.5986 22.826 39.8053 24.6583 39.5745C26.4907 39.3437 28.2441 38.6817 29.7781 37.6416C29.8162 37.6177 29.8458 37.582 29.8624 37.5398C29.8791 37.4976 29.8818 37.4512 29.8703 37.4072C29.8588 37.3633 29.8337 37.3243 29.7986 37.296C29.7635 37.2676 29.7204 37.2515 29.6755 37.2498H29.6337C29.6171 37.2528 29.6009 37.2578 29.5855 37.2647C28.0443 37.8827 26.377 38.1097 24.7291 37.926C23.0813 37.7422 21.5029 37.1532 20.1316 36.2104C18.7603 35.2676 17.6377 33.9995 16.8619 32.5169C16.086 31.0342 15.6804 29.382 15.6804 27.7043C15.6804 26.0265 16.086 24.3743 16.8619 22.8916C17.6377 21.409 18.7603 20.1409 20.1316 19.1981C21.5029 18.2553 23.0813 17.6663 24.7291 17.4825C26.377 17.2988 28.0443 17.5258 29.5855 18.1439C29.6105 18.1527 29.6366 18.1577 29.663 18.1587C29.7014 18.1588 29.7391 18.1481 29.772 18.128C29.8048 18.1078 29.8315 18.0789 29.8492 18.0443C29.8729 17.9982 29.8789 17.9448 29.8661 17.8944C29.8534 17.844 29.8228 17.8002 29.7802 17.7711C27.8335 16.443 25.5382 15.7357 23.1905 15.7403H23.1968Z"
                      fill="#32D94B"
                    />
                    <path
                      d="M23.2897 31.5106H38.1787V24.2998H28.312C28.312 24.2998 26.1399 24.7233 24.5725 27.038C23.0051 29.3527 23.2897 31.5106 23.2897 31.5106Z"
                      fill="#32D94B"
                      stroke="#32D94B"
                      stroke-width="0.420027"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <img
                    width={105}
                    height={95}
                    alt="logo"
                    src="/images/Logo.png"
                  />
                </Link>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page.link}
                      onClick={handleCloseNavMenu}
                      sx={{ pr: 10 }}
                    >
                      <Typography textAlign="center">{page.page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link href={page.link} className="navbar-link">
                    <Button
                      key={page.link}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        paddingX: 2,
                        fontSize: "20px",
                        mt: 3,
                      }}
                      style={{
                        fontFamily: "DM Sans",
                        fontSize: "24px",
                        fontWeight: "400",
                        textTransform: "capitalize",
                        margin: "0px !important",
                      }}
                    >
                      {page.page}
                    </Button>
                  </Link>
                ))}
              </Box>
              <Box
                sx={{ display: "flex", margin: "auto", paddingX: 2, pr: 10 }}
              >
                {/* <ToggleButtonNotEmpty /> */}
                <Button variant="contained" className="navbar-green-btn">
                  Get Started
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;

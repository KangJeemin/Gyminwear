import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import useSession from "@/lib/useSession";
import { useRouter } from "next/router";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import ListItemText from "@mui/material/ListItemText";
const pages = ["Home", "Board"];
// const settingsLoggedIn = ["Profile", "Account", "Dashboard", "Logout"];
const settingsLoggedOut = ["Login"];

function ResponsiveAppBar() {
  const { session, isLoading, login, logout1 } = useSession();
  const [settingsLoggedIn, setLoginSetting] = React.useState<string[]>();
  const router = useRouter();
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
  React.useEffect(() => {
    // session이 존재하는 경우에만 배열로 변환하여 설정
    if (session) {
      setLoginSetting(["Hi! " + session.nickname, "Logout"]);
    }
  }, [session]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/* PC화면의 대문글씨 */}
            Gyminwear
          </Typography>

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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => {
                      router.push(
                        page === "Home"
                          ? `${process.env.NEXT_PUBLIC_IP}/`
                          : `${
                              process.env.NEXT_PUBLIC_IP
                            }/${page.toLowerCase()}?page=1`
                      );
                    }}
                  >
                    <ListItemText primary={page} />
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/* mobile 버전 버전의 대문글씨 */}
            Gyminwear
          </Typography>
          {/* Pc PageNavigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  router.push(
                    page === "Home"
                      ? `${process.env.NEXT_PUBLIC_IP}/`
                      : `${
                          process.env.NEXT_PUBLIC_IP
                        }/${page.toLowerCase()}?page=1`
                  );
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {session.isLoggedIn === true
                ? settingsLoggedIn?.map((settingsLoggedIn, index) => (
                    <MenuItem
                      key={settingsLoggedIn}
                      onClick={() => {
                        handleCloseUserMenu();
                        if (index === 0) {
                          // 처리할 이벤트 1
                          // 예: alert("Hi! " + session.nickname);
                        } else if (index === 1) {
                          // 처리할 이벤트 2
                          logout1();
                        }
                      }}
                    >
                      <Typography textAlign="center">
                        {settingsLoggedIn}
                      </Typography>
                    </MenuItem>
                  ))
                : settingsLoggedOut.map((settingsLoggedOut) => (
                    <MenuItem
                      key={settingsLoggedOut}
                      onClick={() => {
                        handleCloseUserMenu();
                        router.push(`/login`);
                      }}
                    >
                      <Typography textAlign="center">
                        {settingsLoggedOut}
                      </Typography>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

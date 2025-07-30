import * as React from 'react';
import { TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const pages = ['+ Create', 'Login'];
const settings = ['Profile', 'Your Decks', 'Logout'];

interface Props{
  isLoggedIn: boolean;
}

function NavBar({isLoggedIn}: Props) {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigate= useNavigate();

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

  const Login= () => {
    navigate("/login");
  }

  return (
    <AppBar position="fixed" className="nav-bar" elevation={0} sx={{borderBottom: '1px solid black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none'} }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center'}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img src= "/s.png"/>
            { isLoggedIn &&
              <h3>QuickStudy</h3>
            }
          <TextField id="outlined-search" placeholder='Search for decks' type="search" InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{width: '50%', marginLeft: '10%'}} />
          <Box sx={{flexGrow: 20}}/>
          { isLoggedIn ? (
            <>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '1em'} }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', border: '1px solid black', marginRight: '10%'}}
              >
                + Create
              </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, paddingLeft: '1em'}}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '1.1%' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        </>
          ) : (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '1em'} }}>
              <Button
                onClick={Login}
                sx={{ my: 2, color: 'black', display: 'block', border: '1px solid black'}}
              >
                Login
              </Button>    
          </Box>
          )
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
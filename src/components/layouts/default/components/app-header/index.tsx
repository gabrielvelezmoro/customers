import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Box } from '@mui/material'
import { Avatar, Divider, Select } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MailIcon from '@mui/icons-material/Mail'
import AccountCircle from '@mui/icons-material/AccountCircle'
import EmailIcon from '@mui/icons-material/Email';
import MoreIcon from '@mui/icons-material/MoreVert'
import { useAuth } from 'hooks/auth'
import logo from 'assets/logo.svg'
import { useApplication } from 'hooks/use-application'
import { SearchInput } from 'components/layouts/default/components'
import { styled } from '@mui/material/styles'
import avatar from 'assets/andre.jpg';

import { useStyles } from "./styles"

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const AppHeader: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const menuId = 'account-menu'
  const mobileMenuId = 'account-menu-mobile'
  const classes = useStyles()
  const { signOut, user } = useAuth();
  const { menuOpen, setMenuOpen } = useApplication();

  const handleDrawerOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{ marginTop: '3px' }}
    >
      <MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <Divider />
      <MenuItem onClick={signOut}>Sair</MenuItem>
    </Menu>
  )

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <EmailIcon className={classes.appIcon} />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>    
        <Box className={classes.logoArea}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={classes.hamburguerMenuContainer}
        >
          {menuOpen === true ? <MenuIcon className={classes.hamburguerMenu}/> : <MenuOpenIcon className={classes.hamburguerMenu}/>}
        </IconButton>
          <img src={logo} alt="Lupa Fiscal" className={classes.logo} />
        </Box>

        <Select style={{
          marginLeft: '20px', 
          width: '350px'
        }}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        <div className={classes.grow} />

        <div className={classes.sectionDesktop}>
          <SearchInput />
          
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar 
              sx={{ 
                bgcolor: 'white', 
                height: 30, 
                width: 30, 
                marginLeft: '10px',
                cursor: 'pointer' 
              }}>
              <EmailIcon className={classes.appIcon} />
            </Avatar>
          </StyledBadge>

          <Avatar 
            alt="André Dourado" 
            src={avatar} 
            sx={{ 
              bgcolor: 'white', 
              height: 31, 
              width: 31, 
              marginLeft: '10px', 
              color: 'theme.palette.primary.main',
              border: '2px solid #fff',
              cursor: 'pointer'
            }}
            onClick={handleProfileMenuOpen}
          />
        </div>

        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
          >
            <MoreIcon className={classes.appIcon} />
          </IconButton>
        </div>
      </Toolbar>

      {renderMenu}
      {renderMobileMenu}

    </AppBar>
  )
}

export default AppHeader

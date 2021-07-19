import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Button,Grid } from '@material-ui/core';
// import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import {grayColor, whiteColor, hexToRgb, blackColor} from '../../assets/material-dashboard-react';
import { useHistory } from 'react-router-dom';

import {logoutUser,findUser} from '../../store/user'

const useStyles = makeStyles((theme) => ({
  appBar:{
    color: whiteColor,
    backgroundColor: grayColor[2],
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(1),
  },
  title: {
    display: 'block',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    margin: theme.spacing(1),
    fontSize: "12px",
    fontWeight: "400",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: whiteColor,
      backgroundColor: grayColor[0],
      boxShadow:
        "0 14px 26px -12px rgba(" +
        hexToRgb(grayColor[0]) +
        ", 0.42), 0 4px 23px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(grayColor[0]) +
        ", 0.2)",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const dispatch = useDispatch()
  const {isLogin,user} = useSelector(state=> state.user)

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [ setMobileMoreAnchorEl] = React.useState(null);
  const [searchKey, setSearchKey] = React.useState("");
  const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const history = useHistory();

  const handleSearchKeyChange = (e)=>{
      setSearchKey(e.target.value);
      console.log(searchKey);
  }
  const routeChange=(path)=> {
    history.push(path);
  }
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  const handleMenuClose = () => {
    setAnchorEl(null);
    //handleMobileMenuClose();
  };
  const keyPress=(e)=>{
    if(e.keyCode == 13){
      dispatch(findUser(e.target.value))
      routeChange("/detail?name="+e.target.value)
   }
  }

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  const handleLogout = ()=>{
    dispatch(logoutUser())
}

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isLogin ? 
      <MenuItem onClick={handleLogout}>Logout</MenuItem> 
      :
      <MenuItem onClick={handleMenuClose}>Login</MenuItem>
      }
      
      
    </Menu>
  );

  // const mobileMenuId = 'primary-search-account-menu-mobile';
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar} >
        <Toolbar>
          <Grid container xs={8} >
            <Grid item container xs={2} justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <Typography className={classes.title} variant="h6" noWrap>
                  Material-UI
                </Typography>
              </Grid>
            </Grid>
            {user==null || !isLogin ? <></> :
            <Grid item xs={10} >
              <Button 
                className={classes.button}
                color="inherit"
                onClick={(e)=>{routeChange("/")}}
              > 
                Detail 
                </Button>
              {user!=="admin" ? <></> :
              <>
                {/* <Button 
                  className={classes.button}
                  color="inherit"
                  onClick={(e)=>{routeChange("/findUser")}}
                  > 
                  Users
                </Button> */}
                <Button 
                  className={classes.button}
                  color="inherit"
                  onClick={(e)=>{routeChange("/usermanager?page=1&limit=5")}}
                  > 
                  User managers 
                </Button>
              </>
              }
            </Grid>
            }
            </Grid>
          
          <Grid item xs={3}>
            <div className={classes.search} >
              { (user==="admin" && isLogin) 
              ? 
              <>
                <div className={classes.searchIcon}>
                  <SearchIcon/>
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={handleSearchKeyChange}
                  onKeyDown={keyPress}
                />
              </>
              :<></>}
              
            </div>
          </Grid>
          <Grid container xs={1} justifyContent="flex-end" alignItems="center">
            <Grid item xs={6}>

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Grid>
          </Grid>
          
          
         
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {renderMenu}
    </div>
  );
}
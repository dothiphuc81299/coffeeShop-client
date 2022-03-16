import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import { Avatar, Badge, makeStyles } from "@material-ui/core";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import logo from "../../../assets/images/commons/logo.png";
import avatarUser from '../../../assets/images/commons/icon_user.png';
import Cart from "./Cart";
import { logout } from "../../../redux/action/auth";
import { getQuery } from '../../../helpers/search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles((theme) => ({ 
  cartIcon: {
    cursor: 'pointer',
    verticalAlign: 'baseline'
  },
  input: {
    marginRight: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    flex: 1,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: "7px",
    height: 50,
    display: "flex",
  },
}));

export default function Header() {
  const classes = useStyles();
  let { pathname } = useLocation();
  const { search } = useLocation();

  const dispatch = useDispatch();
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token") ? true : false);
  const [isActive, setIsActive] = useState(pathname);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [searchForm, setSearchForm] = useState('');
  const listInCart = useSelector((state) => state.cart.listInCart);
  // const token = useSelector((state) => state.auth.token);
  const token =localStorage.getItem("token");
  const infor = useSelector((state) => state.auth.infor);
  const isUser = (pathname.indexOf("admin") === -1 ? true : false);

  const toggleDrawer = (open) => (event) => {
    if ( event.type === "keydown" && (event.key === "Tab" || event.key === "Shift") )
      return;
    setIsCartOpened(open);
  };

  useEffect(() => {
    setIsActive(pathname);
    if (search) {
      const params = getQuery(search);
      setSearchForm(params.keyword)
    }
  }, [search, pathname]);

  useEffect(() => {
    if (infor) {
      setAvatar(infor.avatar);
    }
  }, [infor]);

  useEffect(() => {
    setIsAuthenticated(token);
  }, [token]);

  // console.log("tooej",token)
  const toggle = () => {
    setIsActive(pathname);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    dispatch(logout());
  }

  const handleChangeSearch = (e) => {
    setSearchForm(e.target.value)
  }
  
  const handleClickSearch = () => {
    history.push(`/menu?keyword=${searchForm}`)
  }

  return (
    <div className="header bg-white">
      { isUser &&
      <div className="container h-100">
        <div className="h-100 pl-20 pr-20 flex-middle">
          <div className="h-100 mr-30">
            <div className="image-full-height">
              <Link to="/">
                <img className="h-100" alt="Vue logo" src={logo} />
              </Link>
            </div>
          </div>
          <div className="nav-bar">
            <div className="menu-small flex-column">
              <div className="icon-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="menu flex-middle">
              <ul className="mb-0 flex-center">
                <li><Link to="/" onClick={toggle} className={isActive === "/" ? "active" : null}>Home</Link></li>
                <li><Link to="/menu" onClick={toggle} className={isActive === "/menu" ? "active" : null}>Menu</Link></li>
                {/* <li><Link to="/about-us" onClick={toggle} className={isActive === "/about-us" ? "active" : null}>About us</Link></li> */}
                { token && <li><Link to="/user/detail" onClick={toggle} className={isActive === "/user/detail" ? "active" : null}>Account</Link></li> }
              </ul>
            </div>
            <div className="actions flex-middle">
              <ul className="mb-0 flex-middle">
                <React.Fragment>
                  <div className={classes.input}>
                    <InputBase placeholder="Finding drink..." value={searchForm} onChange={handleChangeSearch}/>
                    <IconButton
                      type="submit"
                      className={classes.iconButton}
                      aria-label="search"
                      onClick={handleClickSearch}
                    >
                      <SearchIcon />
                    </IconButton>
                  </div>
                </React.Fragment>
                <li className="mr-20">
                  <Badge badgeContent={listInCart.length} color="primary" showZero className={classes.cartIcon}>
                    <ShoppingCartIcon onClick={toggleDrawer(true)} />
                  </Badge>
                </li>
              </ul>
              {
                isAuthenticated &&
                  <Link to="/user/detail">
                    <Avatar alt="Remy Sharp" src={avatar || avatarUser} className="mr-10"/>
                  </Link>
              }
              {
                isAuthenticated ? <button onClick={handleLogout}className="btn-radius p-10 bg-blue-btn text-white text-uppercase text-bold">Logout</button> : 
                <Link to="/login">
                  <button className="btn-radius p-10 bg-blue-btn text-white text-uppercase text-bold">Login</button>
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
      }
      <Cart isCartOpened={isCartOpened} toggleDrawer={toggleDrawer}></Cart>
    </div>
  );
}

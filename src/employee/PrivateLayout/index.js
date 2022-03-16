import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { Layout, Avatar, Dropdown, Menu } from 'antd';
import './styles.css';
import {
  HeaderWrapper,
  LayoutWrapper,
  ContentWrapper,
  MenuWrapper,
} from './styles';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logoutStaff } from '../../admin/login/actions/authAdminAction';
import { getInforByToken } from '../../redux/action/inforStaff';
import Loading from '../containers/ui/Loading';

const PrivateLayout = ({ children }) => {
  const { Header, Footer, Content } = Layout;
  const dispatch = useDispatch();
  const history = useHistory();
  let { pathname } = useLocation();
  const [isActive, setIsActive] = useState(pathname);
const token =localStorage.getItem("tokenAdmin");
  const info = useSelector((state) => state.inforStaff.infor);

  let { employeeId } = useParams();


  useEffect(() => {
    if (!info) {
      dispatch(getInforByToken(token));
    }
  }, [token]);

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  const handleClickLogOut = () => {
    dispatch(logoutStaff());
    history.push('/admin/login');
  };

  const menu = (
    <MenuWrapper>
      <Menu.Item>
        <UserOutlined />
        {/* <Link to={`/employee/${employeeId}/account/detail`}>Account</Link> */}
        <Link to={`/admin/account/detail`}>Account</Link>
      </Menu.Item>
      <Menu.Item>
        <UserOutlined />
        {/* <Link to={`/employee/${employeeId}/account/detail`}>Account</Link> */}
        <Link to={`/admin/account/changePassword`}>Password</Link>
      </Menu.Item>
      <Menu.Item onClick={handleClickLogOut}>
        <LogoutOutlined />
        Logout
      </Menu.Item>
    </MenuWrapper>
  );

  return (
    <LayoutWrapper className="layout-wrapper">
      <HeaderWrapper>
        <div className="left-section">
          <Avatar src="https://firebasestorage.googleapis.com/v0/b/thecoffee-1a154.appspot.com/o/logo.png?alt=media&token=d615b968-242d-4358-9d55-362f0cc32029" />
          <p>theCoffee</p>
        </div>
        <div className="right-section">
          <Menu mode="horizontal" selectedKeys={[pathname.split('/')[3]]}>
          </Menu>
          <div className="name-section">
            <h3>Hello !!!</h3>
            <p>{info?.username}</p>
          </div>
          <Dropdown overlay={menu}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Dropdown>
        </div>
      </HeaderWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  );
};

export default PrivateLayout;

import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

export const HeaderWrapper = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  padding-top: 20px;
  padding-bottom: 20px;

  & > * {
    display: flex;
    align-items: center;
  }

  .left-section {
    p {
      margin: 0;
      padding-left: 10px;
      font-weight: 600;
      font-size: 20px;
      color: #5ea3b6;
    }
  }

  .right-section {
    .name-section {
      line-height: 20px;
      margin-left: 10px;
      h3 {
        padding: 0;
        margin: 0 10px;
        text-align: right;
        font-weight: 600;
        font-size: 14px;
      }

      p {
        padding: 0;
        margin: 0 10px;
        text-align: right;
        font-size: 12px;
      }
    }

    .ant-menu {
      border: none;
      height: 50px;
      display: flex;
      align-items: center;
      .ant-menu-item-selected {
        padding-bottom: 3px;
      }
    }

    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected {
      border: none;
      a {
        font-size: 16px;
        font-weight: 600;
      }
    }

    .ant-avatar {
      height: 40px;
      width: 40px;
      margin-left: 10px;
      .img {
        width: 40px;
        height: 40px;
      }
    }
  }

  .ant-menu-item {
    a {
      color: #5ea3b6;
    }
    :hover {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const LayoutWrapper = styled(Layout)`
  .ant-layout-header {
    background: #fff;
  }
`;

export const ContentWrapper = styled(Content)`
  height: calc(100vh - 120px);
`;

export const MenuWrapper = styled(Menu)`
  border-radius: 8px;
  width: 120px;
  .ant-dropdown-menu-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;

  }

  .ant-dropdown-menu-item:hover, .ant-dropdown-menu-submenu-title:hover {
    color: #3a4d53;
    background: #e1eff5;
}
`;

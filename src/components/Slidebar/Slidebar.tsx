import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Divider } from 'antd';
import logo from '../../assets/img_PVI_logo.png';
import { Link } from 'react-router-dom';
import './Slidebar.css';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Slidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={
        <span className={`text-white ${collapsed ? 'trigger-large' : ''}`}>
          {!collapsed && <i className="fa fa-user mr-2"></i>} 
          {!collapsed && `Hello, Dantd`} 
          <i className="fa fa-sign-out ml-2"></i>
        </span>
      }
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <div className="w-full max-w-[120px]">
            <img src={logo} alt="Logo" className="w-full" />
          </div>
        )}
        <Button
          type="text"
          icon={collapsed ?  <MenuUnfoldOutlined className="icon-large" /> : <MenuFoldOutlined  />}
          onClick={() => setCollapsed(!collapsed)}
          className={`p-0 text-white ${collapsed ? 'button-large' : ''}`}
        />
      </div>

      {!collapsed && <h3 className="text-center text-white">Giám định trực tuyến</h3>}
      <Divider className="bg-white" />

      {/* Menu */}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
        className={`custom-menu ${collapsed ? 'menu-collapsed' : ''}`}
      >
        <SubMenu key="sub1" icon={<i className={`fa fa-car ${collapsed ? 'icon-large' : ''}`} aria-hidden="true"></i>} title="Hồ sơ ô tô">
          <Menu.Item key="1">HS Giám định ô tô</Menu.Item>
          <Menu.Item key="2">HS ô tô từ myPVI</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<i className={`fa fa-motorcycle ${collapsed ? 'icon-large' : ''}`} aria-hidden="true"></i>} title="Hồ sơ xe máy">
          <Menu.Item key="3">HS Giám định xe máy</Menu.Item>
          <Menu.Item key="4">HS xe máy từ myPVI</Menu.Item>
        </SubMenu>
        <Menu.Item key="5" icon={<i className={`fa fa-ambulance ${collapsed ? 'icon-large' : ''}`} aria-hidden="true"></i>}>
          Bảo hiểm cứu hộ
        </Menu.Item>
        <Menu.Item key="6" icon={<i className={`fa fa-pencil ${collapsed ? 'icon-large' : ''}`} aria-hidden="true"></i>}>
          Hồ sơ Trình ký
        </Menu.Item>
        <Menu.Item key="7" icon={<i className={`fa fa-money ${collapsed ? 'icon-large' : ''}`} aria-hidden="true"></i>}>
          Đề nghị thanh toán
        </Menu.Item>
        <Menu.Item key="8" icon={<i className={`fa fa-bar-chart ${collapsed ? 'icon-large' : ''}`} aria-hidden="true"></i>}>
          Báo cáo
        </Menu.Item>
        <Menu.Item key="9" icon={<i className={`fa fa-calendar ${collapsed ? 'icon-large' : ''}`} aria-hidden="true"></i>}>
          Quản lý lịch trực
        </Menu.Item>
        <SubMenu key="sub3" icon={<i className={`fa fa-list ${collapsed ? 'icon-large' : ''}`} aria-hidden="true"></i>} title="Quản lý danh mục">
          <Menu.Item key="10">Danh mục User</Menu.Item>
          <Menu.Item key="11"> <Link to="/danh-muc-gara">Danh mục Ga ra</Link></Menu.Item>
          <Menu.Item key="12">Danh mục Device</Menu.Item>
          <Menu.Item key="13">Hạng mục Sửa chữa</Menu.Item>
          <Menu.Item key="14">Hiệu xe - Loại xe</Menu.Item>
          <Menu.Item key="15">Thiết lập uỷ quyền</Menu.Item>
          <Menu.Item key="16">Danh mục Khu vực</Menu.Item>
          <Menu.Item key="17">Danh mục Ga ra khu vực</Menu.Item>
          <Menu.Item key="18">Danh mục Điểm trực</Menu.Item>
          <Menu.Item key="19">Danh mục Quyền ký số</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Slidebar;

import React from 'react';
import { Layout } from 'antd';
import Slidebar from '../components/Slidebar/Slidebar';
import './AdminLayout.css'; 
import { Outlet } from 'react-router-dom'; 

const { Content } = Layout;

const AdminLayout: React.FC = () => {
  return (
    <Layout className="admin-layout">
      <Slidebar />
      <Layout>
        <Content className="admin-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;

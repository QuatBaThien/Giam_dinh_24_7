import React, { useState, useEffect } from 'react';
import { Table, Button, Spin } from 'antd';
import type { TableColumnsType } from 'antd';
import { EditOutlined } from '@ant-design/icons';
interface DataType {
  key: React.Key;
  maGara: string;
  tenGara: string;
  tenTat: string;
  diaChi: string;
  diaChiXuong: string;
  tinh: string;
  quanHuyen: string;
  tyLeGGPT: string;
  tyLeGGSC: string;
  email: string;
  dienThoai: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Mã Gara',
    dataIndex: 'maGara',
    key: 'maGara',
    fixed: 'left',
    width: 100, 
    responsive: ['xs', 'sm', 'md', 'lg', 'xl'],
  },
  {
    title: 'Tên Gara',
    dataIndex: 'tenGara',
    key: 'tenGara',
    fixed: 'left',
    width: 200,
    responsive: ['sm', 'md', 'lg', 'xl'],
  },
  {
    title: 'Tên tắt',
    dataIndex: 'tenTat',
    key: 'tenTat',
    width: 150,
    responsive: ['md', 'lg', 'xl'],
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'diaChi',
    key: 'diaChi',
    width: 200,
    responsive: ['md', 'lg', 'xl'],
  },
  {
    title: 'Địa chỉ xưởng',
    dataIndex: 'diaChiXuong',
    key: 'diaChiXuong',
    width: 200,
    responsive: ['lg', 'xl'],
  },
  {
    title: 'Tỉnh',
    dataIndex: 'tinh',
    key: 'tinh',
    width: 150,
    responsive: ['md', 'lg', 'xl'],
  },
  {
    title: 'Quận huyện',
    dataIndex: 'quanHuyen',
    key: 'quanHuyen',
    width: 150,
    responsive: ['lg', 'xl'],
  },
  {
    title: 'Tỷ lệ GGPT',
    dataIndex: 'tyLeGGPT',
    key: 'tyLeGGPT',
    width: 100,
    responsive: ['md', 'lg', 'xl'],
  },
  {
    title: 'Tỷ lệ GGSC',
    dataIndex: 'tyLeGGSC',
    key: 'tyLeGGSC',
    width: 100,
    responsive: ['md', 'lg', 'xl'],
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: 150,
    responsive: ['md', 'lg', 'xl'],
  },
  {
    title: 'Điện thoại',
    dataIndex: 'dienThoai',
    key: 'dienThoai',
    fixed: 'right',
    width: 120,
    responsive: ['xs', 'sm', 'md', 'lg', 'xl'],
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <Button icon={<EditOutlined />} type="link" />,
    responsive: ['xs', 'sm', 'md', 'lg', 'xl'],
  },
];

const data: DataType[] = [
  {
    key: '1',
    maGara: '00.653',
    tenGara: 'Công ty Cổ phần xây dựng và vật tư thiết bị',
    tenTat: 'FICO Thanh Xuân',
    diaChi: 'Số 112 Thể Giao, P Lê Đại Hành, quận Hai Bà Trưng, TP Hà Nội',
    diaChiXuong: 'Số 112 Thể Giao, P Lê Đại Hành, TP Hà Nội',
    tinh: 'Thành phố Hà Nội',
    quanHuyen: 'Quận Hai Bà Trưng',
    tyLeGGPT: '10.00',
    tyLeGGSC: '10.00',
    email: 'abc@abc.com',
    dienThoai: '0386832065',
  },
  {
    key: '1',
    maGara: '00.653',
    tenGara: 'Công ty Cổ phần xây dựng và vật tư thiết bị',
    tenTat: 'FICO Thanh Xuân',
    diaChi: 'Số 112 Thể Giao, P Lê Đại Hành, quận Hai Bà Trưng, TP Hà Nội',
    diaChiXuong: 'Số 112 Thể Giao, P Lê Đại Hành, TP Hà Nội',
    tinh: 'Thành phố Hà Nội',
    quanHuyen: 'Quận Hai Bà Trưng',
    tyLeGGPT: '10.00',
    tyLeGGSC: '10.00',
    email: 'abc@abc.com',
    dienThoai: '0386832065',
  },
  {
    key: '1',
    maGara: '00.653',
    tenGara: 'Công ty Cổ phần xây dựng và vật tư thiết bị',
    tenTat: 'FICO Thanh Xuân',
    diaChi: 'Số 112 Thể Giao, P Lê Đại Hành, quận Hai Bà Trưng, TP Hà Nội',
    diaChiXuong: 'Số 112 Thể Giao, P Lê Đại Hành, TP Hà Nội',
    tinh: 'Thành phố Hà Nội',
    quanHuyen: 'Quận Hai Bà Trưng',
    tyLeGGPT: '10.00',
    tyLeGGSC: '10.00',
    email: 'abc@abc.com',
    dienThoai: '0386832065',
  },
  {
    key: '1',
    maGara: '00.653',
    tenGara: 'Công ty Cổ phần xây dựng và vật tư thiết bị',
    tenTat: 'FICO Thanh Xuân',
    diaChi: 'Số 112 Thể Giao, P Lê Đại Hành, quận Hai Bà Trưng, TP Hà Nội',
    diaChiXuong: 'Số 112 Thể Giao, P Lê Đại Hành, TP Hà Nội',
    tinh: 'Thành phố Hà Nội',
    quanHuyen: 'Quận Hai Bà Trưng',
    tyLeGGPT: '10.00',
    tyLeGGSC: '10.00',
    email: 'abc@abc.com',
    dienThoai: '0386832065',
  },
  {
    key: '1',
    maGara: '00.653',
    tenGara: 'Công ty Cổ phần xây dựng và vật tư thiết bị',
    tenTat: 'FICO Thanh Xuân',
    diaChi: 'Số 112 Thể Giao, P Lê Đại Hành, quận Hai Bà Trưng, TP Hà Nội',
    diaChiXuong: 'Số 112 Thể Giao, P Lê Đại Hành, TP Hà Nội',
    tinh: 'Thành phố Hà Nội',
    quanHuyen: 'Quận Hai Bà Trưng',
    tyLeGGPT: '10.00',
    tyLeGGSC: '10.00',
    email: 'abc@abc.com',
    dienThoai: '0386832065',
  },
  {
    key: '1',
    maGara: '00.653',
    tenGara: 'Công ty Cổ phần xây dựng và vật tư thiết bị',
    tenTat: 'FICO Thanh Xuân',
    diaChi: 'Số 112 Thể Giao, P Lê Đại Hành, quận Hai Bà Trưng, TP Hà Nội',
    diaChiXuong: 'Số 112 Thể Giao, P Lê Đại Hành, TP Hà Nội',
    tinh: 'Thành phố Hà Nội',
    quanHuyen: 'Quận Hai Bà Trưng',
    tyLeGGPT: '10.00',
    tyLeGGSC: '10.00',
    email: 'abc@abc.com',
    dienThoai: '0386832065',
  },

 
];

const DanhMucGara: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div style={{ padding: '24px' }}>
      <h1>Danh mục Gara</h1>

      <Spin spinning={loading}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
          scroll={{ x: 1500 }}
          bordered
        />
      </Spin>
    </div>
  );
};

export default DanhMucGara;

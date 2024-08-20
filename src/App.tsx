import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import DanhMucGara from './components/Danh_Muc_Ga_Ra/DanhMucGaRa';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="danh-muc-gara" element={<DanhMucGara />} />
        
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

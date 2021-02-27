import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const CustomerListView = lazy(() => import('src/views/customer/CustomerListView'));
const CustomerDetailsView = lazy(() => import('src/views/customer/CustomerDetailsView'));
const CustomerEditView = lazy(() => import('src/views/customer/CustomerEditView'));

export default () => {
  return (
    <Routes>
      <Route path="/" element={<CustomerListView />} />
      <Route path="/:customerId" element={<CustomerDetailsView />} />
      <Route path="/:customerId/edit" element={<CustomerEditView />} />
    </Routes>
  );
}

import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const InvoiceListView = lazy(() => import('src/views/invoice/InvoiceListView'));
const InvoiceDetailsView = lazy(() => import('src/views/invoice/InvoiceDetailsView'));

export default () => {
  return (
    <Routes>
      <Route path="/" element={<InvoiceListView />} />
      <Route path=":invoiceId" element={<InvoiceDetailsView />} />
    </Routes>
  );
}

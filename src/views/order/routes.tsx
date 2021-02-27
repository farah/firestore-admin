import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const OrderListView = lazy(() => import('src/views/order/OrderListView'));
const OrderDetailsView = lazy(() => import('src/views/order/OrderDetailsView'));

export default () => {
  return (
    <Routes>
      <Route path="/" element={<OrderListView />} />
      <Route path=":orderId" element={<OrderDetailsView />} />
    </Routes>
  );
}

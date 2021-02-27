import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const ProductListView = lazy(() => import('src/views/product/ProductListView'));
const ProductCreateView = lazy(() => import('src/views/product/ProductCreateView'));

export default () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListView />} />
      <Route path="create" element={<ProductCreateView />} />
    </Routes>
  );
}

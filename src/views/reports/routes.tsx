import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const DashboardView = lazy(() => import('src/views/reports/DashboardView'));
const DashboardAlternativeView = lazy(() => import('src/views/reports/DashboardAlternativeView'));

export default () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardView />} />
      <Route path="dashboard" element={<DashboardView />} />
      <Route path="dashboard-alternative" element={<DashboardAlternativeView />} />
    </Routes>
  );
}

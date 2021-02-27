import React, { Suspense, lazy } from 'react';
import { Routes, Route, useRoutes } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import DocsLayout from 'src/layouts/DocsLayout';
import MainLayout from 'src/layouts/MainLayout';
import HomeView from 'src/views/home/HomeView';
import LoadingScreen from 'src/components/LoadingScreen';
import AuthGuard from 'src/components/AuthGuard';
import GuestGuard from 'src/components/GuestGuard';

type Routes = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  layout?: any;
  component?: any;
  routes?: Routes;
}[];

const NotFoundView = lazy(() => import('src/views/errors/NotFoundView'));
const LoginView = lazy(() => import('src/views/auth/LoginView'));
const PricingView = lazy(() => import('src/views/pricing/PricingView'));

const AccountView = lazy(() => import('src/views/account/AccountView'));
const CalendarView = lazy(() => import('src/views/calendar/CalendarView'));



export default function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="pricing" element={<PricingView />} />
        </Route>
        <Route path="app/*" element={<DashboardLayout />} />
        <Route path="login" element={<LoginView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Suspense>
  );
}

export const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Suspense fallback={<LoadingScreen />}></Suspense>
);

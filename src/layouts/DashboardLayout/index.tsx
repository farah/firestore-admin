import React, { useState, lazy } from 'react';
import type { FC, ReactNode } from 'react';
import type { Theme } from 'src/theme';
import { Routes, Route, useRoutes } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import NavBar from './NavBar';
import TopBar from './TopBar';

const AccountView = lazy(() => import('src/views/account/AccountView'));
const CalendarView = lazy(() => import('src/views/calendar/CalendarView'));
const ChatView = lazy(() => import('src/views/chat/routes'));
const ExtraView = lazy(() => import('src/views/extra/routes'));
const KanbanView = lazy(() => import('src/views/kanban/KanbanView'));
const MailView = lazy(() => import('src/views/mail/routes'));


const CustomersView = lazy(() => import('src/views/customer/routes'));
const InvoicesView = lazy(() => import('src/views/invoice/routes'));
const OrdersView = lazy(() => import('src/views/order/routes'));
const ProdcutsView = lazy(() => import('src/views/product/routes'));
const ProjectView = lazy(() => import('src/views/project/routes'));
const ReportsView = lazy(() => import('src/views/reports/routes'));
const SocialView = lazy(() => import('src/views/social/routes'));

const NotFoundView = lazy(() => import('src/views/errors/NotFoundView'));

interface DashboardLayoutProps {
  children?: ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));



const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
          <Routes>
            <Route path="/" element={<ReportsView />} />
            <Route path="account" element={<AccountView />} />
            <Route path="calendar" element={<CalendarView />} />
            <Route path="kanban" element={<KanbanView />} />
            <Route path="mail/*" element={<MailView />} />
            <Route path="chat/*" element={<ChatView />} />
            <Route path="extra/*" element={<ExtraView />} />
            <Route path="management/customers/*" element={<CustomersView />} />
            <Route path="management/invoices/*" element={<InvoicesView />} />
            <Route path="management/orders/*" element={<OrdersView />} />
            <Route path="management/products/*" element={<ProdcutsView />} />
            <Route path="projects/*" element={<ProjectView />} />
            <Route path="reports/*" element={<ReportsView />} />
            <Route path="social/*" element={<SocialView />} />
            <Route path="*" element={<NotFoundView />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node
};

export default DashboardLayout;

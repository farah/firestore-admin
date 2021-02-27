import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const MailView = lazy(() => import('src/views/mail/MailView'));

export default () => {
  return (
    <Routes>
      <Route path="/" element={<MailView />} />
      <Route path="all" element={<MailView />} />
      <Route path="label/:customLabel/:mailId?" element={<MailView />} />
      <Route path=":systemLabel/:mailId?" element={<MailView />} />
    </Routes>
  );
};

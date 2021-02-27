import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const FeedView = lazy(() => import('src/views/social/FeedView'));
const ProfileView = lazy(() => import('src/views/social/ProfileView'));

export default () => {
  return (
    <Routes>
      <Route path="/" element={<FeedView />} />
      <Route path="feed" element={<FeedView />} />
      <Route path="profile" element={<ProfileView />} />
    </Routes>
  );
}

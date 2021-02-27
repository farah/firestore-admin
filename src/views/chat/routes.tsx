import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const ChatView = lazy(() => import('src/views/chat/ChatView'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatView />} />
      <Route path=":threadKey" element={<ChatView />} />
    </Routes>
  );
}

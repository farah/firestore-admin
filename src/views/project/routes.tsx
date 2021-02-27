import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const OverviewView = lazy(() => import('src/views/project/OverviewView'));
const ProjectBrowseView = lazy(() => import('src/views/project/ProjectBrowseView'));
const ProjectCreateView = lazy(() => import('src/views/project/ProjectCreateView'));
const ProjectDetailsView = lazy(() => import('src/views/project/ProjectDetailsView'));

export default () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectBrowseView />} />
      <Route path="overview" element={<OverviewView />} />
      <Route path="browse" element={<ProjectBrowseView />} />
      <Route path="create" element={<ProjectCreateView />} />
      <Route path="/:id" element={<ProjectDetailsView />} />
    </Routes>
  );
}

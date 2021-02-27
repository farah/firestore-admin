import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const ApexChartsView = lazy(() =>
  import('src/views/extra/charts/ApexChartsView')
);
const FormikView = lazy(() => import('src/views/extra/forms/FormikView'));
const ReduxFormView = lazy(() => import('src/views/extra/forms/ReduxFormView'));
const DraftEditorView = lazy(() =>
  import('src/views/extra/editors/DraftEditorView')
);
const QuillEditorView = lazy(() =>
  import('src/views/extra/editors/QuillEditorView')
);

export default function App() {
  return (
    <Routes>
      <Route path="charts/apex" element={<ApexChartsView />} />
      <Route path="forms/formik" element={<FormikView />} />
      <Route path="forms/redux" element={<ReduxFormView />} />
      <Route path="editors/draft-js" element={<DraftEditorView />} />
      <Route path="editors/quill" element={<QuillEditorView />} />
    </Routes>
  );
}

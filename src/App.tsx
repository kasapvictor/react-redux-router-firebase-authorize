import { Routes, Route, Navigate } from 'react-router-dom';

import '@app/theme/styles';

import { Login, Registration, Home } from '@app/pages';
import { MainTemplate } from '@app/templates';

export const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainTemplate />}>
        <Route path={'/'} element={<Home />} />
        <Route path={'login'} element={<Login />} />
        <Route path={'registration'} element={<Registration />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

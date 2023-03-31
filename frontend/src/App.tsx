import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { AdminLayout } from './layouts/Admin';
import { BaseLayout } from './layouts/Base';
import { Page404 } from './pages/404';
import { AdminIndex } from './pages/admin';
import { Index } from './pages/index';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route path="" element={<Index />} />
          </Route>
          <Route
            path="/admin"
            element={
              <RecoilRoot>
                <AdminLayout />
              </RecoilRoot>
            }
          >
            <Route path="" element={<AdminIndex />} />
          </Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

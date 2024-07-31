/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';
  import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import ThemeProvider from 'src/theme';
import { useAuth } from './Context/AuthContext';
import DashboardLayout from './layouts/dashboard';
import LoginPage from './pages/login';
import { IndexPage, Page404 } from './routes/sections';
import UserPage from './pages/user';
import ProductsPage from './pages/products';
import BlogPage from './pages/blog';
import { Suspense } from 'react';

// ----------------------------------------------------------------------

export default function App() {
  const {user  ,authenticating} = useAuth();

  if(authenticating) return <div>Loading...</div>

  useScrollToTop();
    return (
      <ThemeProvider>
          {user ? <Routes>
            <Route path="/" element={ <DashboardLayout>
                  <Suspense>
                    <Outlet />
                  </Suspense>
                </DashboardLayout>}
               >
              <Route 
                index 
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <IndexPage />
                  </Suspense>
                } 
              />
              <Route 
                path="user" 
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <UserPage />
                  </Suspense>
                } 
              />
              <Route 
                path="products" 
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <ProductsPage />
                  </Suspense>
                } 
              />
              <Route 
                path="blog" 
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <BlogPage />
                  </Suspense>
                } 
              />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          : <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="404" element={<Page404 />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>}
      </ThemeProvider>
    );
}

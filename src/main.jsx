import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './app';
import { AuthProvider } from './Context/AuthContext';
import { ProjectsProvider } from './Context/ProjectsContext';
import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <AuthProvider>
          <ProjectsProvider>
             <ToastContainer />
            <App /> 
          </ProjectsProvider>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);

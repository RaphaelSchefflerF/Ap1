import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PaginaInicial from './paginas/PaginaIncial';
import PaginaSec from './paginas/PaginaSec';

const roteador = createBrowserRouter ([
  { path: '/', element: <PaginaInicial /> },
  { path: '/2', element: <PaginaSec />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={roteador}/>
  </React.StrictMode>
);

reportWebVitals();

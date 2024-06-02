import './styles/index.css'
import { StrictMode } from 'react';
import { hydrateRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './ssr/App';

const Router = createBrowserRouter([{ path: "*", element: <App /> }]);

hydrateRoot(
    document.getElementById("root"),
    <StrictMode>
        <RouterProvider router={Router} />
    </StrictMode>
);
import '../styles/index.css'
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Routes from '../routes/Rroutes';

const Router = createBrowserRouter(Routes);
hydrateRoot(
    document.getElementById("root"), 
    <StrictMode>
        <RouterProvider router={Router} />
    </StrictMode>   
)

import './styles/index.css'
import { StrictMode } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './ssr/App';

const Router = createBrowserRouter([{ path: "*", element: <App /> }]);
export function Render() {
    return (
        <StrictMode>
            <RouterProvider router={Router} />
        </StrictMode>
    )
}
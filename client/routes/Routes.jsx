import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';




/** @type {import('react-router-dom').RouteObject[]} */
const routes = createBrowserRouter( [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "home",
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
        //     // {
        //     //     path: "lazy",
        //     //     lazy: () => import("./lazy"),
        //     // },
        //     // {
        //     //     path: "redirect",
        //     //     loader: redirectLoader,
        //     // },
            {
                path: "*",
                element: <NotFoundPage />,
            }
        ]
    }
]);

export default routes
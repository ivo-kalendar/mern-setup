import App from '../components/App';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Redirect from './Redirect';

const Routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <h1>Root</h1>},
            { path: "/home", element: <HomePage />},
            { path: "/login", element: <LoginPage />},
            { path: "/register", element: <RegisterPage />},
            { path: "/about", element: <AboutPage />},

            { path: "/api/*", element: <Redirect route="/" />},
            { path: "/api/user/all", element: <HomePage />},
            { path: "*", element: <NotFoundPage />},
            // { path: "lazy", lazy: () => import("./lazy"),
            // { path: "redirect", loader: redirectLoader }
        ]
    }
]

export default Routes
    
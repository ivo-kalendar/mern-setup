import TestPage from '../pages/TestPage'
import Router from '../routes/Router'
import Navbar from './Navbar'
import '../styles/App.css'
import SetupDefault from './SetupDefault'
import TestRouter from '../routes/TestRouter'
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
// import { routes } from '../routes/AppRoutes'

export default function App() {
    

    return (
        <>
            {/* <SetupDefault /> */}
            {/* <TestPage /> */}
            <Navbar />
            <Router />
            {/* <Outlet /> */}
            {/* <TestRouter /> */}
        </>
    )   
}           
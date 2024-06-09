import TestPage from '../pages/TestPage'
import Router from '../routes/Router'
import Navbar from './Navbar'
import '../styles/App.css'
import SetupDefault from './SetupDefault'
import TestRouter from '../routes/TestRouter'
import { Outlet } from 'react-router-dom'

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
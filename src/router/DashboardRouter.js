import { Dashboard } from "../components/dashboard/Dashboard"

import { Routes, Route } from 'react-router-dom';


export const DashboardRoutes = () => {


    return (
        <>

                <Routes>
                   
                <Route path="login/dashboard" element={<Dashboard />} />
                    

                </Routes>


        </>
    )
}

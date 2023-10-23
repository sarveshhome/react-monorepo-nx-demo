import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../app/components/LoginPage"
import { PrivateRoutes } from "../app/components/PrivateRoutes"


type Status = 'checking' | 'authenticated' | 'no-authenticated'

let status: Status = 'no-authenticated'

export const AppRouter = () => {

    if (status === 'checking') return <div className="loading">Checking credentials...</div>

    return (
        
            <Routes>
                {
                    status === 'authenticated'
                        ? <Route path="/*" element={<PrivateRoutes />} />
                        : <Route path="login" element={<LoginPage />} />
                }

                <Route path='*' element={<Navigate to='/login' replace />} />
            </Routes>
    )
}
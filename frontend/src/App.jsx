import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ReportLost from './pages/ReportLost'
import ReportFound from './pages/ReportFound'
import MyReports from './pages/MyReports'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<Login />} />
        <Route path="/login"       element={<Login />} />
        <Route path="/dashboard"   element={<Dashboard />} />
        <Route path="/report-lost" element={<ReportLost />} />
        <Route path="/report-found" element={<ReportFound />} />
        <Route path="/my-reports"  element={<MyReports />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
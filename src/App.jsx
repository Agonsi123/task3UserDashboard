import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import PersonalInfo from './pages/personal/PersonalInfo';
import Address from './pages/address/Address';
import AddAddress from './pages/addAddress/AddAddress';
import Success from './pages/success/Success';
import ProtectedRoute from './context/ProtectedRoute';
import DashboardLayout from './components/dashboardLayout/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/address" element={<Address />} />
        <Route path="/addaddress" element={<AddAddress />} />
        <Route path="/success" element={<Success />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App

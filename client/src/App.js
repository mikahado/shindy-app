import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Navbar from './Navbar'
import Signup from './Signup'
import Login from './Login'
import AddCustomer from './AddCustomer'
import UserCustomerTable from './UserCustomerTable'
import CustomerProfile from './CustomerProfile'
import { UserProvider } from "./context/user"

function App(props) {

  return (
    <div className="App">

      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/punchcards" element={<AddCustomer />} />
          <Route path="/customers" element={<UserCustomerTable />}/>
          <Route path="/customers/:id" element={<CustomerProfile />}/>
        </Routes>
      </UserProvider>
     
    </div>
  );
}

export default App;

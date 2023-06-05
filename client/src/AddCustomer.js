import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import CustomerForm from './CustomerForm'
import AllCustomersTable from './AllCustomersTable'


const AddCustomer = () => {

    const [toggleNew, setToggleNew] = useState(false)
    const [toggleFind, setToggleFind] = useState(false)

    const { loggedIn} = useContext(UserContext)

    const handleNewClick = () => {
      setToggleNew(true)
    }

    const handleFindClick = () => {
      setToggleFind(true)
    }
  
    if (loggedIn) {
      
      return (
        <>
    
        <main class="container">
        <br />
        <button className="button1" onClick={handleNewClick}>NEW CLIENT</button>

        {toggleNew ? <CustomerForm /> : null}

        <br />

        <button className="button1" onClick={handleFindClick}>FIND EXISTING CLIENT</button>

        <br /><br />

        {toggleFind ? <AllCustomersTable /> : null}
                     
        </main>
        </>
      )
    } else {
      return (
        <h3>Not Authorized -- Please signup or login</h3>
      )
    }
}

export default AddCustomer
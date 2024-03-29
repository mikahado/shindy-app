import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'
import PunchcardPreview from './PunchcardPreview'
import PunchcardForm from './PunchcardForm'
import CustomerNameEdit from './CustomerNameEdit'

const CustomerProfile = () => {

    const [addPunchcardFlag, setAddPunchcardFlag] = useState(false)
    const [editNameFlag, setEditNameFlag] = useState(false)
  
    const { deleteCustomer, allCustomers, loggedIn} = useContext(UserContext)
    const { id } = useParams()

    const customer = allCustomers?.find(c => c.id === parseInt(id)) || []

    const displayPunchcards = customer?.punchcards?.map(p => 
        <PunchcardPreview
            key={p.id} 
            id={p.id}
            punchcard={p}
        />)

if (loggedIn) {
  return (
    <>
      <main class="container">
        <article className="card">

            <header >
              <h1>{customer.name}</h1>
              <p>{customer.email}</p>
            </header>
           
           {displayPunchcards}
           
            <footer>

            {addPunchcardFlag ? 
                <PunchcardForm key={customer.id} id={customer.id} setAddPunchcardFlag={setAddPunchcardFlag} /> 
                :
                <button className="button1" onClick={() => setAddPunchcardFlag(true)}>ADD NEW PUNCHCARD</button>
            } 

            </footer>
        </article>
        <article className="card">
        Settings
        <br/><br/>

          {editNameFlag ? 
                <CustomerNameEdit key={customer.id} id={customer.id} setNameFlag={setEditNameFlag} /> 
                :
                <button className="button1" onClick={() => setEditNameFlag(true)}>Edit Name</button>
            } 
            
            <br />

          <br />
            <button  className="button1" onClick={() => deleteCustomer(customer.id)}>Delete</button>
        </article>
        
      </main>
    </>
  )
  } else {
  
    return (<div>Customer not found.</div>)
  
}
}

export default CustomerProfile
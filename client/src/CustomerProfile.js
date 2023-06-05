import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'
import PunchcardEdit from './PunchcardEdit'
import PunchcardPreview from './PunchcardPreview'
import PunchcardForm from './PunchcardForm'
import CustomerNameEdit from './CustomerNameEdit'

const CustomerProfile = () => {

    const [addPunchcardFlag, setAddPunchcardFlag] = useState(false)
    const [editFlag, setEditFlag ] = useState(false)
    const [editNameFlag, setEditNameFlag] = useState(false)
    // const [customer, setCustomer ] = useState([])
  
    const { deleteCustomer, allCustomers, loggedIn} = useContext(UserContext)

    const { id } = useParams()

    // useEffect(() => {
    //   fetch(`/customers/${id}`)
    //   .then(resp => resp.json())
    //   .then(data => setCustomer(data))
    // }, [id])

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
              <h1>{customer.username}</h1>
              <p>[client's email]</p>
            </header>
           
           {displayPunchcards}
           
            <footer>

            {addPunchcardFlag ? 
                <PunchcardForm key={customer.id} id={customer.id} setPunchcardFlag={setAddPunchcardFlag} /> 
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

          {/* {editFlag ? 
                <PunchcardEdit editFlag={setEditFlag} /> 
                :
                <button className="button1" onClick={() => setEditFlag(true)}>Edit Punchcard</button>
            } */}

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
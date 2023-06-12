import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const CustomerForm = ({setAddPunchcardFlag}) => {

  const [ name, setName ] = useState("")

  const { addCustomer, errors } = useContext(UserContext)


  const handleCustomerSubmit = (e) => {
    e.preventDefault()
    
    addCustomer({
        name: name
    })

    // setAddPunchcardFlag(false)
 }
 
  return (
    <>
        
         <form onSubmit={handleCustomerSubmit}>
            <article className="card">
              <label>Add a New Client</label>
                <input 
                    type="text" 
                    id="name"
                    value={name}
                    placeholder={"Enter name"}
                    onChange={e => setName(e.target.value)}
                />

                {errors}
                
                <br/>
                <button className="button1" type="submit">Submit</button>
            
            </article>    
          </form>
        
         
    </>
  )
}

export default CustomerForm
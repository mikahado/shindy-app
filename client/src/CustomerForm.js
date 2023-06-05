import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const CustomerForm = ({setPunchcardFlag}) => {

  const [ username, setUsername ] = useState("")

  const { addCustomer, errors } = useContext(UserContext)


  const handleCustomerSubmit = (e) => {
    e.preventDefault()
    
    addCustomer({
        username: username
    })
    setPunchcardFlag(false)
 }
 
  return (
    <>
        
         <form onSubmit={handleCustomerSubmit}>
            <article className="card">
              <label>Add a New Client</label>
                <input 
                    type="text" 
                    id="username"
                    value={username}
                    placeholder={"Enter name"}
                    onChange={e => setUsername(e.target.value)}
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
import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import '@picocss/pico/css/pico.min.css'

const UserContext = React.createContext()

const UserProvider = ( {children } ) => {

    const [user, setUser] = useState({
      customers: []
    }) 
    const [loggedIn, setLoggedIn] = useState(false) 
    const [ allCustomers, setAllCustomers ] = useState([])
    const [formFlag, setFormFlag] = useState(true)
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetch('/api/me')
        .then(resp => resp.json())
        .then(data => {
            setUser(data)
            if (data.errors) {
                setLoggedIn(false)
            } else {
              setLoggedIn(true)
            }
        }) 
        getAllCustomers()   
    }, [loggedIn])

   const getAllCustomers = () => {
      fetch('/api/customers')
      .then(resp => resp.json())
      .then(data => setAllCustomers(data))
   }

   const addPunchcard = (punchcard) => {
    fetch('/api/punchcards', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(punchcard)
    })
    .then(resp => resp.json())
    .then(data => {
        if (!data.errors) {
            handleAddedPunchcard(data)
            setFormFlag(false)
            setErrors([])
        } else {
          console.log("failss!")
            const errorLis = data.errors.map( e => <li>{e}</li>)
            setErrors(errorLis)
        }  
      }) 
    }

    const handleAddedPunchcard = (addedPunchcard) => {

      const updatedCustomers = allCustomers.map((c) => {
        if (c.id === addedPunchcard.customer.id) {
          return {
            ...c,
            punchcards: [...c.punchcards, addedPunchcard],
          };
        } else {
          return c;
        }
      });
      setAllCustomers(updatedCustomers);
    };
    
    const addCustomer = (customer) => {
        fetch('/api/customers', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(customer)
    })
    .then(resp => resp.json())
    .then(data => {
        if (!data.errors) {  
            setUser({ ...user, customers: [...user.customers, data] })
            setAllCustomers([...allCustomers, data])
            navigate(`/customers/${data.id}`)
            setErrors([])
            setFormFlag(false)
            console.log("success!")

        } else {
            const errorLis = data.errors.map(e => <li>{e}</li>)
            setErrors(errorLis)
            console.log("sugsgsgsess!")

        }
      })
    }

    const editCustomerName = (customer) => {
        fetch(`/api/customers/${customer.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customer)
        })
        .then(resp => resp.json())
        .then((data) => handleEditedCustomer(data))
        setErrors([])
    }

    const handleEditedCustomer = (editedCustomer) => {
      const updatedCustomers = allCustomers.map((p) =>
        p.id === editedCustomer.id ? editedCustomer : p
      )
      setAllCustomers(updatedCustomers)
    }

    const deleteCustomer = (id) => {
      fetch(`/api/customers/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          setUser({...user, 
            customers: user.customers
            .filter((c) => c.id !== parseInt(id)),
          })
          navigate("/customers")
        })
    }

    const editPunchCount = (punchcard) => {
      fetch(`/api/punchcards/${punchcard.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(punchcard)
      })
      .then(resp => resp.json())
      .then((data) => {
        handleEditedPunchcard(data);
        setErrors([]);

      })
      .catch(error => {
        // Handle any error that occurs during the request
        console.error(error);
        console.log("nooooo!")

      });
    };

    
    const handleEditedPunchcard = (editedPunchcard) => {
      console.log('punch!', editedPunchcard);
      const updatedCustomers = allCustomers.map((c) => {
        if (c.id === editedPunchcard.customer.id) {
          const updatedPunchcards = c.punchcards.map((p) =>
            p.id === editedPunchcard.id ? editedPunchcard : p
          );
          return { ...c, punchcards: updatedPunchcards };
        } else {
          return c
        }
      })
      setAllCustomers(updatedCustomers);
    }
    

    // const editPunchCount = (punchcard) => {
    //     fetch(`/api/punchcards/${punchcard.id}`, {
    //         method: 'PATCH',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(punchcard)
    //     })
    //     .then(resp => resp.json())
        
    //     .then((data) => 
    //     handleEditedPunchcard(data))
    //     setErrors([])
    //   }
      
    //   const handleEditedPunchcard = (editedPunchcard) => {

    //     const updatedCustomers = allCustomers.map((c) => {
    //       if (c.id === editedPunchcard.customer_id) {
    //         return {...c, punchcards: c.punchcards.map((p) =>
    //             p.id === editedPunchcard.id ? editedPunchcard : p
    //           )}
    //       } else {
    //         return c
    //       }
    //     })

    //     setAllCustomers(updatedCustomers)
    //   }
       
    const login = (user) => {
        setUser(user)
        setLoggedIn(true) 
    }

    const logout = () => {
        setUser({
          customers: []
        })
        setLoggedIn(false) 
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true) 
    }

  return (

    <UserContext.Provider value={{ 
      user, 
      allCustomers, 
      login, 
      logout, 
      signup, 
      loggedIn, 
      addPunchcard, 
      editPunchCount, 
      deleteCustomer,
      addCustomer,
      errors, 
      formFlag, 
      editCustomerName
      }}>
        {children}
    </UserContext.Provider>

  )
}

export { UserContext, UserProvider }
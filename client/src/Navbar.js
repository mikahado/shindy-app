import React, { useContext } from 'react'
import { UserContext } from './context/user'
import { NavLink, useNavigate } from 'react-router-dom'
import shindyLogo from './imgs/shindyLogo.png'

const Navbar = () => {

  const {user, logout, loggedIn} = useContext(UserContext)
  const navigate = useNavigate()

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
    .then(() => { 
      logout() 
      navigate('/')
    })
  }

  if (loggedIn) {
   
      return (
        <>
          <nav class="container-fluid">

            <ul>

            <NavLink to='/'>
            <li><h3><strong>{user.username}</strong></h3></li>
              </NavLink>
                
            </ul>
            
            <ul>

              <li>
              <NavLink to='/customers'>
                <button className="button2">Clientele</button>
              </NavLink>
              </li>

              <li>
              <NavLink to='/punchcards'>
                <button className="button2">New</button>
              </NavLink>
              </li>

              
              <li>
                <button class="outline" onClick={logoutUser}>Logout</button>
              </li>  
            <br/><br/>

            </ul>
                

          </nav>
          <hr/>   
          

        </>
      )

  } else {

    return (
      <>
        
          <main class="container">
              <nav class="container-fluid">
              <ul> 
                  <li>
                    <NavLink to='/login'>
                      <button class="contrast outline">Login</button>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/signup'>
                      <button className="button2">Signup</button>
                    </NavLink>
                  </li>
              </ul> 
              </nav>     
            </main>
      </>
    )
  }
}

export default Navbar
import React, { useContext } from 'react'
import { UserContext } from './context/user'
import shindyLogo from './imgs/shindyLogo.png'

const Home = () => {

  const { user, loggedIn } = useContext(UserContext)

  if (loggedIn) {
    return ( 
      <div>
        <h3>
        <img className="logo-small" src={shindyLogo} alt="shindyLogo" />
        
          <br/>
          <h1><strong>Welcome to <br /> {user.username}</strong></h1>
          <br />
    
          <p>▲             ▲</p>
          <hr />

        </h3>
      </div>
    )
  } else { 
    return (
    <div>
      <img className="logo" src={shindyLogo} alt="shindyLogo" />
      <br /><br /><br /><br />
      <main class="container">      
    
        <article className="card2">
          <h2>What is Shindy?</h2>
          <h4>
            Shindy is your new loyalty card 
            <br /> 
            Enough said
          </h4>
        </article>

        <article className="card">
          <h2>Go on . . . </h2>
          <h4>  
            Shindy
            <br />
            is an easy-to-use
            <br />
            app designed to help 
            <br/>
            businesses retain customers
            <br />
            without pressure
          </h4>
        </article>

        <article className="card2">
          <h2>How does it work</h2>
          <h4>
            Simply. 
            <br />
            A client walks in ~
            <br />
            you offer a reward for returning
            <br />
            <br />
            You enter their name
            <br />
            and a personlized punchcard is created
            <br />
            just for them
            <br /><br />
            Each time they visit
            <br />
            you PUNCH it! 
          </h4>
        </article>

        <article className="card">
          <h2>What's new about THAT.</h2>
          <h4>  
            Ease and simplicity 
            <br /><br />
            Shindy offers business an app interface 
            <br /> 
            and customers a rewards card
            <br /><br />
            Businesses don't need to 
            <br />
            create complex profiles.
            <br/><br />
            Customers don't need to 
            <br />
            save or download anything.
            <br/><br />
                
          </h4>
        </article>

        <article className="card2">
          <h2>Now what?</h2>
          <h4>
          Set up your business profile
          <br/><br/>
          In less than a minute
          <br/> 
          you will be up 
          <br /> 
          and 
          <br />
          running!
          </h4>
        </article>

        <br /><br />
        
        
      </main>



      
    </div>
    )
  }
}

export default Home
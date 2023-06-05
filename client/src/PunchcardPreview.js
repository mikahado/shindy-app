import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const PunchcardPreview = ({punchcard}) => {

  const { allCustomers, editPunchCount } = useContext(UserContext)

  // this can be accomplished much more efficiently in the backend:
  const userName = allCustomers.map(u => u.users).flat().find(u => u.id === punchcard.user_id)

  const handlePunch = (e) => {
    e.preventDefault()

    editPunchCount({
            id: punchcard.id,
            count: punchcard.count - 1,
    })
  }

  return (
    <>
    <article>
      <header>
      <em>{punchcard.name}</em>

      <h2>{userName?.username}</h2>

      </header>
  
      <h3>{punchcard.count} more to go</h3>

      <p>{punchcard.reward}!</p>
      <footer>
     
             <button className="punch-button" 
              onClick={handlePunch}>
                PUNCH IT!</button>

      </footer>
    </article>
    </>
  )
}

export default PunchcardPreview
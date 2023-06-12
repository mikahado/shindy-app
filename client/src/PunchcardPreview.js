import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const PunchcardPreview = ({punchcard}) => {

  const { allCustomers, editPunchCount } = useContext(UserContext)

  // move this logic to backend:
  const userName = allCustomers?.map(u => u.users).flat().find(u => u.id === punchcard.user_id)
  console.log('stll need to fix this', userName)

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
      {/* <em>{userName.username}</em> */}

      <h2>{userName?.username}</h2>

      </header>
  
      <h3>{punchcard?.count} more to go</h3>

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
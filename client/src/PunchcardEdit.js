// import React, { useContext, useState, useEffect } from 'react'
// import { UserContext } from './context/user'
// import { useParams } from 'react-router-dom'

// const PunchcardEdit = ({editFlag}) => {

//     const [count, setCount] = useState("")
//     const [reward, setReward] = useState("")

//     const {punchcards, editPunchcard} = useContext(UserContext)
//     const { id } = useParams()

//     useEffect(() => {
//         const storedPunchcard = punchcards.find(p => p.id === parseInt(id))
//         if (storedPunchcard) {
//             setCount(storedPunchcard.count)
//             setReward(storedPunchcard.reward)
//         }
//     }, [])

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         editPunchcard({
//                 id: id,
//                 count: count,
//                 reward: reward
//         })
//         editFlag()
//     }

//   return (
//     <div>
//         <hr />
//         <p>Edit your card:</p>
//         <form onSubmit={handleSubmit}>

//             <label>Count:</label>
//             <input 
//                 type="integer" 
//                 id="count" 
//                 value={count}
//                 onChange={e => setCount(e.target.value)}
//             />
//             <br/><br/>

//             <label>Reward:</label>
//             <input 
//                 type="" 
//                 id="count" 
//                 value={reward}
//                 onChange={e => setReward(e.target.value)}
//             />
//             <br/><br/>
   
//         <button className="button1" type="submit">Submit</button>
       
//         </form>
//     </div>
//   )
// }

// export default PunchcardEdit
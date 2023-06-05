import React, { useState, useContext} from 'react'
import { UserContext } from './context/user'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const PunchcardForm = ({addPunchcardFlag}) => {

    const [count, setCount] = useState(10)
    const [reward, setReward] = useState("")

    const { addPunchcard, errors, loggedIn } = useContext(UserContext)

    const { id } = useParams()

    const handlePunchcardSubmit = (e) => {
        e.preventDefault()

        addPunchcard({
                count: count,
                reward: reward,
                customer_id: id
        })
    }
 
  if (loggedIn) {
    return (
    <div>
        <br />
         <hr/>
        <main class="container">
            <form onSubmit={handlePunchcardSubmit}>
                <article className="card">
                    <p><em>Add a New Punchcard!</em></p>

                    <label>Punches required:</label>
                    <input 
                        type="integer" 
                        id="count" 
                        value={count}
                        onChange={e => setCount(e.target.value)}
                    />
                    <br/><br/>

                    <label>Reward:</label>
                    <input 
                        type="text" 
                        id="count" 
                        value={reward}
                        onChange={e => setReward(e.target.value)}
                    />
                    
                    {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                    ))}

                <button className="button1" type="submit">Submit</button>

                </article>
                
            </form>
  
        </main>
        
        <hr/>
    </div>
  )
} else {
    return (
    <h1>Punchcard Form Error</h1>
    )
}
}

export default PunchcardForm


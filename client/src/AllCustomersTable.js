import React, { useState, useContext } from 'react'
import AllCustomersRow from './AllCustomersRow'
import { UserContext } from './context/user'

const AllCustomersTable = () => {

  const [searchClient, setSearchClient] = useState("")

  const {allCustomers } = useContext(UserContext)

  const filterBySearch = allCustomers.filter(c => c.username.toLowerCase().includes(searchClient.toLowerCase()))

  const customerEntry = filterBySearch.map(c => 
    <AllCustomersRow 
      id={c.id}
      key={c.id}
      name={c.username}
      />)

  const handleSearchChange = (e) => {
    setSearchClient(e.target.value)
  }

  return (
    <div>
      
      <h1 className="title">ALL CLIENTELE</h1>
      
    <main class="container" >
  
      <input className="search" type="text" value={searchClient} onChange={handleSearchChange} placeholder={"SEARCH"} />
      <hr/>
      <article className="card">
        <table role="grid">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Profile</th>
              <th scope="col">id</th>
            </tr>
          </thead>
          <tbody>

            {customerEntry}
          
          </tbody>
        </table>
      </article>
      </main>
    </div>
  )
}

export default AllCustomersTable
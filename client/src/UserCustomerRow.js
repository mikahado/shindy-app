import React from 'react'
import {Link} from 'react-router-dom'

const CustomerRow = ({customer, id}) => {

  

  return (
    <tr>
        <th scope="row">{customer}</th>
        <td>
       
        {<Link to={`/customers/${id}`}>OPEN</Link>}
        
        </td>
    </tr>
  )
}

export default CustomerRow
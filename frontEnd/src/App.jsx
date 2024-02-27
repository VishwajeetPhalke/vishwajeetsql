import React, { useEffect, useState } from 'react'

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/users')
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(err => console.log(err));

  },[])
  return (
    <div style={{padding:"50px"}}>
      <table>
        <thead>
          <th>ID</th>
          <th>name</th>
          <th>Age</th>
          <th>Gender</th>
        </thead>
        <tbody>
          {data.map((d,i)=>(
            <tr key={i}>
              <td>{d.UserId}</td>
              <td>{d.username}</td>
              <td>{d.userage}</td>
              <td>{d.gender}</td>

             </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
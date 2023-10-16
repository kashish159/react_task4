import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Datausers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
    .then(response => {
      console.log(response.data); 
      
      if (Array.isArray(response.data.users)) {
        setUsers(response.data.users);
      } else {
        console.error('Data is not an array:', response.data);
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);

  return (
    <div>
      <h1>Dummy Data</h1>
      <table border="1" >
        <thead>
          <tr>
            <th>Sno</th>
          
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
           
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Datausers;
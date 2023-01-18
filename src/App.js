import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import moment from 'moment';

import UpdateField from './components/UpdateField';
import HistoryField from './components/HistoryField';

const baseURL = 'http://localhost:2000/users'

function App() {
  const [users, setUsers] = useState()
  const [patch, setPatch] = useState(false)
  const [updateUser, setUpdateUser] = useState()
  const [isHistory, setIsHistory] = useState(false)
  const [history, setHistory] = useState()
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data)
    })
  }, [refreshKey])

  const deleteUser = (userId) => {
    axios.delete(`${baseURL}/${userId}`)
    window.location.reload(true);
  }

  const handleAddUser = (e) => {
    const first_name = e.target.first_name.value
    const last_name = e.target.last_name.value
    const username = e.target.username.value
    const email = e.target.email.value
    const dob = e.target.dob.value
    const height = e.target.height.value
    const weight = e.target.weight.value

    axios.post(baseURL, {
      first_name,
      last_name,
      username,
      email,
      dob,
      height,
      weight
    })
    window.location.reload(true);
    e.preventDefault()
  }
  const handleUpdate = (user) => {
    setUpdateUser(user)
    setPatch(true)
  }

  const handleHistory = (user) => {
    setIsHistory(true)
    setHistory(user)
  }
  
  const sliceDob = (date) => {
  const dob = date.slice(0, 10);
  return moment(dob).format("DD/MM/YYYY");
}

  return (
    <div className='container'>

      {
        users?.users.map((user) =>
          <div className='user_info' key={user._id}>
            <h1>{user.first_name} @{user.username}</h1>
            <div>First name: {user.first_name}</div>
            <div>Last name: {user.last_name}</div>
            <div>Email: {user.email}</div>
            <div>Date of birth: {sliceDob(user.dob)}</div>
            <div>Height: {user.height}cm</div>
            <div>Weight: {user.weight}kg</div>
            <button onClick={() => deleteUser(user._id)} className='delete'>Delete</button>
            <button onClick={() => handleUpdate(user)} className="edit">Edit</button>
            <button onClick={() => handleHistory(user)} className="history">History</button>
          </div>
        )
      }

      <div className='history-div'>
        {isHistory ? <HistoryField user={history} /> : ''}
      </div>

      <div>
        {patch ? <UpdateField user={updateUser} /> : ''}
      </div>

      <div className='addUser'>
        <form onSubmit={handleAddUser} method="POST">
          <input type="text" name='first_name' placeholder='First name' />
          <input type="text" name='last_name' placeholder='Last name' />
          <input type="text" name='username' placeholder='Username' />
          <input type="text" name='email' placeholder='Email' />
          <input type="date" name='dob' placeholder='Date of birth' />
          <input type="text" name='height' placeholder='Height' />
          <input type="text" name='weight' placeholder='Weight' />
          <button className="history ext-btn">Add user</button>
        </form>
      </div>
    </div >
  );
}

export {sliceDob};
export default App;
 

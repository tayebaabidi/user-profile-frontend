import React from 'react'
import axios from 'axios'

const baseURL = 'http://localhost:2000/users'

const UpdateField = (props) => {
    const handleUpdate = (e) => {
      axios.patch(`${baseURL}/${props.user._id}`, {
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        username: e.target.username.value,
        email: e.target.email.value,
        dob: e.target.dob.value,
        height: e.target.height.value,
        weight: e.target.weight.value
      })
    }
    return (
      <div className='update'>
        <form onSubmit={handleUpdate}>
          <input type="text" name='first_name' placeholder='First name' defaultValue={props.user.first_name} />
          <input type="text" name='last_name' placeholder='Last name' defaultValue={props.user.last_name} />
          <input type="text" name='username' placeholder='Username' defaultValue={props.user.username} />
          <input type="text" name='email' placeholder='Email' defaultValue={props.user.email} />
          <input type="text" name='dob' placeholder='Date of birth' defaultValue={props.user.dob} />
          <input type="text" name='height' placeholder='Height' defaultValue={props.user.height} />
          <input type="text" name='weight' placeholder='Weight' defaultValue={props.user.weight} />
          <button className="history ext-btn">Update</button>
        </form>
      </div>
    )
  }

export default UpdateField
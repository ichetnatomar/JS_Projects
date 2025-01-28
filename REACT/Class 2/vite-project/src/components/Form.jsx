import React, { useState } from 'react'


const Form = () => {
  const [name, setName] = useState('name');
  const [email, setEmail] = useState('email@gmail.com');
  const [password, setPassword] = useState('pwd');

  function submitForm(e) {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);

  }


  return (
    <form onSubmit={submitForm}>
      <label>Name</label>
      <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />

      <label>Email</label>
      <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />

      <label>Password</label>
      <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />

      <button onSubmit={submitForm} type='submit'>Submit Form</button>
    </form>
  )
}

export default Form
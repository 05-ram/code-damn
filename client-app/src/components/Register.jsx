import React, { useState } from 'react'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5005/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, password
      })
    })
    const data = response.json();
    console.log(data)
    setName('')
    setEmail('')
    setPassword('')
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center" }}>Register</h1>
          <label for="name"><b>Name</b></label>
          <input type="text" placeholder="Name" name="name" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required value={password} onChange={(e) => setPassword(e.target.value)} />

          <p>By creating an account you agree to our Terms & Privacy</p>

          <button type="submit" class="registerbtn">Register</button>
        </form>
      </div>
    </>
  )
}

export default Register
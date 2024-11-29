import React from 'react'
import './Register.css'; 

function TeaFactoryRegister() {
  return (
    <div className='formdiv'>
       <h2>Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="Factoryname">Factoryname:</label>
          <input type="text" id="Factoryname" placeholder=" Factoryname" required />
        </div>
        <div className="form-group">
          <label htmlFor="Contect-Number">Contect-Number:</label>
          <input type="text" id="Contect-Number" placeholder="Contect-Number" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Create a password" required />
        </div>
        <div className="form-group">
          <label tmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" required />
        </div>
        
        <button type="submit">Submit</button>
        
      </form>
    </div>
  )
}

export default TeaFactoryRegister
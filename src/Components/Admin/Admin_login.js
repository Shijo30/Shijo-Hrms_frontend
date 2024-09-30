import React, { useState } from 'react'
import '../Admin/Admin_login.css'
import'../Admin/Admin_home.js'
import '../Images/adbg.jpg';
import { useNavigate } from 'react-router-dom';


function Admin_login() {
  
    const [form, setForm] = useState({ username: '', passwords: '' })
  console.log(form);
  const rom = (enter) => {
    setForm({ ...form, [enter.target.name]: enter.target.value })
  }
  const navigate=useNavigate();
  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    if (form.username === "admin" && form.passwords === "admin123")
       {
       
        alert("Loggedin Successfully")
      navigate('/Adminhome');
     
    }
    else if (form.username !== "admin") {
      alert("username incorrect");
    }
    else if (form.passwords !== "admin123") {
      alert("password incorrect")
    }
    else {
      alert("login Failed");
    }
  };
  return (
<div className='adminloginbg'>
<div class="wrapper">
    <form className='adminloginform' action="#" onSubmit={submitt}>
      <h2>Admin Login</h2>
        <div class="input-field adminlogininput">
        <input type="text" name="username" value={form.username} onChange={rom}required></input>
        <label>Enter your UserName</label>
      </div>
      <div class="input-field adminlogininput">
        <input type="password" name="passwords" value={form.passwords} onChange={rom} required></input>
        <label>Enter your password</label>
      </div>
      {/* <div class="forget">
        <a href="#">Forgot password?</a>
      </div> */}
      <button className="adminloginbtn"type="submit">Log In</button>
    </form>
  </div>
  </div>





 
  )
}

export default Admin_login
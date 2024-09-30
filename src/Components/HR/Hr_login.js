import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Hr_login() {

  const [data, setdata]=useState({Email:'',Password:''});

  const navigate=useNavigate()

  const onChange=(a)=>{
    setdata({...data,[a.target.name]:a.target.value})
  }
const submit=(Event)=>{
  Event.preventDefault()
  axios.post("http://localhost:4004/hrlogin",data)
  .then((result)=>{
    
    if(result.data.status===200){
      alert("Login Sucess");
      localStorage.setItem("HRId",result.data.data._id)
      navigate("/hrhome")
      
    }
   
else if (result.data.status===500){
  alert("password error")
}

else if (result.data.status===400){
  alert("User not found")
}
  })
  .catch((error)=>{
    console.log( error)
      })
}


  return (
    <div>


 <div class="background">
        <div class="container emplogcon">
          <form onSubmit={submit}> 
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title empinput">
                  <span>HR LOGIN</span>
                </div>
                <div class="app-signup empinput">Don't have an account? <a className='signuplink' href="hrsignup">Sign up</a> </div>
                {/* <a className='forgetlink empinput' href="Emp_forget">Forget password?</a> */}
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input className  ="app-form-control empinput" placeholder="EMAIL" name="Email" value={data.Email} onChange={onChange}></input>
                  </div>
                  <div class="app-form-group">
                    <input className="app-form-control empinput" type="password" placeholder="PASSWORD" name="Password" value={data.Password} onChange={onChange}></input>
                  </div>
                  <div class="app-form-group buttons">
                    {/* <button  class="app-form-button empinput" >CANCEL </button> */}
                    <button type="submit" className="app-form-button empinput">LOGIN</button>
                  </div>
                </div>
              </div>
            </div>
          </div></form>
        </div>
      </div>


    </div>
  )
}

export default Hr_login
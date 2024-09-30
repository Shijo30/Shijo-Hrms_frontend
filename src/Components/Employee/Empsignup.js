import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios';

function Empsignup() {
// add
  const[data,setdata]=useState({Name:'',Email:'',Gender:'',Mobileno:'',Age:'',Designation:'',Dateofjoin:'',
    Password:'',City:'',District:'',Pincode:'', image:''})
  const navigate=useNavigate()
  const change=(b)=>{
    const{name,value}=b.target
      if (b.target.name ==='image'){
        console.log("img",b.target.files[0]);
        setdata({...data,image:b.target.files[0]})
      }
      else {
        setdata ({...data,[b.target.name]:b.target.value})
      }
  
  }
console.log(data)
console.log("saved")

const submit=(b)=>{
  b.preventDefault()
  axios.post('http://localhost:4004/Employeedetail',data,{
    
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })
  

  .then((result)=>{
    console.log(result);
    if(result.data.status===200){
      alert("Registered successfully")
      // window.location.reload()
      navigate("/")
    }
    else{
      alert("Something went wrong")
      window.location.reload()
    }
  })
  .catch((err)=>{
    console.log(err);
  })
}

  return (
    <div>

<div className='addproject'><h4>Employee signup</h4></div>
      <div className='Addprojectcon container'>
        <form class="addpro-form" onSubmit={submit}>
          <div className='row'>
            <div className='col-md-6 mb-4'>
            <label>UserName</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                class="form-control " onChange={change} name="Name" required value={data.Name}/>
                </div>

                <div className='col-md-6 mb-4'>
            <label>Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                class="form-control " id="password" onChange={change} value={data.Password} name="Password"/>
                </div>

                <div className='col-md-6 mb-4'>
            <label>Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                class="form-control "  value={data.Email}  id="email" onChange={change} name="Email"/>
                </div>

                <div className='col-md-6 mb-4'>
            <label>Mobile Number</label>
              <input
                type="number"
                placeholder="Enter your Mobile Number"
                class="form-control "   id="contact" onChange={change} value={data.Mobileno} name="Mobileno"/>
                </div>

            <div className='col-md-6 mb-4'>
            <label>Gender</label>
              <select 
                placeholder="Gender"
                class="form-control "  id="gender" onChange={change}  name="Gender">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="male">Female</option>
                  </select>
                </div>
            
                <div className='col-md-6 mb-4'>
                <label>Age</label>
              <input
                type="number" 
                placeholder="Enter your Age"
                class="form-control "  id="age" onChange={change} value={data.Age} name="Age"/>
                </div>



                <div className='col-md-6 mb-4'>
            <label>Designation</label>
              <select 
                placeholder="Enter Your Designation"
                class="form-control "  id="designation" onChange={change} name="Designation">
                  <option value="">select</option>
                  <option value="HR">HR</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Software Developer">Software Developer</option>
                      <option value="Web Developer">Web Developer</option>
                      <option value="Database Administrator">Database Administrator</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                  </select>
                </div>



                <div className='col-md-6 mb-4'>
                  <label>Date of join</label>
              <input
                type="date"
                placeholder="Select"
                class="form-control " id="dateofjoin" onChange={change} value={data.Dateofjoin} name="Dateofjoin"/>
                </div>

                <div className='col-md-6 mb-4'>
            <label>City</label>
              <input
                type="text"
                placeholder="Enter your City"
                class="form-control " id="city" onChange={change} value={data.City} name="City"/>
                </div>

                <div className='col-md-6 mb-4'>
                <label>Pincode</label>
              <input
                type="number" 
                placeholder="Enter your pincode"
                class="form-control "  id="pincode" onChange={change} value={data.Pincode} name="Pincode"/>
                </div>

                <div className='col-md-6 mb-4'>
            <label>District</label>
              <input
                type="text"
                placeholder="Enter your District"
                class="form-control " id="district" onChange={change} value={data.District} name="District"/>
                </div>

                <div className='col-md-6 mb-4'>
            <label>Upload Your Image</label>
              <input
                type="file"
                placeholder="Upload your image "
                class="form-control " id="file" onChange={change}  name="image"/>
                </div>

                <button
                    className="addprobtn"
                    type="submit"
                  >
                    SIGN UP
                  </button>

            </div>
        </form>

      </div>


      </div>
  )
}

export default Empsignup
import axios from 'axios'
import React, { useState } from 'react'
import '../Complaints/Complaint.css'
import Emp_nav from "../Employee/Emp_nav"

function Add_complaint() {
    const empid = localStorage.getItem('EmpId')
    
//addd complaint
    const[data,setdata]=useState({complaint:''})

  const change=(b)=>{
    const{name,value}=b.target
    setdata ({...data,[b.target.name]:b.target.value})
  }
console.log(data)
console.log("saved")

const submit=(b)=>{
  b.preventDefault()
  axios.post(`http://localhost:4004/complaint/${empid}`,data)
  

  .then((result)=>{
    console.log(result);
    if(result.data.status===200){
      alert("Added successfully")
      window.location.reload()
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
<Emp_nav/>
<div className='addproject'><h4>Register Complaint</h4></div>
      <div className='Addprojectcon container'>
        <form class="addpro-form" onSubmit={submit}>
          
          <div className='row'>
            <div className='col-md-12 mb-4'>
            <label>Add Complaint</label>
              <textarea
                type="text"
                id="name" name="complaint"
                placeholder="Enter your Complaints"
                class="form-control " onChange={change} value={data.complaint} />
                </div>

                <button
                    className="addprobtn"
                    type="submit"
                  >
                    SUBMIT
                  </button>

                 

            </div>
        </form>

      </div>

      
    </div>
  )
}

export default Add_complaint
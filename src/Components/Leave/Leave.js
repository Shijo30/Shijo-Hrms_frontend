import axios from 'axios'
import '../Leave/Leave.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Leave() {
  const navigate=useNavigate();
  const empid = localStorage.getItem('EmpId')
    
  //addd leave
      const[data,setdata]=useState({type:'',From:'',To:'',Days:'',Comments:''})
  
    const change=(b)=>{
      const{name,value}=b.target
      setdata ({...data,[b.target.name]:b.target.value})
    }
  console.log(data)
  console.log("saved")  
  
  const submit=(b)=>{
    b.preventDefault()
    axios.post(`http://localhost:4004/addleave/${empid}`,data)
    
  
    .then((result)=>{
      console.log(result);
      if(result.data.status===200){
        alert("Added successfully")
        navigate('/emphome');
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

<div className='addproject'><h4>Apply leave</h4></div>
      <div className='Addprojectcon container'>
        <form class="addpro-form" onSubmit={submit} >
          <div className='row'>
            {/* <div className='col-md-6 mb-4'>
            <label>Name</label>
              <input
                type="text"
                id="name" name="Name"
                placeholder="Name"
                class="form-control " />
                </div> */}

            <div className='col-md-6 mb-4'>
            <label>Leave Type</label>
              <select 
               
                id="Leavetype" name="type"
                placeholder="Leavetype"
                class="form-control " onChange={change} value={data.type} >
                  <option value="">Select</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Other">Other</option> 
                  </select>
                </div>
            
                <div className='col-md-6 mb-4'>
                <label>From</label>
              <input
                type="date" name="From"
                id="From"
                placeholder="From"
                class="form-control " onChange={change} value={data.From} />
                </div>

                <div className='col-md-6 mb-4'>
                  <label>To</label>
              <input
                type="date" name="To"
                id="To"
                placeholder="To"
                class="form-control " onChange={change} value={data.To} />
                </div>

                <div className='col-md-6 mb-4'>
            <label>Number of Days</label>
              <input
                type="number"
                id="Days" name="Days"
                placeholder="Number of Days"
                class="form-control "  onChange={change} value={data.Days}/>
                </div>


                <div className='col-md-6 mb-4'>
            <label>Comments</label>
              <textarea
                type="text"
                id="Comments" name="Comments"
                placeholder="Comments"
                class="form-control " onChange={change} value={data.Comments} />
                </div>

                <button
                    className="addprobtn"
                    type="submit"
                  >
                    Apply Leave
                  </button>
                  

            </div>
        </form>

      </div>


    </div>



  )
}

export default Leave
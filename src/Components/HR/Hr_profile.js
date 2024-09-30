import React, { useEffect, useState } from 'react'
import Hr_nav from "../HR/Hr_nav"
import axios from 'axios';

function Hr_profile() {

    const id = localStorage.getItem('HRId')
    console.log(id);
    
const [HRId, setHRId]=useState({Name :"",Password :"",Email :"",Mobileno :"", Gender :"",
     Age :"", Designation :"", Dateofjoin :"", City :"", Pincode :"", District :"", HRId:id})

useEffect(() => { 
  axios.get(`http://localhost:4004/hrviewbyid/${id}`)
   
    .then((response)=>{
      console.log(response.data.result)
      setHRId(response.data.result)
    });
  }, [])

  return (
    <div>


<Hr_nav/>

<div className='Empprofile'><h4>PROFILE</h4></div>
<div className='Empprofilecon container'>
<h2>{HRId.Name}</h2>
<h6>{HRId.Designation}</h6>
      <div className='row'>
        <div className='col-md-5'>
          <div className='viewprofimg' id="hrimg">
            <img src={`http://localhost:4004/${HRId.image?.filename}`} id="hrimg"></img>
          </div>
        </div>
        <div className='col-md-7'>
          <div className='profiledetails'>
            
          
          <h5>Name:{HRId.Name}</h5>
            <h5>Password: {HRId.Password}</h5>
            <h5>Email: {HRId.Email}</h5>
            <h5>Mobile Number: {HRId.Mobileno}</h5>
            <h5>Gender: {HRId.Gender}</h5>
            <h5>Age: {HRId.Age}</h5>
            <h5>Date of Join: {HRId.Dateofjoin}</h5>
            <h5>City: {HRId.City}</h5>
            <h5>Pincode: {HRId.Pincode}</h5>
            <h5>District: {HRId.District}</h5>
          <a href='/hrupdateprofile' style={{ textDecoration:"none"}}> <button type="button" className="btn profileedit">Edit Profile</button></a> 

          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Hr_profile
import React, { useEffect, useState } from 'react'
import "../Employee/Emp_viewprofile.css"
import Emp_nav from "../Employee/Emp_nav"
import axios from 'axios';
import profimge from "../Images/Adminlogo.png"

function Emp_viewprofile() {
  const id = localStorage.getItem('EmpId')
  console.log(id);

  const [EmpId, setEmpId] = useState({
    Name: "", Password: "", Email: "", Mobileno: "", Gender: "",
    Age: "", Designation: "", Dateofjoin: "", City: "", Pincode: "", District: "", EmpId: id
  })

  useEffect(() => {
    axios.get(`http://localhost:4004/viewbyid/${id}`)

      .then((response) => {
        console.log(response.data.result)
        setEmpId(response.data.result)
      });
  }, [])

  return (
    <div>

      <Emp_nav />

      <div className='Empprofile'><h4>PROFILE</h4></div>
      <div className='Empprofilecon container'>
        <h2>{EmpId.Name}</h2>
        <h6>{EmpId.Designation}</h6>
        <div className='row'>
          <div className='col-md-5'>

            <div className='viewprofimg' id="hrimg">
              <img src={`http://localhost:4004/${EmpId.image?.filename}`} id="hrimg" ></img>
            </div>
          </div>
          <div className='col-md-7'>
            <div className='profiledetails'>
              <h5>Name:{EmpId.Name}</h5>
              <h5>Password: {EmpId.Password}</h5>
              <h5>Email: {EmpId.Email}</h5>
              <h5>Mobile Number: {EmpId.Mobileno}</h5>
              <h5>Gender: {EmpId.Gender}</h5>
              <h5>Age: {EmpId.Age}</h5>
              <h5>Date of Join: {EmpId.Dateofjoin}</h5>
              <h5>City: {EmpId.City}</h5>
              <h5>Pincode: {EmpId.Pincode}</h5>
              <h5>District: {EmpId.District}</h5>
              <a href='/empeditprofile' style={{textDecoration:"none"}}><button type="button" className="btn profileedit">Edit Profile</button></a>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Emp_viewprofile
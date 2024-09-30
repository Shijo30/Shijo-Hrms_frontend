import React, { useEffect, useState } from 'react'
import Emp_nav from "../Employee/Emp_nav"
import '../Employee/Emp_leavestatus.css'
import axios from 'axios';

function Emp_leavestatus() {
    const id = localStorage.getItem('EmpId')
 //view emp
 const [viewappleave, setviewappleave]=useState([]);
 const empappleave=()=>{
   axios.get(`http://localhost:4004/viewapprovedleave/${id}`)
   .then((Result)=>{
     console.log(Result)
     setviewappleave(Result.data.data);
     console.log(Result.data.data);
   })
   .catch((error)=>{
     console.log(error);
   })
 }
 
 useEffect(()=>{
    empappleave();
 },[]);



  return (
    <div>

<Emp_nav/>



<div class="container">
<h1 className='leavestatushead'>My Leave Status</h1>

        <section class="leave-status">
            <table className='leavetab'>
                <thead>
                    <tr>
                        <th>Leave Type</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Total Days</th>
                        
                        <th>Comments</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {viewappleave.length ? (
  viewappleave.map((view, index) => (
                <tbody>
                    <tr>
                        <td>{view.type}</td>
                        <td>{view.From.slice(0, 10)}</td>
                        <td>{view.To.slice(0, 10)}</td>
                        <td>{view.Days}</td>
                        
                        <td>{view.Comments}</td>
                        <td >{view.status}</td>
                    </tr>
                    
                </tbody>
                ))
              ) : (
                <h1 style={{ textAlign: "center", padding: "25px", color:"red" }}>No Data found</h1>
              )}
            </table>
        </section>
    </div>


    </div>
  )
}

export default Emp_leavestatus
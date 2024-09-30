import React, { useEffect, useState } from 'react'
import Admin_navbar from "../Admin/Admin_navbar"
import "../Admin/Admin_viewcomplaint.css"
import axios from 'axios';

function Admin_viewcomplaints() {
    const [viewcomplaint, setviewcomplaint] = useState([]);
    const complaint = () => {
      axios.get(`http://localhost:4004/viewallComplaints`)
        .then((Result) => {
          console.log(Result)
          setviewcomplaint(Result.data.data);
          console.log(Result.data.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    useEffect(() => {
        complaint();
    }, []);
  return (
    <div>
<Admin_navbar/>


<div class="complaintcontainer">
        <h1>Complaint Details</h1>
        <table>
       
            <thead>
                <tr>
                    <th>NO</th>
                    <th>Employee Name</th>
                    <th>Designation</th>
                    <th>Complaint</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {viewcomplaint.map((view,index)=>(
                <tr><td scope="row">{index+1}</td>
                    <td>{view.empid.Name}</td>
                    <td>{view.empid.Designation}</td>
                    <td>{view.complaint}</td>
                    <td>{view.status}</td>
                </tr>
                ))}
            </tbody>
            
        </table>
    </div>



    </div>
  )
}

export default Admin_viewcomplaints
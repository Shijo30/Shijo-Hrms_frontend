import React, { useEffect, useState } from 'react'
import Emp_nav from "../Employee/Emp_nav"
import axios from 'axios';

function Emp_complaintstatus() {
    const id = localStorage.getItem('EmpId')
    
    console.log(id);
    const [viewcomplaint, setviewcomplaint] = useState([]);
    const complaint = () => {
      axios.get(`http://localhost:4004/viewcomplaint/${id}`)
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
<Emp_nav/>
<div class="pricing mt-100">
        <div class="container">
          <div class="section-header">
            <h2 style={{marginTop:"50px"}}>Complaint Status</h2>
          </div>
          <div class="row">
            {viewcomplaint.length ? (
              viewcomplaint.map((viewcom) => {
                return (
                  <div class="col-md-12">
                    <div class="price-content">
                      <ul class="list-group">
                        <li class="list-group-item">Complaints :{viewcom.complaint} </li>
                        <li class="list-group-item">Status :{viewcom.status}</li>
                        
                      </ul>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1 style={{ textAlign: "center", padding: "25px" ,color:"red"}}>
                No Complaint found
              </h1>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Emp_complaintstatus
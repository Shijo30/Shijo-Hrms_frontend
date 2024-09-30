import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Hr_details() {


    const [viewhr,setviewhr]=useState([]);
    const hrdet=()=>{
      axios.get("http://localhost:4004/viewhr")
      .then((Result)=>{
        console.log(Result)
        setviewhr(Result.data.data);
        console.log(Result.data.data);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    
    useEffect(()=>{
        hrdet();
    },[]);

  return (
    <div>

<div class="bg-light text-center rounded p-4" style={{marginTop:"80px"}}>
      <div class="justify-content-between mb-5">
        <h6 class="mb-0 " style={{fontWeight:"700", textTransform:"uppercase",letterSpacing:"4px",fontSize:"30px",color:"#666666"}}>
          HR Details</h6>
      </div>
      
        <table class="table text-start align-middle table-bordered table-hover mb-0" style={{textAlign:"center",fontSize:"15px"}}>
  <thead class="table-bordered border-dark">
  <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Designation</th>
      <th scope="col">Date Of Join</th>
      <th scope="col">Mobile No</th>

    </tr>
  </thead>
  <tbody >
  {viewhr.map((viewHr,index)=>(
              
  <tr>
      <th scope="row">{index+1}</th>
      <td>{viewHr.Name}</td>
      <td>{viewHr.Email}</td>
      <td>{viewHr.Designation}</td>
      <td>{viewHr.Dateofjoin}</td>
      <td>{viewHr.Mobileno}</td>
    </tr>
  ))}
  </tbody>
</table>
 </div>

    </div>
  )
}

export default Hr_details
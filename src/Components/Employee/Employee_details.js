import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../Employee/Employee_details.css"


function Employee_details() {
  //view emp
  const [viewemp, setviewemp]=useState([]);
const empdet=()=>{
  axios.get("http://localhost:4004/viewapprovedemp")
  .then((Result)=>{
    console.log(Result)
    setviewemp(Result.data.data);
    console.log(Result.data.data);
  })
  .catch((error)=>{
    console.log(error);
  })
}

useEffect(()=>{
  empdet();
},[]);
  return (

//     <div class="bg-light text-center rounded p-4" style={{marginTop:"80px"}}>
//       <div class="justify-content-between mb-5">
//         <h6 class="mb-0 " style={{fontWeight:"700", textTransform:"uppercase",letterSpacing:"4px",fontSize:"30px",color:"#666666"}}>
//           Employee Details</h6>
//       </div>
      
//         <table class="table text-start align-middle table-bordered table-hover mb-0" style={{textAlign:"center",fontSize:"15px"}}>
//   <thead class="table-bordered border-dark">
//   <tr>
//       <th scope="col">#</th>
//       <th scope="col">Name</th>
//       <th scope="col">Email</th>
//       <th scope="col">Designation</th>
//       <th scope="col">Date Of Join</th>
//       <th scope="col">Mobile No</th>

//     </tr>
//   </thead>
//   <tbody >
//   {viewemp.map((viewEmp,index)=>(
              
//   <tr>
//       <th scope="row">{index+1}</th>
//       <td>{viewEmp.Name}</td>
//       <td>{viewEmp.Email}</td>
//       <td>{viewEmp.Designation}</td>
//       <td>{viewEmp.Dateofjoin}</td>
//       <td>{viewEmp.Mobileno}</td>
//     </tr>
//   ))}
//   </tbody>
// </table>
//  </div>


<div>

<div className='empdetails'>

{viewemp.map((viewEmp,index)=>(

<div class="empdetcard">
    <div class="infos">
        <div class="empdetcardimage">
        <img src={`http://localhost:4004/${viewEmp.image?.filename}`} class="empdetcardimage" ></img>
        </div>
        <div class="info">
            <div>
                <p class="name">
                {viewEmp.Name}
                </p>
                <p class="function">
                {viewEmp.Designation} 
                </p>
                <p class="function">
                {viewEmp.Dateofjoin} 
                </p>
            </div>
            <div class="stats">
                    <p class="flex flex-col">
                        Email
                        <span class="state-value">
                        {viewEmp.Email}
                        </span>
                    </p>
                    <p class="flex">
                        Mobile No
                        <span class="state-value">
                        {viewEmp.Mobileno}
                        </span>
                    </p>
                    
            </div>
        </div>
    </div>
    {/* <button class="request" type="button">
            Add friend
        </button> */}
</div>
))}
</div>
</div>
  )
}

export default Employee_details
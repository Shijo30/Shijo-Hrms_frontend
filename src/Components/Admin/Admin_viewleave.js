import React, { useEffect, useState } from 'react'
import "../Admin/Admin_viewleave.css"
import axios from 'axios';

function Admin_viewleave() {

//view leave
// const [viewleave, setviewleave] = useState([]);
// const leavedet = () => {
//   axios.get("http://localhost:4004/viewallleave")
//     .then((Result) => {
//       console.log(Result)
//       setviewleave(Result.data.data);
//       console.log(Result.data.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// }

// useEffect(() => {
//   leavedet();
// }, []);


const [viewleave, setviewleave] = useState([]);

    const getLeaveDetails = () => {
        axios.get("http://localhost:4004/viewallleave")
            .then((Result) => {
                console.log(Result);
                setviewleave(Result.data.data);
                console.log(Result.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getLeaveDetails();
    }, []);


  return (
    <div>

<div class="leavecontainer">
    <h1>Leave Details</h1>
    <table class="leave-table">
      <thead>
        <tr>
          <th>NO</th>
          <th>Employee Name</th>
          <th>Designation</th>
          <th>Leave Type</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Total Days</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {viewleave.map((viewleave,index) =>(
        <tr>
          <td scope="row">{index+1}</td>
          <td>{viewleave.empid.Name}</td>
          <td>{viewleave.empid.Designation}</td>
          <td>{viewleave.type}</td>
          <td>{viewleave.From.slice(0, 10)}</td>
          <td>{viewleave.To.slice(0, 10)}</td>
          <td>{viewleave.Days}</td>
          <td>{viewleave.status}</td>

        </tr>
      ))}
      </tbody>
    </table>
  </div>


    </div>
  )
}

export default Admin_viewleave
import React, { useEffect, useState } from 'react'
import "../Admin/Admin_dashtab.css"
import axios from 'axios';
import { Alert } from 'bootstrap/dist/js/bootstrap.bundle.min';

function Admin_dashtab() {
  //view 
  const [viewaprvemp, setviewaprvemp] = useState([]);
  const empreqs = () => {
    axios.get("http://localhost:4004/viewemp")
      .then((Result) => {
        console.log(Result)
        setviewaprvemp(Result.data.data);
        console.log(Result.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    empreqs();
  }, []);



  //approve 

  const approveemp = (id) => {
    axios.get(`http://localhost:4004/approvebyid/${id}`)
      .then((res) => {
        console.log(res)
        if (res.data.status === 200) {
          alert("Approved")
          empreqs();
        }
        if (res.data.status === 400) {
          alert(res.data.msg)
          alert("Approved")
        }
      })
      .catch((err) => {
        console.log(err)
        alert("approval failed")

      })
  }

  //remove
  const removeemp = (id) => {
    axios.post(`http://localhost:4004/deleteemp/${id}`)
      .then((res) => {
        console.log(res)
        if (res.data.status === 200) {
          alert("Deleted")
          window.location.reload()
          empreqs()
        }
        if (res.data.status === 400) {
          alert(res.data.msg)
          window.location.reload()
          empreqs()
        }
      })
      .catch((err) => {
        console.log(err)
        alert(" failed")

      })
  }


  return (
    <div>
      <div className='approvehead_1'><h4>Approve Request</h4></div>
      {viewaprvemp.length ? (
        viewaprvemp.map((viewEmp) => {
          return (
            <div>
              <div className="approvemain_1">
                <div class="card approvecard_1" style={{ height: "325px", marginTop: "50px" }}>
                  <h5 class="card-header">APPROVE REQUEST</h5>
                  <div class="card-body" style={{ paddingLeft: "80px", paddingTop: "30px" }}>
                    <div className='row'>
                      <div className='col-md-5'>

                        <div className='viewprofimg' id="hrimg">
                          <img src={`http://localhost:4004/${viewEmp.image?.filename}`} style={{ height: "200px", borderRadius: "10%" }}></img>
                        </div>
                      </div>
                      <div className='col-md-7'>
                        <h2 class="card-text" style={{ textTransform: "uppercase", fontWeight: "600" }}>{viewEmp.Name} </h2>
                        <h6 class="card-text">{viewEmp.Designation}</h6>
                        <h6 class="card-text">Email : {viewEmp.Email}</h6>
                        <h6 class="card-text">Mobile : {viewEmp.Mobileno}</h6>
                        <h6 class="card-text">Gender : {viewEmp.Gender}</h6>


                        <div class="col-sm-12  col-md-11 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                        </div>
                        <div class="d-flex mb-3 gap-2" >
                          <button className=" btn btn-sm btn-primary" style={{ width: "100px", height: "40px", marginTop: "15px" }} type='button' onClick={() => approveemp(viewEmp._id)}   >
                            Approve
                          </button>
                          <button class="btn btn-sm btn-danger" style={{ width: "100px", height: "40px", marginTop: "15px" }} onClick={() => removeemp(viewEmp._id)}>
                            Reject
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <button class="btn btn-primary" style={{ marginLeft: '100px', marginTop:"20px" }}>Approve</button> */}
                </div>
              </div>

            </div>)
        })
      ) : (
        <h1 style={{ textAlign: "center", padding: "25px", color: "red" }}>
          No Request Found
        </h1>
      )}
    </div>
  )
}

export default Admin_dashtab
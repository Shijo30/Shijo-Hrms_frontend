import React, { useEffect, useState } from 'react'
import  '../HR/Hr_leavereq.css'
import axios from 'axios';

function Hr_leavereq() {

//view req
  const [viewleavereq, setviewleavereq] = useState([]);
  const leavereq = () => {
    axios.get("http://localhost:4004/leavereq")
      .then((Result) => {
        console.log(Result)
        setviewleavereq(Result.data.data);
        console.log(Result.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    leavereq();
  }, []);


  //approve 
  const approveleave = (id) => {
    axios.get(`http://localhost:4004/approveleave/${id}`)
      .then((res) => {
        console.log(res)
        if (res.data.status === 200) {
          alert("Approved")
          leavereq();
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


  //reject
  const rejectleave = (id) => {
    axios.get(`http://localhost:4004/rejectleave/${id}`)
      .then((res) => {
        console.log(res)
        if (res.data.status === 200) {
          alert("Rejected")
          leavereq();
        }
        if (res.data.status === 400) {
          alert(res.data.msg)
          alert("rejected")
        }
      })
      .catch((err) => {
        console.log(err)
        alert("reject failed")

      })
  }


  return (
    <div>
<div className='approvehead_1'><h4 style={{marginTop:"20px"}}> leave Request</h4></div>
{
        viewleavereq.map((viewleave) =>(
          <div className="leavemain_1">
          <div class="leavecard approvecard_1" style={{ height: "325px", marginTop: "50px" }}>
            <h5 class="leavetitle" >LEAVE REQUEST</h5>
{/* <div class="card-body" style={{ paddingLeft: "80px", paddingTop: "10px" }}> */}
<div class="leaveuser__container" style={{marginLeft:"50px"}}>
<div class="leaveuser">
<div className='leaveimage' id="leaveimage">
<img src={`http://localhost:4004/${viewleave.empid.image?.filename}`} alt="Profile Preview" className='leaveimage' id="leaveimage"  ></img>
</div>
<div class="leaveuser__content">
        <div class="leavetext">
          <span class="leavename">{viewleave.empid.Name}</span>
          <p class="leaveusername">{viewleave.empid.Designation}</p>
          <p class="leaveusername">Type :{viewleave.type}</p>
          <p class="leaveusername">From :{viewleave.From.slice(0, 10)}</p>
          <p class="leaveusername">To :{viewleave.To.slice(0, 10)}</p>
          <p class="leaveusername">Total days :</p>
          <p class="leaveusername">Status : {viewleave.status}</p>
        </div>
       
         <div class="d-flex mb-0 gap-2" >
                          <button className=" leaveapprove"  type='button'
                          onClick={() => approveleave(viewleave._id)}  >
                            Approve
                          </button>
                          <button class="leavereject" 
                          onClick={() => rejectleave(viewleave._id)}>
                            Reject
                          </button>

                        </div>
       
      </div>

</div>


                    {/* <div className='row'>
                      <div className='col-md-5'>

                        <div className='leaveimage' id="leaveimage">
                        </div>
                      </div>
                      <div className='col-md-7'>
                        <h2 class="card-text" style={{ textTransform: "uppercase", fontWeight: "600" }}>{viewleave.empid.Name}</h2>
                        <h7 class="card-text">{viewleave.empid.Designation}</h7>
                        <h6 class="card-text">Type :{viewleave.type} </h6>
                        <h6 class="card-text">From :{viewleave.From.slice(0, 10)} </h6>
                        <h6 class="card-text">To :{viewleave.To.slice(0, 10)} </h6>
                        <h6 class="card-text">Total days : </h6>
                        <h6 class="card-text">Status : {viewleave.status} </h6>


                        <div class="col-sm-12  col-md-11 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                        </div>
                        <div class="d-flex mb-3 gap-2" >
                          <button className=" leaveapprove" style={{ width: "100px", height: "40px", marginTop: "15px" }} type='button' 
                          onClick={() => approveleave(viewleave._id)}  >
                            Approve
                          </button>
                          <button class="leavereject" style={{ width: "100px", height: "40px", marginTop: "15px" }}  
                          onClick={() => rejectleave(viewleave._id)}>
                            Reject
                          </button>

                        </div>
                      </div>
                    </div> */}
                  </div>
                  </div></div>

))
}





    </div>
  )
}

export default Hr_leavereq
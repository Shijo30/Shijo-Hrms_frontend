import React, { useEffect, useState } from 'react'
import "../Admin/Admin_home.css"
import arrow from "../Images/arrowRight.svg"
import axios from 'axios';

function Admin_home({ data }) {
  //view total approved emp 
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


//view req emp

const [viewaprvemp, setviewaprvemp]=useState([]);
const empreqs=()=>{
  axios.get("http://localhost:4004/viewemp")
  .then((Result)=>{
    console.log(Result)
    setviewaprvemp(Result.data.data);
    console.log(Result.data.data);
  })
  .catch((error)=>{
    console.log(error);
  })
}

useEffect(()=>{
  empreqs();
},[]);



//view project
const [viewproj, setviewproj] = useState([]);
  const projdet = () => {
    axios.get("http://localhost:4004/viewproj")
      .then((Result) => {
        console.log(Result)
        setviewproj(Result.data.data);
        console.log(Result.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    projdet();
  }, []);




  //  view hr
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
       <div className='approvehead_1'><h4>Dashboard </h4></div>
      <section class="three-box">
        <div class="container">
          <div class="three-wrapper">
            <div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="90px" ll="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                </svg>
                <span><span className='dashnum'>
                  {viewemp.length}
                  </span> Total Employees</span>

                    {/* <span><span className='dashnum'>
                    {viewhr.length}
                    </span> Total HR</span> */}
                  
              </div>
              <a href="/Adminviewemp">View Employee Details  <img src={arrow} alt="arrowRight"></img></a>
            </div>

            <div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="90" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                </svg>
                <span><span className='dashnumapprove'>
                  {viewaprvemp.length}
                  </span> Approve Requests</span>
              </div>
              <a href="/Admindashtab">View Approve Requests  <img src={arrow} alt="arrowRight"></img></a>
            </div>
            <div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="90" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 -1 18 18">
                  <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                </svg>
                <span><span className='dashnumproj'>{viewproj.length}</span> Total Projects</span>
              </div>
              <a href="/Adminviewproj">View Project Details <img src={arrow} alt="arrowRight"></img></a>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Admin_home
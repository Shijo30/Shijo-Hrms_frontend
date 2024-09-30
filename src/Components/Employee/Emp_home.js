import React, { useEffect, useState } from 'react'
import '../Employee/Emp_home.css'
import empimg1 from "../Images/Adminlogo.png"
import Emp_nav from "../Employee/Emp_nav"
import axios from 'axios'

function Emp_home() {
  const id = localStorage.getItem('EmpId')
        console.log(id);
        
const [EmpId, setEmpId]=useState({Name :"", EmpId:id})

    useEffect(() => {
      axios.get(`http://localhost:4004/viewbyid/${id}`)
       
        .then((response)=>{
          console.log(response.data.result)
          setEmpId(response.data.result)
        });
      }, [])
     


  return (
    <div>

<Emp_nav/>

    <section class="emphomebanner">
        <div class="container">
            <div class="emphomebanner-wrapper">
                <div>
                   <h1> 
                   <span>Name: {EmpId.Name} </span>
                        <span>Get your Dream</span>
                        <span>job Fast and </span>
                        <span> build your career</span>
                   </h1>
                    <p>Choose a job you love, and you will never have to work a day in your life</p>
                    <div>
                        <a href="/empprofile">Your Profile</a>
                        
                    </div>    
                </div>
                <div>
                    <img src={empimg1} alt="emp"></img>

                    {/* <img src={`http://localhost:4004/${EmpId.image?.filename}`} alt="emp" className='emphomeimg' style={{height:"400px", width:"400px",borderRadius:"100%", objectFit:"cover"}}></img> */}
                </div>
            </div>
        </div>
    </section>







 



    </div>


  )
}

export default Emp_home
import React, { useEffect, useState } from 'react'
import Hr_nav from"../HR/Hr_nav"
import empimg1 from "../Images/Adminlogo.png"
import axios from 'axios';

function Hr_home() {


    const id = localStorage.getItem('HRId')
    console.log(id);
    
const [HRId, setHRId]=useState({Name :"", HRId:id})

useEffect(() => {
  axios.get(`http://localhost:4004/hrviewbyid/${id}`)
   
    .then((response)=>{
      console.log(response.data.result)
      setHRId(response.data.result)
    });
  }, [])
 

  
  return (
    <div>

<Hr_nav/>

    <section class="emphomebanner">
        <div class="container">
            <div class="emphomebanner-wrapper">
                <div>
                   <h1>
                   <span>Name: {HRId.Name} </span>
                        <span>HR Homepage</span>
                        <span>job Fast and </span>
                        <span> build your career</span>
                   </h1>
                    <p>Choose a job you love, and you will never have to work a day in your life</p>
                    <div>
                        <a href="/hrprofile">Your Profile</a>
                    </div>    
                </div>
                <div>
                    <img src={empimg1} alt="emp"></img>
                </div>
            </div>
        </div>
    </section>


    </div>
  )
}

export default Hr_home
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../Projects/View_project.css"

function View_project() {


  //view
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



  //remove
const removeproj =(id)=>{
  axios.post(`http://localhost:4004/deleteproj/${id}`)
  .then((res)=>{
    console.log(res)
    if(res.data.status ===200){
      alert("Deleted")
      window.location.reload()
    }
    if (res.data.status===400){
      alert(res.data.msg)
      window.location.reload()
      projdet()
    }
   })
   .catch((err)=>{
    console.log(err)
    alert(" failed")

   })
}

  return (


<div>


{viewproj.map((viewproj, index) => (

<main className='hrviewprojcontainer'>


        <section class="hrviewproj">
            <h2>Project Name : {viewproj.ProjectName}</h2>

            <div class="details-grid">
            <div class="detail-item">
                    <h3>Team Lead:</h3>
                    <p>{viewproj.Member.Name}</p>
                </div>
                <div class="detail-item">
                    <h3>Technology:</h3>
                    <p>{viewproj.Technology}</p>
                </div>
                <div class="detail-item">
                    <h3>End Date:</h3>
                    <p>{viewproj.Deadline}</p>
                </div>
               
                <div class="detail-item">
                    <h3>Status:</h3>
                    <p>{viewproj.percentage}</p>
                </div>
                
            </div>

            

            <div class="project-description">
                <h3>Project Description</h3>
                <p> {viewproj.Description}</p>
            </div>
            <a href={`/updateproject/${viewproj._id}`}> <button type="button" class=" btn startedit ">Edit</button></a> 
                                 <button type="button" class=" btn start " onClick={()=>removeproj(viewproj._id)}>Delete</button>
        </section>
      
    </main>
      ))}
</div>
  )
                  }

export default View_project
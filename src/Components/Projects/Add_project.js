import React, { useEffect, useState } from 'react'
import "../Projects/Add_project.css"
import Hr_nav from"../HR/Hr_nav"

import axios from 'axios'

function Add_project() {
  const id = localStorage.getItem('EmpId')
  //add proj
  const[data,setdata]=useState({ProjectName:'',Member:'',Technology:'',Deadline:'', Description:''})

  const change=(b)=>{
    const{name,value}=b.target
    setdata ({...data,[b.target.name]:b.target.value})
  }
console.log(data)
console.log("saved")

const submit=(b)=>{
  b.preventDefault()
  axios.post('http://localhost:4004/Project',data)
  

  .then((result)=>{
    console.log(result);
    if(result.data.status===200){
      alert("Added successfully")
      window.location.reload()
    }
    else{
      alert("Something went wrong")
      window.location.reload()
    }
  })
  .catch((err)=>{
    console.log(err);
  })
}


//view empname
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

const handleChange = (e) => {
  const { name, value } = e.target;
  setdata({ ...data, [name]: value });
};

  return (
    <div>
<Hr_nav/>
      <div className='addproject'><h4>add project</h4></div>
      <div className='Addprojectcon container'>
        <form class="addpro-form" onSubmit={submit}>
          <div className='row'>
            <div className='col-md-6 mb-4'>
            <label>Title</label>
              <input
                type="text"
                id="name" name="ProjectName"
                placeholder="Enter Project Name"
                class="form-control " onChange={change} required value={data.ProjectName}/>
                </div>

           
{/* <div className='col-md-6 mb-4'>
  <label>Add Member</label>
  <select 
    id="Member" 
    name="Member"
    placeholder="Select Member"
    className="form-control" 
    onChange={change} 
    required 
    value={data.Member}
  >
    <option value="">Select Member</option>
    {viewemp.map((viewEmp, index) => (
      <option key={index} value={viewEmp.Name}>{viewEmp.Name}</option>
    ))}
  </select>

</div> */}

<div className='col-md-6 mb-4'>
  <label>Add Member</label>
  <select 
    id="Member" 
    name="Member"
    placeholder="Select Member"
    className="form-control" 
    onChange={handleChange} 
    required 
    value={data.Member}
  >
    <option value="">Select Member</option>
    {viewemp.map((viewEmp, index) => (
      <option key={index} value={viewEmp._id}>{viewEmp.Name}</option>
    ))}
  </select>
</div>




            
                <div className='col-md-6 mb-4'>
                <label>Technology</label>
              <input
                type="text" name="Technology"
                id="Technology"
                placeholder="Enter Technology"
                class="form-control " onChange={change} required value={data.Technology}/>
                </div>

                <div className='col-md-6 mb-4'>
                  <label>Deadline</label>
              <input
                type="date" name="Deadline"
                id="deadline"
                placeholder="Enter deadline"
                class="form-control " onChange={change} required value={data.Deadline}/>
                </div>

                <div className='col-md-6 mb-4'>
                  <label>Description</label>
              <textarea
                type="text" name="Description"
                id="Description"
                placeholder="Enter Description"
                class="form-control " onChange={change} required value={data.Description}/>
                </div>


                <button
                    className="addprobtn"
                    type="submit"
                  >
                    Add project
                  </button>

                  
            </div>
        </form>

      </div>

      
      

    </div>
  )
}

export default Add_project
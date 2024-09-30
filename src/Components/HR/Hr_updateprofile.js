import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Hr_updateprofile() {

    const id = localStorage.getItem('HRId')
    console.log(id);
    const navigate=useNavigate()
    const [HRId, setHRId] = useState({
      Name: "", Password: "", Email: "", Mobileno: "", Gender: "",
      Age: "", Designation: "", Dateofjoin: "", City: "", Pincode: "", District: "",image:"", HRId: id
    })
  
    useEffect(() => {
      axios.get(`http://localhost:4004/hrviewbyid/${id}`)
  
        .then((response) => {
          console.log(response.data.result)
          setHRId(response.data.result)
        });
        
    }, [])




    const handleChange = (e) => {
        // setEmpId({ ...EmpId, [e.target.name]: e.target.value });
        if (e.target.name === "image") {
            setHRId({ ...HRId, image: e.target.files[0] }); // Handle file upload
        } else {
            setHRId({ ...HRId, [e.target.name]: e.target.value });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in HRId) {
            formData.append(key, HRId[key]);
        }
        axios.post(`http://localhost:4004/updatehr/${id}`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
          .then((result) => {
            console.log(' updated:', result.data);
            alert("Updated")
            navigate("/hrprofile")
            
          })
          .catch((error) => {
            console.log('Error updating project:', error);
            alert("Updated failed")
           
          });
      };

  return (
    <div>

<div className="employee-form-container">
      <h2>Update HR Details</h2>
      <form onSubmit={handleSubmit}>
        {HRId.image && ( 
        <div className="image-preview">
              <img src={`http://localhost:4004/${HRId.image?.filename}`} alt="Profile Preview" onChange={handleChange}  ></img>
          </div>
         )} 

      <div className='row'>
            <div className='col-md-6 mb-4'>
            <label>UserName</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                class="form-control " value={HRId.Name} onChange={handleChange} name="Name" required />
                </div>

                <div className='col-md-6 mb-4'>
            <label>Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                class="form-control " id="password" value={HRId.Password}onChange={handleChange}  name="Password"/>
                </div>

                <div className='col-md-6 mb-4'>
            <label>Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                class="form-control "   id="email" value={HRId.Email} onChange={handleChange}  name="Email"/>
                </div>

                <div className='col-md-6 mb-4'>
            <label>Mobile Number</label>
              <input
                type="number"
                placeholder="Enter your Mobile Number"
                class="form-control "  id="contact"  value={HRId.Mobileno} onChange={handleChange}  name="Mobileno"/>
                </div>

            <div className='col-md-6 mb-4'>
            <label>Gender</label>
              <select 
                placeholder="Gender"
                class="form-control "  id="gender"  value={HRId.Gender}onChange={handleChange}  name="Gender">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="male">Female</option>
                  </select>
                </div>
            
                <div className='col-md-6 mb-4'>
                <label>Age</label>
              <input
                type="number" 
                placeholder="Enter your Age"
                class="form-control "  id="age" value={HRId.Age} onChange={handleChange} name="Age"/>
                </div>



                <div className='col-md-6 mb-4'>
            <label>Designation</label>
              <select 
                placeholder="Enter Your Designation"
                class="form-control "  id="designation" value={HRId.Designation} onChange={handleChange}  name="Designation">
                  <option value="">select</option>
                  <option value="HR">HR</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Software Developer">Software Developer</option>
                      <option value="Web Developer">Web Developer</option>
                      <option value="Database Administrator">Database Administrator</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                  </select>
                </div>



                <div className='col-md-6 mb-4'>
                  <label>Date of join</label>
              <input
                type="date"
                placeholder="Select"
                class="form-control " id="dateofjoin" value={HRId.Dateofjoin} onChange={handleChange} name="Dateofjoin"/>
                </div>

                <div className='col-md-6 mb-4'>
            <label>City</label>
              <input
                type="text"
                placeholder="Enter your City"
                class="form-control " id="city"value={HRId.City} onChange={handleChange}  name="City"/>
                </div>

                <div className='col-md-6 mb-4'>
                <label>Pincode</label>
              <input
                type="number" 
                placeholder="Enter your pincode"
                class="form-control "  id="pincode" value={HRId.Pincode} onChange={handleChange}  name="Pincode"/>
                </div>

                <div className='col-md-6 mb-4'>
            <label>District</label>
              <input
                type="text"
                placeholder="Enter your District"
                class="form-control " id="district" value={HRId.District} onChange={handleChange}  name="District"/>
                </div>



<div className="form-group col-md-6 mb-4">
          <label htmlFor="image">Profile Image:</label>
          <input
            type="file"
            id="profileImage"
            name="image"
            accept="image/*"
            onChange={handleChange} 
          />
        </div>

        


                </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>


    </div>
  )
}

export default Hr_updateprofile
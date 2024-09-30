import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, } from 'react-router-dom';

function Edit_project() {

  const { id } = useParams();
  const navigate=useNavigate()
  const [viewproj, setviewproj] = useState({
    ProjectName: '',
    Member: '',
    Technology: '',
    Deadline: ''
  });

  const projdet = () => {
    axios.get(`http://localhost:4004/viewprojbyid/${id}`)
      .then((Result) => {
        setviewproj(Result.data.result);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    projdet();
  }, [id]);

  const handleChange = (e) => {
    setviewproj({ ...viewproj, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4004/updateProject/${id}`, viewproj)
      .then((result) => {
        console.log('Project updated:', result.data);
        alert("Updated")
        navigate("/hrviewproj")
      })
      .catch((error) => {
        console.log('Error updating project:', error);
        alert("Updated failed")
       
      });
  };

  const [viewemp, setviewemp] = useState([]);
  const empdet = () => {
    axios.get("http://localhost:4004/viewapprovedemp")
      .then((Result) => {
        setviewemp(Result.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    empdet();
  }, []);

  return (
    <div>
      <div className='addproject'><h4>Edit project</h4></div>
      <div className='Addprojectcon container'>
        <form className="addpro-form" onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <label>Title</label>
              <input
                type="text"
                id="name" name="ProjectName"
                placeholder="Enter Project Name"
                className="form-control"
                value={viewproj.ProjectName}
                onChange={handleChange} />
            </div>

            {/* <div className='col-md-6 mb-4'>
              <label>Add Member</label>
              <select
                id="Member"
                name="Member"
                placeholder="Select Member"
                className="form-control"
                required
                value={viewproj.Member}
                onChange={handleChange}>
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
                required
                value={viewproj.Member} // Ensure this is set correctly
                onChange={handleChange}
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
                type="text"
                name="Technology"
                id="Technology"
                placeholder="Enter Technology"
                className="form-control"
                value={viewproj.Technology}
                onChange={handleChange} />
            </div>

            <div className='col-md-6 mb-4'>
              <label>Deadline</label>
              <input
                type="date"
                name="Deadline"
                id="deadline"
                placeholder="Enter deadline"
                className="form-control"
                value={viewproj.Deadline}
                onChange={handleChange} />
            </div>

            <button className="addprobtn" type="submit">UPDATE</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit_project;

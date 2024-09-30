import React, { useEffect, useState } from 'react';
import Emp_nav from "../Employee/Emp_nav";
import "../Employee/Emp_viewproject.css";
import axios from 'axios';

function Emp_viewproject() {
  const id = localStorage.getItem('EmpId');
  console.log(id);
  const [viewpro, setviewpro] = useState([]);
  const [status, setStatus] = useState({});

  const pro = () => {
    axios.get(`http://localhost:4004/viewpro/${id}`)
      .then((Result) => {
        console.log(Result);
        setviewpro(Result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    pro();
  }, []);

  const handleStatusChange = (e, id) => {
    setStatus({ ...status, [id]: e.target.value });
  };

  const updateprojectStatus = (id) => {
    axios.post(`http://localhost:4004/updateprojectStatus/${id}`, { percentage: status[id] })
      .then((result) => {
        console.log('Status updated:', result.data);
        pro(); // Refresh the project list
      })
      .catch((error) => {
        console.log('Error updating status:', error);
      });
  };

  return (
    <div>
      <Emp_nav />
      <h1 className='projhead'>Assigned Projects</h1>
      <section className="projects">
        {viewpro.length ? (
          viewpro.map((view, index) => (
            <div className="project-card" key={view._id}>
              <h2>Project Name: {view.ProjectName}</h2>
              <div className="project-details">
                <p><strong>Member:</strong> {view.Member.Name}</p>
                <p><strong>Technology:</strong> {view.Technology}</p>
                <p><strong>Deadline:</strong> {new Date(view.Deadline).toLocaleDateString()}</p>
                <p><strong>Status:</strong> {view.percentage}</p>
                <p><strong>Description:</strong> {view.Description}</p>
              </div>
              <div className="statusupdate">
                <input
                  type="text"
                  className="status"
                  id="status"
                  name="status"
                  placeholder="Update status"
                  autoComplete="off"
                  value={status[view._id] || ''}
                  onChange={(e) => handleStatusChange(e, view._id)}
                />
                <input
                  className="statusbtn"
                  value="Update Status"
                  type="submit"
                  onClick={() => updateprojectStatus(view._id)}
                />
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", padding: "25px", color: "red" }}>No Project found</p>
        )}
      </section>
    </div>
  );
}

export default Emp_viewproject;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Hr_nav from "../HR/Hr_nav";
import { Link } from "react-router-dom";

function Hr_viewcomplaint() {

    const [viewcomplaint, setviewcomplaint] = useState([]);
    const [status, setStatus] = useState({});

    const complaint = () => {
      axios.get("http://localhost:4004/viewPendingComplaints")
        .then((Result) => {
          console.log(Result);
          setviewcomplaint(Result.data.data);
          console.log(Result.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    useEffect(() => {
        complaint();
    }, []);

    const handleStatusChange = (e, id) => {
        setStatus({ ...status, [id]: e.target.value });
    };

    const updateStatus = (id) => {
        axios.post(`http://localhost:4004/updateComplaintStatus/${id}`, { status: status[id] })
            .then((result) => {
                console.log('Status updated:', result.data);
                complaint(); // Refresh the complaints list
            })
            .catch((error) => {
                console.log('Error updating status:', error);
            });
    };

    return (
        <div>
            <Hr_nav />
            <div className="container-fluid pt-4 px-4 p-5 mt-100">
                <div className="bg-light text-center rounded p-5">
                    <div className="section-header">
                        <h2>Complaints</h2>
                    </div>
                    <div className="table-responsive">
                    {viewcomplaint.length ? (
                                    viewcomplaint.map((view) => {
                                        return (
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                       
                            <thead>
                                <tr className="text-dark">
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Complaint date</th>
                                    <th scope="col">Complaint</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                       
                                            <tr key={view._id}>
                                                <td>{view.empid.Name}</td>
                                                <td>{view.empid.Email}</td>
                                                <td>{view.empid.Mobileno}</td>
                                                <td>{view.date.slice(0, 10)}</td>
                                                <td>{view.complaint}</td>
                                                <td>
                                                    <input
                                                        className="form-control bg-light border-0 px-4"
                                                        style={{ height: "55px", marginBottom: "10px" }}
                                                        type="text"
                                                        placeholder="write status"
                                                        name="status"
                                                        value={status[view._id] || ''}
                                                        onChange={(e) => handleStatusChange(e, view._id)}
                                                    />
                                                    <button
                                                        className="btn btn-success"
                                                        onClick={() => updateStatus(view._id)}
                                                    >
                                                        Update status
                                                    </button>
                                                </td>
                                            </tr>
                                       
                            </tbody>
                        </table>
                    );
                })
            ) : (
                <h1 style={{ textAlign: "center", padding: "25px", color:"red"}}>
                    No Complaints Found
                </h1>
            )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hr_viewcomplaint;

import React, { useEffect, useState } from 'react'
import Hr_nav from "../HR/Hr_nav"
import { useParams } from 'react-router-dom';
import axios from 'axios';


function Hr_updatecompsts() {

  



  return (
    <div>
<Hr_nav/>
<div class="container-xxl py-5" style={{ marginTop: "1rem" }}>
        <div class="container">
          <div class="section-header">
            <h2>Update Status</h2>
          </div>
          
          <form  style={{ marginBottom: "3rem" }}>
            <div className="row g-3">
              <div className="col-5">
                <input
                  className="form-control bg-light border-0 px-4"
                  style={{ height: "55px" }}
                  type="text"
                  placeholder="write status"
                  name="category"
                 
                //   onChange={(e) => {
                //     setStatus({ ...status, status: e.target.value });
                //   }}
                />
              </div>
              <div className="col-1">
                <button type="submit" class="btn btn-secondary">
                  Update
                </button>
              </div>
            </div>
                      </form>
         
        </div>
      </div>

    </div>
  )
}

export default Hr_updatecompsts
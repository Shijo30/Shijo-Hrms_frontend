import React from 'react'
import Employee_details from '../Employee/Employee_details'
import Admin_navbar from './Admin_navbar'
import Hr_details from '../HR/Hr_details'

function Admin_viewemp() {
  return (
    <div>
{/* <Admin_navbar/> */}

        <Employee_details/>
        {/* <Hr_details/> */}
    </div>
  )
}

export default Admin_viewemp
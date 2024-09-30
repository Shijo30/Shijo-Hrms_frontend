import React from 'react'

function Hr_nav() {
  return (
    <div>


      <header className='emphomehead'>
        <div class="emphomelogo">
          <h3>HRMS </h3>
        </div>

        <div class="emphomecontainer">
          <li className='nav justify-content-end'>
            <a href='/'>
              <button type="button" class=" btn start emphomebtn">Logout</button></a>  </li>
        </div>
      </header>
      <nav className='emphomenav'>

        <div class="emphomecontainer">

          <ul className='emphomeul'>

            <li><a href="/hrhome">Home</a></li>
            <li><a href="/hrviewemp">View Employees</a></li>
            <li><a href="/addproject">Projects</a></li>
            <li><a href="/hrviewproj">View Projects</a></li>
            <li><a href="/hrviewcomplaint">View Complaints</a></li>
            <li><a href="/hrleavereq">Leave Request</a></li>


          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Hr_nav
import React from 'react'

function Emp_nav() {
  return (
    <div>


<header className='emphomehead'> 
<div class="emphomelogo">
                <h3>HRMS</h3> 
            </div>    
            
       <div class="emphomecontainer">
       <li className='nav justify-content-end'>

       <a href='/empleave'>
       <button type="button" class=" btn startleave emphomebtn">Apply Leave</button></a>
                <a href='/'>
            <button type="button" class=" btn start emphomebtn">Logout</button></a>  </li>     
       </div>
    </header>
    <nav className='emphomenav'>
    
        <div class="emphomecontainer">
            
            <ul className='emphomeul'>
                
                <li><a href="/emphome">Home</a></li>
                <li><a href="/empviewproject">Projects</a></li>
                 <li><a href="/Addcomplaint">Add Complaints</a></li>
                <li><a href="/empcomplaintstatus">Complaints Status</a></li>
                <li><a href="/empleavestatus">Leave Status</a></li>
               
            </ul>
        </div>
    </nav>

    </div>
  )
}

export default Emp_nav
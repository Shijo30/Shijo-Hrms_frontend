import React from 'react'
import "../Admin/Admin_navbar.css"
import adminimg from "../Images/Adminlogo.png"

function Admin_navbar() {
  return (
    <div>
{/* <ul class="nav justify-content-end adminnav">
  <li class="nav-item">
    <a href="/Adminhome">
    <button class="btn-44 adminnavlogout "><span>Home</span></button></a>
  </li>
  <li class="nav-item">
    
    <a href="/">
    <button class="btn-44 adminnavlogout "><span>Logout</span></button></a>
  </li>
 
</ul> */}


<section>
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg-light bg-white fixed-top">
          
            <div class="container adminnavcontainer">
       
        <img src={adminimg} style={{width:"100px"}}></img>
          <a class="navbar-brand" href="#">ADMIN</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto" style={{fontSize:"16px"}}>
              <li class="nav-item " >
                <a class="nav-link" aria-current="page" href="/Adminhome">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/Admindashtab">Approve Request</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/Adminviewemp">Employee details</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/Adminviewproj">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/Adminviewcomplaint">Complaints</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/Adminviewleave">Leaves</a>
              </li>
              {/* <li class="nav-item dropdown">
              <a class="nav-link" href="#" data-bs-toggle="dropdown">Dropdown<i class="fa-solid fa-angle-down"></i></a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"> Dropdown item 1 </a></li>
                
                <li class="nav-item dropdown"><a class="dropdown-item Deep-Dropdown nav-link" data-bs-toggle="dropdown" href="#"> Deep Dropdown<i class="fa-solid fa-angle-right"></i> </a>
                  <ul class="submenu dropdown-menu">
                    <li class="deep"><a class="dropdown-item" href="#">Deep Dropdown 1</a></li>
                    <li class="deep"><a class="dropdown-item" href="#">Deep Dropdown 2</a></li>
                    <li class="deep"><a class="dropdown-item" href="#">Deep Dropdown 3</a></li>
                    <li class="deep"><a class="dropdown-item" href="#">Deep Dropdown 4</a></li>
                  </ul>
                </li>
                
                <li><a class="dropdown-item" href="#"> Dropdown item 3 </a></li>
                <li><a class="dropdown-item" href="#"> Dropdown item 4 </a></li>
                </ul>
            </li> */}


            </ul>
            <a href='/'>
            <button type="button" class="btn start">Logout</button></a>
          </div>
          </div>
        </nav>
</section>


    </div>
  )
}

export default Admin_navbar
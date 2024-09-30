import React from 'react'
import '../Navbar/Navbar.css'

function Navbar() {
  return (
    <div>
         <nav class="navbar navbar-expand-lg  bg-dark text-light border-bottom body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
  {/* <img src={Logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/> */}
    <a class="navbar-brand  headhrms" >HRMS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse navoption" id="navbarSupportedContent" >
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"  style={{color:" white" }}>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            LOGIN
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="Adminlogin">Admin</a></li>
            <li><a class="dropdown-item" href="hrlogin">HR</a></li>
            <li><a class="dropdown-item" href="Emplogin">Employee</a></li>
            {/* <li><hr class="dropdown-divider"/></li> */}
            {/* <li><a class="dropdown-item" href="#">Applicants</a></li> */}
          </ul>
        </li>

      <li class="nav-item">
          <a class="nav-link navoption " href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navoption " href="/About">ABOUT</a>
        </li>
       
        {/* <li class="nav-item">
          <a class="nav-link navoption " href="#">CAREER</a>
        </li> */}
         
        {/* <li class="nav-item">
          <a class="nav-link navoption" href="#">LOGIN</a>
        </li> */}

      </ul>
      
    </div>
  </div>
  
</nav>
    </div>
  )
}

export default Navbar
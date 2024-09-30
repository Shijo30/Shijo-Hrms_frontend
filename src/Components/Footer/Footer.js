import React from 'react'
import '../Footer/Footer.css'

function Footer() {
  return (
    <div className='footer'>

    <div class="container">
      <div class="row d-flex justify-content-between ">

        <div class=" col-lg-4 col-md-4" >
          <div class="mb-4">
            <h3 class="fw-bold mb-3 foothead">ABOUT US</h3>
            <ul class="list-unstyled nav nav-footer flex-column nav-x-0 ">
              <li><a href="#" class="nav-link foot1">Home</a></li>
              <li><a href="#" class="nav-link foot1">About Us</a></li>
              <li><a href="#" class="nav-link foot1">Our Services</a></li>
              <li><a href="#" class="nav-link foot1">Terms & Condition</a></li>
              <li><a href="#" class="nav-link foot1">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 ">
          <div class="mb-4">

            <h3 class="fw-bold mb-3 foothead">CONTACT US</h3>
            <div className='footconatus'>
            <p className='pfoot'>1300 Center Avenue</p>
            <p className='pfoot'>Fresno, California</p>
            <p className='pfoot'> United States</p>
            <p className='pfoot'>Phone: +123-456-7890 </p>
            <p className='pfoot'>Email: info@example.com </p>
          
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">

          <div class="mb-4">
            <h3 class="fw-bold mb-3 foothead">SUBSCRIPTION</h3>
            
            <div className='footsubscription'>
            <p className='pfoot'>The world of work is changing rapidly and so should HR
              pratices. 
            </p>
            


            </div>
          </div>
        </div>
      </div>
      <hr class="hr-two" />

<p class="para">
  Copyright @ 2022 HuXn WebDev | Provided by <span>HuXn WebDev</span>
</p>
    </div>

 
  </div>
  )
}

export default Footer
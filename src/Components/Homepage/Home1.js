import React from 'react'
import img_1 from "../Images/imgcorouseljpg.jpg"

function Home1() {
  return (
    <div>

       <header>
      <div class="content-container">
        <h1 class="main-headings">
          Human <br />
          <span> Resource </span><br />
          Management System
        </h1>
        <p class="primary-headings">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div class="homebtns-container">
        {/* <a href="Emplogin"> <button class="btn-fill">Login</button></a>
          <a href="/About">   <button class="btn-outline">View More</button> </a>
        </div> */}
            {/* <a href="Emplogin" class="main-btn-fill btn-animation-home homeloginbtn">Login</a> */}
            <a href="/About" class="main-btn btn-animation-home homeviewmorebtn">View More</a>
          </div>
      </div>

      <div class="img-container">
        <img
          src={img_1}
        />
      </div>
    </header>

<div>
    <h1 class="homeregmain">Deliver exceptional employee <br></br>
    <span class="main-span" >experiences</span></h1>

    {/* <!-- WHY US --> */}
    <section class="Regcontent" id="Regcontent">
      <div class="homereglist-container">
        <div class="homereglist">
          <p class="list-info homereglist">Choose a job you love, and you will never have to work a day in your life</p>
        </div>
        <section class="container">
            <a href="/empsignup">
      <button class="btn homeregbut">Register Now</button></a>
    </section>
      </div>
      <div class="homeregimg">
        <div class="homeregimg-1" ></div>
      </div>
    </section></div>



    <section class="products-container">
      <h1 class="products-heading main-headings">
        Human Resource<br />
        <span>Management System</span>
      </h1>

      <div class="products">
        <div class="product">
          <div class="product-img-layer">
            <div class="img img-one"></div>
          </div>
          <div class="product-content">
            <h1 class="product-name">Work Process</h1>
            <p class="product-quality">Hrms</p>
          </div>
        </div>
        <div class="product">
          <div class="product-img-layer">
            <div class="img img-two"></div>
          </div>
          <div class="product-content">
            <h1 class="product-name">Team Management</h1>
            <p class="product-quality">Hrms</p>
          </div>
        </div>
        <div class="product">
          <div class="product-img-layer">
            <div class="img img-three"></div>
          </div>
          <div class="product-content">
            <h1 class="product-name">Employees</h1>
            <p class="product-quality">Hrms</p>
          </div>
        </div>
      </div>
      <div class="b-container">
        <button>&#x2190;</button>
        <button>&rarr;</button>
      </div>
    </section>

    <section class="why-us">
      <div class="section-img-container">
        <div class="img-layer">
          <div class="img"></div>
        </div>
      </div>

      <div class="content-container">
        <h1 class="main-headings">Why Choose <span> Us?</span></h1>
        <p class="primary-headings">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div class="cards homecards">
          <div class="homecard card-fill">
            <div class="star">&#9733;</div>
            <h1 class="card-title">Longevity</h1>
            <p class="card-info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div class="card homecard">
            <h1 class="card-title">Quality</h1>
            <p class="card-info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div class="card homecard">
            <h1 class="card-title">Heritage</h1>
            <p class="card-info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div class="homecard card-fill">
            <div class="star">&#9733;</div>
            <h1 class="card-title">Community</h1>
            <p class="card-info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
</div>
  )
}

export default Home1
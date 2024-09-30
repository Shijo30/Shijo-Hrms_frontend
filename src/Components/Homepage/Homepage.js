import React from 'react'
import Home1 from './Home1'
import Home2 from './Home2'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


function Homepage() {
  return (
    <div>
       <Navbar/>
       <Home1/>
       {/* <Home2/> */}
       <Footer/>
    </div>

    
  )
}

export default Homepage
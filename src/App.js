import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Admin_Login from './Components/Admin/Admin_login'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Homepage/Homepage';
import Home2 from './Components/Homepage/Home2';
import Employee_login from './Components/Employee/Employee_login';
import Empsignup from './Components/Employee/Empsignup';
import Admin_home from './Components/Admin/Admin_home';
import Admin_dashtab from './Components/Admin/Admin_dashtab';
import Employee_details from './Components/Employee/Employee_details';
import Admin_navbar from './Components/Admin/Admin_navbar';
import Emp_home from './Components/Employee/Emp_home';
import Hr_home from './Components/HR/Hr_home';
import Admin_viewemp from './Components/Admin/Admin_viewemp';
import Add_project from './Components/Projects/Add_project';
import Hr_nav from './Components/HR/Hr_nav';
import Hr_viewemp from './Components/HR/Hr_viewemp';
import View_project from './Components/Projects/View_project';
import Admin_viewproject from './Components/Admin/Admin_viewproject';
import Leave from './Components/Leave/Leave';
import Hr_viewproj from './Components/HR/Hr_viewproj';
import Emp_nav from './Components/Employee/Emp_nav';
import Emp_leave from './Components/Employee/Emp_leave';
import Edit_project from './Components/Projects/Edit_project';
import Emp_viewprofile from './Components/Employee/Emp_viewprofile';
import Emp_viewproject from './Components/Employee/Emp_viewproject';
import Add_complaint from './Components/Complaints/Add_complaint';
import Emp_complaintstatus from './Components/Employee/Emp_complaintstatus';
import Hr_viewcomplaint from "./Components/HR/Hr_viewcomplaint"
import Hr_signup from './Components/HR/Hr_signup';
import Hr_login from './Components/HR/Hr_login';
import Hr_profile from "./Components/HR/Hr_profile"
import Hr_details from './Components/HR/Hr_details';
import Hr_updatecompsts from './Components/HR/Hr_updatecompsts';
import Hr_leavereq from './Components/HR/Hr_leavereq';
import Emp_leavestatus from './Components/Employee/Emp_leavestatus'
import Admin_viewcomplaints from './Components/Admin/Admin_viewcomplaints';
import Admin_viewleave from './Components/Admin/Admin_viewleave';
import Employee_editprofile from './Components/Employee/Employee_editprofile';
import Hr_updateprofile from "./Components/HR/Hr_updateprofile"

function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>

    <Route path='/Adminlogin' element={[<Admin_Login/>]}/>
    <Route path='/Navbar' element={<Navbar/>}/>
    <Route path='/Adminnav' element={<Admin_navbar/>}/>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/About' element={[<Navbar/>,<Home2/>,<Footer/>]}/>
    <Route path='/Admindashtab' element={[<Admin_navbar/>,<Admin_dashtab/>]}/>
    <Route path='/Adminhome' element={[<Admin_navbar/>,<Admin_home/>,<Footer/>]}/>
    <Route path='/Adminviewemp' element={[<Admin_navbar/>,<Admin_viewemp/>,<Footer/>]}/>
    <Route path='/Adminviewproj' element={[<Admin_viewproject/>,<Footer/>]}/>
    <Route path='/Adminviewcomplaint' element={[<Admin_viewcomplaints/>,<Footer/>]}/>
    <Route path='/Adminviewleave' element={[<Admin_navbar/>,<Admin_viewleave/>,<Footer/>]}/>


    <Route path='/Employeedetails' element={[<Employee_details/>, ]}/>
    <Route path='/Emplogin' element={[<Navbar/>,<Employee_login/>,<Footer/>]}/>
    <Route path='/empsignup' element={[<Navbar/>,<Empsignup/>,<Footer/>]}/>
    <Route path='/emphome' element={[<Emp_home/>,<Footer/>]}/>
    <Route path='/empnav' element={[<Emp_nav/>]}/>
    <Route path='/empleave' element={[<Emp_leave/>,<Footer/>]}/>
    <Route path='/empprofile' element={[<Emp_viewprofile/>,<Footer/>]}/>
    <Route path='/empeditprofile' element={[<Emp_nav/>,<Employee_editprofile/>,<Footer/>]}/>
    <Route path='/empviewproject' element={[<Emp_viewproject/>]}/>
    <Route path='/empcomplaintstatus' element={[<Emp_complaintstatus/>]}/>
    <Route path='/empleavestatus' element={[<Emp_leavestatus/>]}/>

    <Route path='/hrsignup' element={[<Navbar/>,<Hr_signup/>,<Footer/>]}/>
    <Route path='/hrlogin' element={[<Navbar/>,<Hr_login/>,<Footer/>]}/>
    <Route path='/hrhome' element={[<Hr_home/>,<Footer/>]}/>
    <Route path='/hrnav' element={[<Hr_nav/>]}/>
    <Route path='/hrviewemp' element={[<Hr_viewemp/>]}/>
    <Route path='/hrviewproj' element={[<Hr_viewproj/>]}/>
    <Route path='/hrprofile' element={[<Hr_profile/>,<Footer/>]}/>
    <Route path='/hrviewcomplaint' element={[<Hr_viewcomplaint/>]}/>
    <Route path='/hrupdatecomplaint' element={[<Hr_updatecompsts/>]}/>
    <Route path='/hrupdateprofile' element={[<Hr_nav/>,<Hr_updateprofile/>]}/>
    <Route path='/hrdetail' element={[<Hr_details/>]}/>
    <Route path='/hrleavereq' element={[<Hr_nav/>,<Hr_leavereq/>]}/>



    <Route path='/addproject' element={[<Add_project/>]}/>
    <Route path='/viewproject' element={[<View_project/>]}/>
    <Route path='/updateproject/:id' element={[<Hr_nav/>,<Edit_project/>]}/>

    <Route path='/Applyleave' element={[<Leave/>]}/>

    <Route path='/Addcomplaint' element={[<Add_complaint/>]}/>

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

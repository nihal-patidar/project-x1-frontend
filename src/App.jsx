import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import EmailVerificationPage from './pages/EmailVerificationPage';
import LoginPage from './pages/LoginPage';
import Auth from './pages/Auth';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserContext';
import axios from 'axios';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ForgetPassword from './components/ForgetPassword';
import Profile from './components/Profile';
import ServicesPage from './pages/ServicesPage';
import ServiceWorkSpace from './components/serviceComp/ServiceWorkspace';
import FormPage from './pages/FormPage';
import ValidatorCard from './components/serviceComp/ValidatorCard';
import TicketPage from './pages/TicketPage';
import ValidatorWorkSpace from './components/serviceComp/ValidatorWorkSpace';
import VisitorStepForTicket from './visitor/VisitorStepForTicket';
import Scaner from './ticket-verification/Scaner';
// import Scaner from './components/Scaner';
const router= createBrowserRouter([
  {
    path:"/register",
    element:<RegistrationPage/>
  },
  {
    path:"/email-verification",
    element: <EmailVerificationPage/>,
  },
  {
    path:"/home",
    element:<Auth><Home/></Auth>,
    children:[
      {
        path:"/home/profile",
        element:<Auth><Profile/></Auth>
      },
      {
        path:"/home/services",
        element:<Auth><ServiceWorkSpace/></Auth>
      },
      {
        path:"/home/validators",
        element:<Auth><ValidatorWorkSpace></ValidatorWorkSpace></Auth>
      }
    ]
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/reset-password",
    element:<ResetPasswordPage/>
  },
  {
    path:"/forget-password",
    element:<ForgetPassword/>
  },
  {
    path:"form/:formId",
    element:<FormPage/>
  },
  {
    path:"ticket/:loweruserId",
    element:<TicketPage/>
  },
  {
    path:"/ticket-generation",
    element: <VisitorStepForTicket/>
  },
  {
    path:"/scanner",
    element:<Scaner></Scaner>
  },
  
  

])
function App() {
  // let{setUserData}= useContext(UserContext);
  // useEffect(async()=>{
  //   try{
  //     await axios.post("http://localhost:3000/api/get-user",{})
  //   }catch(err){

  //   }
  // },[])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer/>
    </>
  )
}

export default App

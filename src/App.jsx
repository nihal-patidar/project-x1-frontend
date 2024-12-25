import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import EmailVerificationPage from './pages/EmailVerificationPage';
import LoginPage from './pages/LoginPage';
import Auth from './pages/Auth';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ForgetPassword from './components/ForgetPassword';
import Profile from './components/Profile';
import ServiceWorkSpace from './components/serviceComp/ServiceWorkspace';
import FormPage from './pages/FormPage';
import ValidatorWorkSpace from './components/serviceComp/ValidatorWorkSpace';
import VisitorStepForTicket from './visitor/VisitorStepForTicket';
import Dashboard from './components/Dashboard';
import Landing from "./components/src/App.jsx";
import FocusInput from './FocusInput.jsx';
const router= createBrowserRouter([
  {
    path:"/",
    element:<Landing/>
  },
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
        path:"profile",
        element:<Profile/>
      },
      {
        path:"services",
        element:<ServiceWorkSpace/>
      },
      {
        path:"validators",
        element:<ValidatorWorkSpace></ValidatorWorkSpace>
      },
      {
        path:"",
        element:<Dashboard/>
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
    path:"/ticket-generation/:formId",
    element: <VisitorStepForTicket/>
  },
  {
    path:"/try",
    element: <FocusInput></FocusInput>
  }
])
function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer/>
    </>
  )
}

export default App

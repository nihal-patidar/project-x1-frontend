import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

// import "../index.css";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Import the CSS file

export const LandingPage = () => {
  return (
    <div id="webcrumbs">
      <div className="landing-container">
        <div className="background-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            className="animated-circle"
          >
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="rgba(0, 173, 181, 1)" />
                <stop offset="100%" stopColor="rgba(57, 62, 70, 1)" />
              </linearGradient>
            </defs>
            <circle cx="400" cy="400" r="350" fill="url(#gradient)" />
          </svg>
        </div>
        <div className="content">
          <h1 className="title">
            <span className="typing-animation">Welcome to SmartLogin</span>
          </h1>
          <p className="description">
            Seamlessly manage your accounts with our secure and fast
            authentication platform.
          </p>
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};



// import {useState} from "react";
// import { Button } from "@material-tailwind/react";

// export default function LandingPage() {
//   const [activeKey , setActiveKey] = useState(0);

//   const Tabs = [
//     {
//       tabName : "Tab 1",
//       key : '0',
//       element : <h1>This is Tab1</h1>
//     },
//     {
//       tabName : "Tab 2",
//       key : '1',
//       element : <h1>This is Tab2</h1>
//     },
//     {
//       tabName : "Tab 3",
//       key : '2',
//       element : <h1>This is Tab3</h1>
//     },
//     {
//       tabName : "Tab 4",
//       key : '3',
//       element : <h1>This is Tab4</h1>
//     }
//   ]
  
//   return (
//     <div className="h-full w-full flex justify-center items-center bg-gradient-to-b from-gray-50 to-white">
//       <div className="h-96 w-1/2 flex flex-col">
//         <div className="flex items-center w-full h-20 justify-start"> 

//           {
//            Tabs.map((tab)=>{
//             return <Button key={tab.key} onClick={()=>setActiveKey(tab.key)} style={{backgroundColor : tab.key == activeKey ? 'green' : 'blue' , marginLeft : "10px"}} > {tab.tabName} </Button>
//            }) 
//           }
          
//         </div>

//         <div className="h-full w-full">
//           {Tabs.map((tab)=>{
//             return tab.key == activeKey ? tab.element : <></>
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }


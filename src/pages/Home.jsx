// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar';
// import Mainbox from '../components/Mainbox';

// const Home = () => {
//     const [showSidebar, setShowSidebar] = useState(true);
  
//     return (
//       <div className="flex flex-col sm:flex-row w-full h-screen">
//         {/* Sidebar with Toggle */}
//         {showSidebar && (
//           <div className="absolute z-50 w-full sm:static sm:w-auto">
//             <Sidebar />
//           </div>
//         )}
//         <button
//           className="sm:hidden p-2 bg-blue-500 text-white rounded-md"
//           onClick={() => setShowSidebar(!showSidebar)}
//         >
//           {showSidebar ? "Close Sidebar" : "Open Sidebar"}
//         </button>
  
//         {/* Main Content */}
//         <div className="flex flex-col w-full h-full">
//           <Navbar />
//           <Mainbox />
//         </div>
//       </div>
//     );
//   };
  

// export default Home;

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Mainbox from "../components/Mainbox";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="flex w-full h-screen">
      <div></div>
      <button className="sm:hidden absolute top-5 left-6 z-[100] text-white scale-125 h-fit w-fit p-2 rounded-full shadow-lg focus:outline-none transition-transform duration-300"
        onClick={() => setShowSidebar(!showSidebar)}
      >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
      </button>

      {showSidebar && (
        <div className="absolute z-50 sm:static w-64 sm:h-full shadow-lg">
          <Sidebar />
        </div>
      )}
      {/* Main Content */}
      <div className={`flex flex-col w-full h-full`}>
        <Navbar />
        <Mainbox />
      </div>
    </div>
  );
};

export default Home;


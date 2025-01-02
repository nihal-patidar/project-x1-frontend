import React, { useContext, useState } from 'react';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faCog, faEnvelope, faSignOutAlt, faSuitcase , faServer, faAdd, faTicket ,} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../context/UserContext';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const {userData} = useContext(UserContext);


  const logout = ()=> {
    localStorage.removeItem('userData');
    navigate('/');
  }

  const sidebarItems = [
    { id: 0, name: 'Dashboard', path: '/home', icon: faTachometerAlt },
    { id: 1, name: 'Services', path: '/home/services', icon: faServer },
    { id: 3, name: 'Add Service', path: '/home/create-service', icon: faAdd},
    { id: 2, name: 'Validator', path: '/home/validators', icon: faTicket },
    { id: 4, name: 'Add Validator', path: '/home/create-validator-form', icon: faAdd},
    { id: 5, name: 'Logout', path: '/', icon: faSignOutAlt ,click : logout},
  ];

  const handleItemClick = (id) => {
    setActiveIndex(id);
  };
  

  return (
    <div className="flex flex-col h-full w-60 sm:w-80 bg-[#d73939d6] sm:bg-transparent text-white p-4">
    
      <h2 className="hidden sm:block font-bold text-2xl text-[#26bc82] w-full pl-12 py-4 border-b-2 border-green-300">E-Validation</h2>
      <ul className="flex-grow mt-10 sm:mt-0 font-semibold">
        {sidebarItems.map((item) => (
          <li key={item.id} className='py-1' onClick={item.click}>
            <Link
              to={item.path}
              className={`flex items-center py-2 px-4 transition-colors duration-300 rounded-md 
                ${activeIndex === item.id ? 'bg-teal-500' : 'hover:bg-[#3a3551f4] hover:scale-95'}`}
              onClick={() => handleItemClick(item.id)}
              aria-current={activeIndex === item.id ? 'page' : undefined}
            >
              <FontAwesomeIcon icon={item.icon} className="mr-2" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
       <ProfileCard></ProfileCard>
      
    </div>
  );
};

const ProfileCard = () => {
  const {userData} = useContext(UserContext);
  return (
    <div className="mt-auto p-4 w-full max-w-xs border-2 border-yellow-600 bg-transparent  rounded-lg shadow-2xl text-center transform transition-transform duration-300 ease-in-out">
      {/* Profile Picture with Glow Effect */}
      <div className="relative w-20 h-20 mx-auto mb-2 overflow-hidden rounded-full border-4 border-teal-400 shadow-lg hover:shadow-teal-500/50 hover:scale-110 transition-transform duration-300 ease-in-out">
        <img
          src={userData?.image}// Replace with your actual image URL
          alt="Profile"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60" />
      </div>

      {/* User Name and ID */}
      {/* <h3 className="text-lg font-bold text-gray-100">{userData.name}</h3> */}
      <p className="text-xs text-gray-400 mt-1 font-semibold">{userData?.email}</p>

      {/* View Profile Button with Gradient */}
      <div className="flex justify-center mt-2">
      <Link to="/home/profile">
        <button className="px-4 py-1 text-xs bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-full shadow-md hover:from-teal-500 hover:to-teal-700 hover:shadow-lg transition-all duration-300 ease-in-out">
          View Profile
        </button>
        </Link>
      </div>
    </div>
  );
};



export default Sidebar;

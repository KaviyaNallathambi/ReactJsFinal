import React from 'react';
import man from './images/man.jpg'; 

const Sidebar = () => {
  return (
    <div className="text-white ">
      <img 
        src={man}
        alt="Profile" 
        className="rounded-circle"style={{width:'80px', height:'80px'}} 
      />
      <p>D.O.C: <strong>28.04.2023</strong></p>
      <p><u>Status:</u> <u>Complete</u></p> 
      <button className="btn btn-light btn-sm mt-3">Back Home</button>
    </div>
  );
};

export default Sidebar;

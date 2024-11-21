import React from 'react';
import './home.css'; // Ensure this file is linked correctly

const Navbar = () => {
  return (
    <div className="d-flex justify-content-around">
      <button className="btn btn-primary custom-btn-size">ADD Beneficiaries</button>
      <button className="btn btn-primary custom-btn-size">ADD Asset</button>
      <button className="btn btn-primary custom-btn-size">ADD Liability</button>
      <button className="btn btn-primary custom-btn-size">CREATE Links</button>
      <button className="btn btn-primary custom-btn-size">ADD Signatures</button>
      <button className="btn btn-primary custom-btn-size">Will Generation</button>
    </div>
  );
};

export default Navbar;

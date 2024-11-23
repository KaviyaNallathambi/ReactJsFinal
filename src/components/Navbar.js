import React from 'react';
import './home.css'; // Ensure this file is linked correctly

const Navbar = () => {
  return (
    <div className="d-flex justify-content-around">
      <button className="btn btn-primary" style={{ padding: '5px 10px', margin: '0' }}>ADD Beneficiaries</button>
      <button className="btn btn-primary" style={{ padding: '5px 10px', margin: '0' }}>ADD Asset</button>
      <button className="btn btn-primary" style={{ padding: '5px 10px', margin: '0' }}>ADD Liability</button>
      <button className="btn btn-primary" style={{ padding: '5px 10px', margin: '0' }}>CREATE Links</button>
      <button className="btn btn-primary" style={{ padding: '5px 10px', margin: '0' }}>ADD Signatures</button>
      <button className="btn btn-primary" style={{ padding: '5px 10px', margin: '0' }}>Will Generation</button>
    </div>
  );
};

export default Navbar;

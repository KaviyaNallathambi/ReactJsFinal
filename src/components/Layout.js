import React from 'react';
import Sidebar from './Slidebar'; 
import Navbar from './Navbar';
import BeneficiaryTable from './BeneficiaryTable';
import BeneficiaryForm from './BeneficiaryForm';
import './home.css';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 col-sm-4 col-12" style={{ backgroundColor: '#003366' }}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-10 col-sm-8 col-12">
          {/* Navbar */}
          <Navbar />

          {/* Main Content Area */}
          <div className="container mt-3 mb-4">
            <div className="row">
              <div className="col-md-12 pb-0">
                {/* Beneficiary Table */}
                <BeneficiaryTable />
              </div>
            </div>

            <div className="row mt-0">
              <div className="col-md-12">
                {/* Beneficiary Form */}
                <BeneficiaryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

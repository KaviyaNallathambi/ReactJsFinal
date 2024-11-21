import React, { useState } from 'react';
import './home.css'; // Ensure this CSS file is properly linked

const BeneficiaryForm = () => {
  const [form, setForm] = useState({
    id: 3,
    name: 'Ramya',
    relationship: 'Sister',
    dob: '2005-07-14',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="mt-0">
      <h6>Add New Beneficiary</h6>
      <form>
        <div>
          <label className="small-font">S. No</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={form.id}
            disabled
          />
        </div>
        <div >
          <label className="small-font">First Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div >
          <label className="small-font">Relationship</label>
          <input
            type="text"
            className="form-control"
            name="relationship"
            value={form.relationship}
            onChange={handleChange}
          />
        </div>
        <div >
          <label className="small-font">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={form.dob}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Beneficiary</button>
      </form>
    </div>
  );
};

export default BeneficiaryForm;

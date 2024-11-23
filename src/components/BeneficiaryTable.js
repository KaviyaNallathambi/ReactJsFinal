import React from 'react';
const BeneficiaryTable = () => {
  const beneficiaries = [
    { id: 1, name: 'Vaishnavi', relationship: 'Sister', dob: '1988-10-04', status: 'Active' },
    { id: 2, name: 'Vaishnavi', relationship: 'Sister', dob: '1988-10-04', status: 'Inactive' },
    { id: 3, name: 'Ramya', relationship: 'Sister', dob: '2005-07-14', status: 'Active' },
  ];

  return (
    <div className="table-responsive mt-3 mb-3">
      
      <table className="table table-bordered bg-gray">
        <thead className="bg-light">
          <tr>
            <th>S. No</th>
            <th>Name</th>
            <th>Relationship</th>
            <th>Date of Birth</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {beneficiaries.map((b, index) => (
            <tr key={index}>
              <td>{b.id}</td>
              <td>{b.name}</td>
              <td>{b.relationship}</td>
              <td>{b.dob}</td>
              <td>
                <span className={b.status === 'Active' ? 'text-success' : 'text-danger'}>
                  {b.status}
                </span>
              </td>
              <td>
                <button className="btn btn-sm btn-warning mx-1">Edit</button>
                <button className="btn btn-sm btn-danger mx-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BeneficiaryTable;

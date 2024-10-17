import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const EmployeeView = () => {
  const { state } = useLocation();
  const [employee, setEmployee] = useState(state?.employee);

  useEffect(() => {
    setEmployee(state?.employee);
  }, [state]);
 
  if (!employee) {
    return <div>No employee data available</div>;
  }

  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>{employee.name}</h2>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
      <p><strong>Message:</strong> {employee.message}</p>
    </div>
  );
};

export default EmployeeView;

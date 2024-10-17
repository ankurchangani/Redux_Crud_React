import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt, FaEdit, FaEye } from 'react-icons/fa';
import { deleteEmployee } from '../../services/Action/Action';
import { useNavigate } from 'react-router-dom';


const ViewData = () => {
    const { employees, loading } = useSelector(state => state.reduceremployee);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        dispatch(deleteEmployee(id));
    };

    const handleEdit = (employee) => {
        navigate(`/Updatedata/${employee.id}`, { state: { employee } });
    };

    const handleView = (employee) => {
        navigate(`/employeeView/${employee.id}`, { state: { employee } });
    };

    if (loading) {
        
        return  <div className="loader "></div>
    }

    return (
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold text-center mb-4'>Employee Data</h2>
            <table className='min-w-full bg-white border border-gray-300'>
                <thead className='bg-blue-600 text-white'>
                    <tr>
                        <th className='py-2 px-4 border-b'></th>
                        <th className='py-2 px-4 border-b'>Employee Name</th>
                        <th className='py-2 px-4 border-b'>Email</th>
                        <th className='py-2 px-4 border-b'>Phone Number</th>
                        <th className='py-2 px-4 border-b'>Message</th>
                        <th className='py-2 px-4 border-b'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={employee.id} className='hover:bg-blue-100'>
                            <td className='py-2 px-4 border-b'>{index + 1}</td>
                            <td className='py-2 px-4 border-b'>{employee.name}</td>
                            <td className='py-2 px-4 border-b'>{employee.email}</td>
                            <td className='py-2 px-4 border-b'>{employee.phone}</td>
                            <td className='py-2 px-4 border-b'>{employee.message}</td>
                            <td className='py-2 px-4 border-b flex space-x-2'>
                                <button className='bg-blue-500 p-2 text-white rounded hover:bg-blue-600' onClick={() => handleView(employee)}>
                                    <FaEye />
                                </button>
                                <button className='bg-yellow-500 p-2 text-white rounded hover:bg-yellow-600' onClick={() => handleEdit(employee)}>
                                    <FaEdit />
                                </button>
                                <button className='bg-red-500 p-2 text-white rounded hover:bg-red-600' onClick={() => handleDelete(employee.id)}>
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewData;

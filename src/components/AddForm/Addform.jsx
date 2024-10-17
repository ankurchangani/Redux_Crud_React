import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { async } from '../../services/Action/Action';
import { useNavigate } from 'react-router-dom';

const EmployeeForm = () => {
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const dispatch = useDispatch();

    const navigate = useNavigate() ;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form with data:", formInput);

       
    dispatch(async(formInput));

        navigate('/view-data');

        setFormInput({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };
    

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-200 to-green-500">
            <form
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Employee Form</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">Employee Name</label>
                    <input
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-green-500 transition duration-200"
                        type="text"
                        id="name"
                        name="name"
                        value={formInput.name}
                        onChange={handleChange}
                        placeholder="Enter employee name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email</label>
                    <input
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-green-500 transition duration-200"
                        type="email"
                        id="email"
                        name="email"
                        value={formInput.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">Phone Number</label>
                    <input
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-green-500 transition duration-200"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formInput.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">Message</label>
                    <textarea
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-green-500 transition duration-200"
                        id="message"
                        name="message"
                        value={formInput.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EmployeeForm;
 
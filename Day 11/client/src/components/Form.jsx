import React from 'react'
import { useState } from 'react';

const Form = () => {

     const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      age: formData.age,
    };

    setUsers([...users, newUser]);

    // Clear the form
    setFormData({
      name: "",
      email: "",
      age: "",
    });
  };
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-6">
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        User Registration
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="md:col-span-3 flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition duration-300"
          >
            Add User
          </button>
        </div>
      </form>

      {/* Users List */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Users List
        </h2>

        {users.length === 0 ? (
          <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-500">
            No users added yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white text-indigo-600 rounded-full text-2xl font-bold mx-auto mb-4">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <h3 className="text-2xl font-bold text-center">
                  {user.name}
                </h3>

                <div className="mt-4 space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">📧 Email:</span>{" "}
                    {user.email}
                  </p>

                  <p>
                    <span className="font-semibold">🎂 Age:</span>{" "}
                    {user.age}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);
    
    </>
  )
}

export default Form

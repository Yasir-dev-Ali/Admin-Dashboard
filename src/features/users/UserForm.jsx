// components/UserForm.jsx
import { useState, useEffect } from 'react';

export default function UserForm({ onSubmit, selectedUser }) {
    const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', id: null });

    useEffect(() => {
        if (selectedUser) {
            setForm(selectedUser);
        } else {
            setForm({ name: '', email: '', phone: '', role: '', id: null });
        }
    }, [selectedUser]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name && form.email && form.phone && form.role) {
            onSubmit(form);
            setForm({ name: '', email: '', phone: '', role: '', id: null });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h3 className="text-2xl font-semibold text-gray-700">{form.id ? 'Edit User' : 'Add New User'}</h3>

            <div className="space-y-4 ">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone</label>
                    <input
                        id="phone"
                        type="text"
                        name="phone"
                        placeholder="123-456-7890"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-600">Role</label>
                    <input
                        id="role"
                        type="text"
                        name="role"
                        placeholder="Admin / User"
                        value={form.role}
                        onChange={handleChange}
                        className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
                {form.id ? 'Update User' : 'Add User'}
            </button>
        </form>
    );
}

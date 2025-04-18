import { useSelector, useDispatch } from 'react-redux';
import { addUser, editUser, deleteUser } from '../../features/users/UsersSlice';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../Users/user.css';

export default function Users() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', id: null });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, role } = form;

        // Validation
        if (!name || !email || !phone || !role) {
            alert('Please fill in all fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (form.id) {
            dispatch(editUser(form));
        } else {
            dispatch(addUser({ ...form, id: uuidv4() }));
        }

        setForm({ name: '', email: '', phone: '', role: '', id: null });
    };

    const handleEdit = (user) => setForm(user);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6">
                <h2 className="text-3xl font-bold mb-6 text-blue-700">User Management</h2>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                >
                    {['name', 'email', 'phone', 'role'].map((field) => (
                        <input
                            key={field}
                            type={field === 'email' ? 'email' : 'text'}
                            name={field}
                            placeholder={`Enter ${field}`}
                            required
                            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                            value={form[field]}
                            onChange={handleChange}
                        />
                    ))}

                    <button
                        type="submit"
                        className="addbtn col-span-1 md:col-span-2 lg:col-span-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition"
                    >
                        {form.id ? 'Update User' : 'Add User'}
                    </button>
                </form>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead>
                            <tr className="bg-blue-50 text-blue-700">
                                <th className="px-6 py-3 border">Name</th>
                                <th className="px-6 py-3 border">Email</th>
                                <th className="px-6 py-3 border">Phone</th>
                                <th className="px-6 py-3 border">Role</th>
                                <th className="px-6 py-3 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr
                                    key={user.id}
                                    className="bg-white hover:bg-gray-50 transition border-t text-gray-700"
                                >
                                    <td className="px-6 py-3 border">{user.name}</td>
                                    <td className="px-6 py-3 border">{user.email}</td>
                                    <td className="px-6 py-3 border">{user.phone}</td>
                                    <td className="px-6 py-3 border">{user.role}</td>
                                    <td className="px-6 py-3 border flex flex-wrap gap-2">
                                        <button
                                            onClick={() => handleEdit(user)}
                                            className="btn bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md transition"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => dispatch(deleteUser(user.id))}
                                            className="deletbtn bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

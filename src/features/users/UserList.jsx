// components/UserList.jsx
export default function UserList({ users, onEdit, onDelete }) {
    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full text-sm text-left text-gray-500">
                <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
                    <tr>
                        <th className="py-3 px-4">Name</th>
                        <th className="py-3 px-4">Email</th>
                        <th className="py-3 px-4">Phone</th>
                        <th className="py-3 px-4">Role</th>
                        <th className="py-3 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="py-4 px-4">{user.name}</td>
                            <td className="py-4 px-4">{user.email}</td>
                            <td className="py-4 px-4">{user.phone}</td>
                            <td className="py-4 px-4">{user.role}</td>
                            <td className="py-4 px-4 space-x-3">
                                <button
                                    onClick={() => onEdit(user)}
                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(user.id)}
                                    className="text-red-600 hover:text-red-800 font-medium"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

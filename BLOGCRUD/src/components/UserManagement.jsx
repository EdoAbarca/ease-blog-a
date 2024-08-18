import React, { useEffect, useState } from 'react';

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from backend
        fetch('/api/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Usuarios Registrados</h2>
            {users.map(user => (
                <div key={user.id} className="mb-4 p-4 border rounded">
                    <h3 className="text-lg font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    {/* Add functionality to manage user roles */}
                </div>
            ))}
        </div>
    );
};

export default UserManagement;

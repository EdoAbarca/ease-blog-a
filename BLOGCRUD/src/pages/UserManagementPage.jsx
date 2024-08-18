import React from 'react';
import UserManagement from '../components/UserManagement';

const UserManagementPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Gestión de Usuarios</h1>
            <UserManagement />
        </div>
    );
};

export default UserManagementPage;

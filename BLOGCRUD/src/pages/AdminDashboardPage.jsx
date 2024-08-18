import React from 'react';
import AdminDashboard from '../components/AdminDashboard';

const AdminDashboardPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
            <AdminDashboard />
        </div>
    );
};

export default AdminDashboardPage;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import EditPostPage from './pages/EditPostPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import UserManagementPage from './pages/UserManagementPage';
import NotFoundPage from './pages/NotFoundPage'; // Nueva página para manejar 404

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/edit-post/:id" element={<EditPostPage />} />
                <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
                <Route path="/user-management" element={<UserManagementPage />} />
                <Route path="*" element={<NotFoundPage />} /> {/* Ruta para manejar 404 */}
            </Routes>
        </Router>
    );
};

export default App;

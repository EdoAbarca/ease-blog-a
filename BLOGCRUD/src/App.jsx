import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import EditPostPage from './pages/EditPostPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import UserManagementPage from './pages/UserManagementPage';
import Forbidden from './pages/Forbidden';
import NotFound from './pages/NotFound';
import ArticlePage from './pages/ArticlePage';

import { AuthProvider } from './auth/AuthContext';
import { ProtectedRoute } from './auth/ProtectedRoute';


const App = () => {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/post/:id" element={
						<ProtectedRoute>
							<ArticlePage />
						</ProtectedRoute>
					} />
					<Route path="/edit-post/:id" element={
						<ProtectedRoute allowedRoles={['editor','admin']}>
							<EditPostPage />
						</ProtectedRoute>
					} />
					<Route path="/admin-dashboard" element={
						<ProtectedRoute allowedRoles={['admin']}>
							<AdminDashboardPage />
						</ProtectedRoute>
					} />
					<Route path="/user-management" element={
						<ProtectedRoute allowedRoles={['admin']}>
							<UserManagementPage />
						</ProtectedRoute>
					} />
					<Route path="/403" element={<Forbidden />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</AuthProvider>
	);
};

export default App;

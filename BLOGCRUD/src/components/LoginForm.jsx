import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { useNavigate, useHistory } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { username, password });
            login(response.data.token);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const handleGoBack = () => {
        history.goBack();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Correo Electrónico</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
            />
            <label htmlFor="password" className="block text-sm font-medium mb-2">Contraseña</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
            />
            <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded"
            >
                Iniciar Sesión
            </button>
            <button
                type="button"
                onClick={handleGoBack}
                className="w-full py-2 bg-gray-500 text-white rounded mt-4"
            >
                Volver
            </button>
        </form>
    );
};

export default LoginForm;

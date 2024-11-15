"use client"

import React, { useState } from 'react';
import { login } from '../../service/authService';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      localStorage.setItem('token', response.token);
      router.push('/');
    } catch (err) {
      setError(`Error al iniciar sesión. Error: ${err}`);
    }
  };

  return (
    <div className='mx-2 my-24 items-center justify-items-center'>
      <div className='p-4 border rounded-lg text-center'>
        <h1 className='mb-4 text-xl text-green-700'>Iniciar sesión</h1>
        <form onSubmit={handleLogin}>
          <div className='flex flex-col justify-end'>
            <label>Usuario: </label>
            <input
              className='ml-3 mb-4 border border-gray-300 rounded-lg'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='flex flex-col justify-end'>
            <label>Contraseña: </label>
            <input
              className='ml-3 mb-4 border border-gray-300 rounded-lg'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p>{error}</p>}
          <button 
            className='mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
            type="submit"
          >
              Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
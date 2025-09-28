'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import '../auth.css';
import { routerServerGlobal } from 'next/dist/server/lib/router-utils/router-server-context';

export default function SignupPage()
{
    const router = useRouter();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('https://tp2-backend-htarb0a8gqazcmfh.eastus2-01.azurewebsites.net/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                     name: formData.name,
                     email: formData.email,
                     password: formData.password
                 })
            });
            if (!response.ok) { 
                const data = await response.json();
                throw new Error(data.message || 'Error en el registro');
            }
            const data = await response.json();
            router.push('/login');
            
        } catch (error) {
            setError(error.message);
        }
        finally {
            setIsLoading(false);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }



    return (
    <div className="auth-container">
      <div className="auth-card">
        <div>
          <h2 className="auth-title">
            Crear una cuenta
          </h2>
        </div>
        
        {error && (
          <div className="error-alert" role="alert">
            <span>{error}</span>
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div>
              <label htmlFor="user" className="sr-only">Nombre de usuario</label>
              <input
                id="user"
                name="name"
                type="text"
                required
                className="input-field top"
                placeholder="Nombre de usuario"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input-field middle"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="input-field bottom"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? 'Registrando...' : 'Registrarse'}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <a href="/auth/login" className="link">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </div>
    );
}

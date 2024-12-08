'use client';
import React, { useState } from 'react';
import './landing.scss';
import Login from './auth/Login';
import Register from './auth/Register';

export default function Home() {
  const [view, setView] = useState('home');

  return (
    <div>
      {view === 'home' && (
        <>
          <h1>Home</h1>
          <button onClick={() => setView('login')}>Login</button>
          <button onClick={() => setView('register')}>Register</button>
        </>
      )}
      {view === 'login' && <Login />}
      {view === 'register' && <Register />}
    </div>
  );
}

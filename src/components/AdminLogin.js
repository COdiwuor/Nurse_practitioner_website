import React, { useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AdminLogin = ({ auth, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const isLoggedIn = auth?.currentUser && !auth.currentUser.isAnonymous;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLoginSuccess?.();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (isLoggedIn) {
    return (
      <div>
        <p>Logged in as {auth.currentUser.email}</p>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: 360, margin: '4rem auto' }}>
      <h2>Admin Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLogin;
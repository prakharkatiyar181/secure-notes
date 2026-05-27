import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/authSlice';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <form onSubmit={onSubmit} noValidate style={{ marginTop: '8px' }}>
      {error && <div className="alert alert-error">{error}</div>}
      
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          autoFocus
          value={email}
          onChange={onChange}
          className="input-field"
          placeholder="email@example.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={onChange}
          className="input-field"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-fullWidth"
        style={{ marginTop: '24px', marginBottom: '12px' }}
        disabled={loading}
      >
        {loading ? <div className="spinner"></div> : 'Login'}
      </button>

      <button 
        type="button" 
        className="link-center" 
        onClick={(e) => e.preventDefault()}
        style={{ border: 'none', background: 'transparent', cursor: 'pointer', width: '100%', fontInherit: 'true' }}
      >
        Forgot password?
      </button>
    </form>
  );
};

export default Login;

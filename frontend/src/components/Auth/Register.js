import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/slices/authSlice';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
  });
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const { email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setMessage('Passwords do not match');
    } else {
      setMessage('');
      dispatch(register({ email, password }));
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate style={{ marginTop: '8px' }}>
      {(message || error) && (
        <div className="alert alert-error">
          {message || error}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
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
          value={password}
          onChange={onChange}
          className="input-field"
          placeholder="••••••••"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password2" className="form-label">Confirm Password</label>
        <input
          type="password"
          id="password2"
          name="password2"
          required
          value={password2}
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
        {loading ? <div className="spinner"></div> : 'Register'}
      </button>
    </form>
  );
};

export default Register;

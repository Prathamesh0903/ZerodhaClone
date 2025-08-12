import React, { useState } from 'react';
import { auth } from '../../firebase/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

const Signup = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });
  const [passwordErrors, setPasswordErrors] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false
  });
  const [submitted, setSubmitted] = useState(false);

  const validatePassword = (password) => {
    const errors = {
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    setPasswordErrors(errors);
    return Object.values(errors).every(Boolean);
  };

  const handleToggle = () => {
    setIsRegister(!isRegister);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      password: ''
    });
    setSubmitted(false);
    setPasswordErrors({
      length: false,
      upper: false,
      lower: false,
      number: false,
      special: false
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate password in real-time
    if (name === 'password' && isRegister) {
      validatePassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegister) {
        // Validate password before registration
        if (!validatePassword(formData.password)) {
          alert('Password does not meet requirements');
          return;
        }

        // Firebase Register
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        setSubmitted(true);
      } else {
        // Firebase Login
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;

        // Store info if needed
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect to dashboard
        window.location.href = 'http://localhost:3001/';
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-3">
          {isRegister ? 'Register on Zerodha' : 'Login to Zerodha'}
        </h2>

        <div className="text-center mb-3">
          <button className="btn btn-outline-primary me-2" onClick={() => setIsRegister(true)} disabled={isRegister}>
            Register
          </button>
          <button className="btn btn-outline-secondary" onClick={() => setIsRegister(false)} disabled={!isRegister}>
            Login
          </button>
        </div>

        {submitted && (
          <div className="alert alert-success" role="alert">
            Registered successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{10}"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            {isRegister && (
              <div className="mt-2">
                <small className="text-muted">Password must contain:</small>
                <ul className="list-unstyled">
                  <li className={passwordErrors.length ? 'text-success' : 'text-danger'}>
                    {passwordErrors.length ? '✓' : '✗'} At least 8 characters
                  </li>
                  <li className={passwordErrors.upper ? 'text-success' : 'text-danger'}>
                    {passwordErrors.upper ? '✓' : '✗'} At least one uppercase letter
                  </li>
                  <li className={passwordErrors.lower ? 'text-success' : 'text-danger'}>
                    {passwordErrors.lower ? '✓' : '✗'} At least one lowercase letter
                  </li>
                  <li className={passwordErrors.number ? 'text-success' : 'text-danger'}>
                    {passwordErrors.number ? '✓' : '✗'} At least one number
                  </li>
                  <li className={passwordErrors.special ? 'text-success' : 'text-danger'}>
                    {passwordErrors.special ? '✓' : '✗'} At least one special character
                  </li>
                </ul>
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button className="btn btn-link p-0" onClick={handleToggle}>
              {isRegister ? 'Login' : 'Register'}
            </button>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Signup;
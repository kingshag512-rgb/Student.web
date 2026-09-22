import { useState } from "react";
import './LOgin.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // Backend API yahan connect hogi
  };

  return (
    <div className="login-page">

      {/* Login Header */}
      <div className="login-header">
        <h1>Student Login</h1>

        <p>
          Login to access your student admission portal.
        </p>
      </div>

      {/* Login Form */}
      <div className="login-container">

        <div className="login-box">

          <h2>Welcome Back!</h2>

          <p className="login-description">
            Please enter your account details to continue.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Remember Me */}
            <div className="login-options">

              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <a href="/forgot-password">
                Forgot Password?
              </a>

            </div>

            {/* Login Button */}
            <button type="submit" className="login-button">
              Login
            </button>

          </form>

          {/* Register */}
          <div className="register-link">
            <p>
              Don't have an account?
              <a href="/register"> Create Account</a>
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
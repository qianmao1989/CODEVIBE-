import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5002/api/auth/forgot-password", {
        Email: email,
      });
      setResponseMsg(res.data.message);
    } catch (err) {
      setResponseMsg(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>

        <div style={{ width: "100%" }}>
          <label htmlFor="email">EMAIL:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            aria-label="Email address"
          />
        </div>

        <button type="submit" style={{ width: "100%" }}>
          Send OTP
        </button>

        {responseMsg && (
          <p style={{ color: "white", textAlign: "center", margin: "0.5rem 0" }}>
            {responseMsg}
          </p>
        )}

        <p style={{ textAlign: "center", fontSize: "0.9rem" }}>
          Back to <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;

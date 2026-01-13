import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="container">
      <form>
        <h1>Login</h1>

        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" className="btn">
          Log in
        </button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register Here!</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;

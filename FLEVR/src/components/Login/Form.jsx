import React, { useState } from "react";
import "./Form.css";
import Grid from "./Grid";

const Form = () => {
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isRegister ? "Register" : "Login");
  };

  return (
    <div className="page">
      {/* LEFT FORM */}
      <div className="form-box">
        <h2>{isRegister ? "Register" : "Login"}</h2>

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <input type="text" placeholder="Username" required />
          )}

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <p>
          {isRegister ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? " Login" : " Register"}
          </span>
        </p>
      </div>

      {/* RIGHT FIXED GRID */}
      <Grid />
    </div>
  );
};

export default Form;

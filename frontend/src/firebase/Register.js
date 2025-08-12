import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [requirements, setRequirements] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false
  });

  const validatePassword = (pass) => {
    const newRequirements = {
      length: pass.length >= 8,
      upper: /[A-Z]/.test(pass),
      lower: /[a-z]/.test(pass),
      number: /\d/.test(pass),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pass)
    };
    setRequirements(newRequirements);
    
    if (!newRequirements.length) return "Password must be at least 8 characters";
    if (!newRequirements.upper) return "Password must contain at least one uppercase letter";
    if (!newRequirements.lower) return "Password must contain at least one lowercase letter";
    if (!newRequirements.number) return "Password must contain at least one number";
    if (!newRequirements.special) return "Password must contain at least one special character";
    
    return "";
  };

  const handlePasswordChange = (e) => {
    const pass = e.target.value;
    setPassword(pass);
    setPasswordError(validatePassword(pass));
  };

  const register = async () => {
    const error = validatePassword(password);
    if (error) {
      setPasswordError(error);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registered successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Register</h2>
      <div style={{ marginBottom: "10px" }}>
        <input 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input 
          placeholder="Password" 
          type="password" 
          onChange={handlePasswordChange}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>
      
      {passwordError && <div style={{ color: "red", marginBottom: "10px" }}>{passwordError}</div>}
      
      <div style={{ marginBottom: "15px" }}>
        <h4>Password Requirements:</h4>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ color: requirements.length ? "green" : "red" }}>
            {requirements.length ? "✓" : "✗"} At least 8 characters
          </li>
          <li style={{ color: requirements.upper ? "green" : "red" }}>
            {requirements.upper ? "✓" : "✗"} At least one uppercase letter
          </li>
          <li style={{ color: requirements.lower ? "green" : "red" }}>
            {requirements.lower ? "✓" : "✗"} At least one lowercase letter
          </li>
          <li style={{ color: requirements.number ? "green" : "red" }}>
            {requirements.number ? "✓" : "✗"} At least one number
          </li>
          <li style={{ color: requirements.special ? "green" : "red" }}>
            {requirements.special ? "✓" : "✗"} At least one special character
          </li>
        </ul>
      </div>
      
      <button 
        onClick={register}
        style={{
          padding: "8px 16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Register
      </button>
    </div>
  );
}
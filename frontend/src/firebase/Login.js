import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Login</h2>
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
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>
      <button 
        onClick={login}
        style={{
          padding: "8px 16px",
          backgroundColor: "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Login
      </button>
    </div>
  );
}
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const logout = () => signOut(auth);

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.email}</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
}

export default App;

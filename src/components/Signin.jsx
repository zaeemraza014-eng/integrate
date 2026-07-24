import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("login", "true");
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h1>Sign In</h1>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button onClick={handleLogin}>
        Sign In
      </button>
    </div>
  );
}

export default SignIn;
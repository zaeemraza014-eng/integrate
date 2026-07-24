import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="container">
      <h1>Sign Up</h1>

      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Sign Up</button>

      <p>
        Already have an account?
        <Link to="/signin"> Sign In</Link>
      </p>
    </div>
  );
}

export default SignUp;
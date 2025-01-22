import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div>
      <h3>Sign In</h3>
      <input placeholder="username" />
      <br />
      <input placeholder="password" />
      <br />
      <Link to="/Kambaz/Dashboard">Sign In</Link> |{" "}
      <Link to="/Kambaz/Account/Signup">Sign Up</Link>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <h3>Sign Up</h3>
      <input placeholder="username" />
      <br />
      <input placeholder="password" />
      <br />
      <input placeholder="confirm password" />
      <br />
      <Link to="/Kambaz/Account/Signin">Sign In</Link> |{" "}
      <Link to="/Kambaz/Account/Profile">Sign Up</Link>
    </div>
  );
}

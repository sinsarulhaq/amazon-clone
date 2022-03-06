import React, { useEffect, useState } from "react";
import AmazonLogo from "../../Amazon_Logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginInitiate } from "../../redux/action";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const signIn = (e) => {
    dispatch(loginInitiate(email, password));
    setEmail("");
    setPassword("");
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to={"/"}>
        <img src={AmazonLogo} className="login-logo" alt="" />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login-signIn">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <p>New to Amazon ?</p>
      <Link to={"/register"}>
        <button className="login-register">Create Your Amazon Account</button>
      </Link>
    </div>
  );
}

export default Login;

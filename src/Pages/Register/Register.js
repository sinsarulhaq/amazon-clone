import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AmazonLogo from "../../Amazon_Logo.png";
import "./Register.css";
import { useSelector, useDispatch } from "react-redux";
import { registerInitiate } from "../../redux/action";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.data);
  console.log("state=>", user);

  useEffect(() => {
    if(user){
      navigate("/");
    }
    console.log("state=>", user);
  }, [navigate, user]);

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    dispatch(registerInitiate(email, password));
    setEmail("");
    setPassword("");
  };
  return (
    <div className="register">
      <Link to={"/"}>
        <img src={AmazonLogo} className="register-logo" alt="" />
      </Link>
      <div className="register-container">
        <h1>Create Account</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="continue" onClick={register}>
            Continue
          </button>
          <div className="detail">
            <p>Already have an account ? </p>
            <Link to={"/login"} className="sigin-link">
              <p> Sign In</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };

  if (googleUser) {
    navigate("/");
  }

  if (googleLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="login-container">
      <button onClick={handleSignInWithGoogle} className="btn-google">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
          alt=""
        />
        <span>Continue With Google</span>
      </button>
      <p>
        Dont't have an account? <Link to="/register">Create an account</Link>{" "}
      </p>
      <small className="text-danger">{googleError?.message}</small>
    </div>
  );
};

export default Login;

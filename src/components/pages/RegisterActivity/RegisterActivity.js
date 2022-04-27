import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import "./RegisterActivity.css";

const RegisterActivity = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [activity, setActivity] = useState({});

  useEffect(() => {
    const getActivity = async () => {
      const url = `http://localhost:5000/activity/${id}`;
      console.log(url);
      const { data } = await axios.get(url);
      setActivity(data);
    };
    getActivity();
  }, [id]);

  const handleRegister = async (event) => {
    event.preventDefault();
    const activityID = activity?._id;
    const activityName = activity?.name;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const description = event.target.description.value;
    const date = event.target.date.value;
    const registration = {
      activityID,
      activityName,
      name,
      email,
      description,
      date,
    };

    const { data } = await axios.post(
      "http://localhost:5000/register",
      registration
    );
    if (data.acknowledged === true) {
      toast("Your Registration is Complete!");
      event.target.reset();
    }
    console.log(data.acknowledged);
    // event.target.reset();
  };
  return (
    <div className="container">
      <div className="form-container">
        <h2 className="my-4">Register as a Volunteer</h2>
        <p>
          Activity Name: <strong>{activity?.name}</strong>
        </p>
        <form onSubmit={handleRegister}>
          <input
            className="input-field"
            type="text"
            name="name"
            value={user?.displayName}
            id="name"
            placeholder="Full Name"
            required
            readOnly
          />
          <input
            className="input-field"
            type="email"
            name="email"
            value={user?.email}
            id="email"
            placeholder="Email"
            required
            readOnly
          />
          <input
            className="input-field"
            type="text"
            name="description"
            id="description"
            placeholder="Why do you want to register?"
            required
          />
          <input
            className="input-field"
            type="date"
            name="date"
            id="date"
            placeholder="Date"
            required
          />
          <input className="input-submit" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default RegisterActivity;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Activity.css";

const Activity = ({ activity }) => {
  const navigate = useNavigate();
  const handleRegister = (id) => {
    navigate(`/registerActivity/${id}`);
  };
  return (
    <div onClick={() => handleRegister(activity._id)} className="activity-card">
      <img src={activity.img} alt="" />
      <div className="activity-info">
        <h4>{activity.name}</h4>
      </div>
    </div>
  );
};

export default Activity;

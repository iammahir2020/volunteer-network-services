import axios from "axios";
import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const getActivities = async () => {
      const { data } = await axios.get("http://localhost:5000/activity");
      setActivities(data);
    };
    getActivities();
  }, []);
  return (
    <div className="mb-5">
      <h2 className="home-heading">I grow by helping people in need.</h2>
      <div className="activities-container">
        {activities.map((activity) => (
          <Activity key={activity._id} activity={activity}></Activity>
        ))}
      </div>
    </div>
  );
};

export default Activities;

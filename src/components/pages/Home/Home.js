import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import "./Home.css";

const Home = () => {
  return (
    <div className="container home-container">
      <PageTitle title="Home"></PageTitle>
      <h2>This is home 1</h2>
      <h2>This is home 2</h2>
      <h2>This is home 3</h2>
    </div>
  );
};

export default Home;

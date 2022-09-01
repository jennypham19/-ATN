import React from "react";
import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <div class="container-fluid py-4" style={{ marginLeft: "120px" }}>
        <Header />
      </div>
    </div>
  );
};

export default Home;

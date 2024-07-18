import React from "react";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <div className="max-w-container mx-auto px-4">
        <NewArrivals />
        <NewArrivals />
        <NewArrivals />
      </div>
    </div>
  );
};

export default Home;

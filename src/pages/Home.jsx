// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { categories as categoryData } from '../fakedata';
import bgimage from "../assets/images/home-bg.png";

const categoryNames = Object.keys(categoryData);

const Home = () => (
  <div
    className="relative flex items-center justify-center h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${bgimage})` }}
  >
    {/* Dark overlay for contrast */}
    <div className="absolute inset-0 bg-opacity-30"></div>

    {/* Content card */}
    <div className="relative flex flex-col items-center  z-10 bg-[#F5E1B9] border-4 border-[#0e284b] h-[50vh] shadow-2xl p-6 w-12/12 max-w-md text-center">
      {/* Retro heading */}
      <h1
        className="text-5xl sm:text-4xl font-bold mb-4"
        style={{ fontFamily: "'Fredoka One', sans-serif", color: "#264653" }}
      >
        Ted Tracker
      </h1>

      {/* Nav links */}
      <div className=" relative flex flex-col space-y-3 top-[25px]">
        {categoryNames.map((cat) => (
          <Link
            key={cat}
            to={`/category/${encodeURIComponent(cat)}`}
            className="text-3xl font-medium"
            style={{ color: "#264653" }}
          >
            {cat}
          </Link>
        ))}
        <Link
          to="/education"
          className="text-3xl font-medium"
          style={ {color: "#264653"}}
        >
          Education
        </Link>
      </div>
    </div>
  </div>
);

export default Home;

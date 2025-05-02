// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../fakedata';
import bgimage from '../assets/images/modal-bg.png';

const CategoryPage = () => {
  const { category } = useParams();
  const items = categories[category] || [];

  return (
    <div
      className="relative flex flex-col pt-[50px] items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-30"></div>

      {/* Floating back button */}
      <Link
        to="/"
        className="relative z-10 mb-4  p-2 rounded border-4 border-[#264653] font-normal bg-[#264653] text-white"
        style={{  fontFamily: "'Fredoka One', sans-serif" }}
      >
        &larr; Back to Home
      </Link>

      {/* Card */}
      <div className="relative z-10 bg-[#F5E1B9] border-4 border-[#264653] rounded-2xl shadow-2xl w-11/12 max-w-lg h-[65vh] p-6 overflow-y-auto overflow-x-hidden">
        <h2
          className="text-3xl font-bold mb-4 text-center"
          style={{ color: '#264653', fontFamily: "'Fredoka One', sans-serif" }}
        >
          {category}
        </h2>

        {items.length === 0 ? (
          <p
            className="text-lg text-center"
            style={{ color: '#264653', fontFamily: "'Fredoka One', sans-serif" }}
          >
            No products found in this category.
          </p>
        ) : (
          <ul className="list-disc list-inside space-y-2 prose lg:prose-xl">
            {items.map(item => (
              <li key={item.id} className="pl-2">
                <Link
                  to={`/item/${item.id}`}
                  className="text-xl font-medium"
                  style={{ color: '#2A9D8F', fontFamily: "'Fredoka One', sans-serif" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;

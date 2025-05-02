// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../fakedata';
import bgimage from '../assets/images/modal-bg.png'; // ← your new background here

const CategoryPage = () => {
  const { category } = useParams();
  const items = categories[category] || [];

  return (
    <div
      className="relative flex flex-col items-center justify-start h-screen bg-cover bg-center overflow-auto"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-opacity-30"></div>

      {/* Content card */}
      <div className="relative z-10 mt-12 bg-[#F5E1B9] border-4 border-[#264653] rounded-2xl shadow-2xl p-6 w-11/12 max-w-lg text-center">
        <Link
          to="/"
          className="block text-lg font-medium mb-4"
          style={{
            color: '#264653',
            fontFamily: "'Fredoka One', sans-serif",
          }}
        >
          &larr; Back to Home
        </Link>

        <h2
          className="text-3xl font-bold mb-4"
          style={{
            color: '#264653',
            fontFamily: "'Fredoka One', sans-serif",
          }}
        >
          {category}
        </h2>

        {items.length === 0 ? (
          <p
            className="text-lg"
            style={{
              color: '#264653',
              fontFamily: "'Fredoka One', sans-serif",
            }}
          >
            No products found in this category.
          </p>
        ) : (
          <ul className="list-disc list-inside space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/item/${item.id}`}
                  className="text-xl font-medium"
                  style={{
                    color: '#2A9D8F',
                    fontFamily: "'Fredoka One', sans-serif",
                  }}
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

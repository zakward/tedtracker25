// src/pages/ItemPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories, purchases } from '../fakedata';
import bgimage from '../assets/images/modal-bg.png';

const formatDate = dateStr => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const ItemPage = () => {
  const { itemId } = useParams();
  const id = parseInt(itemId, 10);
  let product = null;
  let productCategory = '';

  for (const [cat, items] of Object.entries(categories)) {
    const found = items.find(i => i.id === id);
    if (found) {
      product = found;
      productCategory = cat;
      break;
    }
  }

  const records = purchases.filter(p => p.itemId === id);

  return (
    <div
      className="relative flex flex-col pt-[50px] items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-30"></div>

      {/* Floating back button */}
      <Link
        to={product ? `/category/${encodeURIComponent(productCategory)}` : '/'}
        className="relative z-10 mb-4 p-2 rounded border-4 border-[#264653] font-normal bg-[#264653] text-white"
        style={{ fontFamily: "'Fredoka One', sans-serif" }}
      >
        &larr; Back to {product ? productCategory : 'Home'}
      </Link>

      {/* Card */}
      <div className="relative z-10 bg-[#F5E1B9] border-4 border-[#264653] rounded-2xl shadow-2xl w-11/12 max-w-lg h-[65vh] p-6 overflow-y-auto text-left">
        {!product ? (
          <p
            className="text-center text-red-500"
            style={{ fontFamily: "'Fredoka One', sans-serif" }}
          >
            Product not found.
          </p>
        ) : (
          <>
            <h2
              className="text-3xl  mb-2"
              style={{ color: '#264653', fontFamily: "'Fredoka One', sans-serif" }}
            >
              {product.name}
            </h2>
            <p
              className="mb-1"
              style={{ color: '#264653', fontFamily: "'Fredoka One', sans-serif" }}
            >
              <strong>Grower:</strong> {product.grower}
            </p>
            <p
              className="mb-4"
              style={{ color: '#264653', fontFamily: "'Fredoka One', sans-serif" }}
            >
              <strong>Type:</strong> {product.strainType}
            </p>

            <h3
              className="text-2xl mb-3"
              style={{ color: '#264653', fontFamily: "'Fredoka One', sans-serif" }}
            >
              Purchase Records
            </h3>

            {records.length === 0 ? (
              <p
                style={{ color: '#264653', fontFamily: "'Fredoka One', sans-serif" }}
              >
                No purchases recorded for this item.
              </p>
            ) : (
              <div className="space-y-6">
                {records.map(rec => (
                  <div key={rec.id} className="space-y-2">
                    {/* Table wrapper with white background for contrast */}
                    <div className="overflow-x-auto mb-2 rounded-lg bg-white bg-opacity-90">
                      <table className="min-w-max w-full table-auto border-collapse">
                        <thead>
                          <tr>
                            {['Author','Date Purchased','Harvest Date','THC (%)','CBD (%)'].map(header => (
                              <th
                                key={header}
                                className="border px-3 py-2 font-normal bg-[#264653] text-white"
                                style={{ fontFamily: "'Fredoka One', sans-serif" }}
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="odd:bg-white even:bg-[#eef7f2]">
                            <td className="border px-3 py-2" style={{ color: '#264653', fontFamily: "'Fredoka One', sans-serif" }}>
                              {rec.author}
                            </td>
                            <td className="border px-3 py-2" style={{ color: '#264653', fontFamily: "'Fredoka One', sans-serif" }}>
                              {formatDate(rec.datePurchased)}
                            </td>
                            <td className="border px-3 py-2" style={{ color: '#264653', fontFamily: "'Fredoka One', sans-serif" }}>
                              {formatDate(rec.harvestDate)}
                            </td>
                            <td className="border px-3 py-2" style={{ color: '#264653', fontFamily: "'Fredoka One', sans-serif" }}>
                              {rec.thc}
                            </td>
                            <td className="border px-3 py-2" style={{ color: '#264653', fontFamily: "'Fredoka One', sans-serif" }}>
                              {rec.cbd}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Review */}
                    <div
                      className="italic px-3 py-2 bg-[#E0F4EF] rounded text-[#264653]"
                      style={{ fontFamily: "'Fredoka One', sans-serif" }}
                    >
                      “{rec.review}”
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ItemPage;

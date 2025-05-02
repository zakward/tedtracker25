// src/pages/ItemPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories, purchases } from '../fakedata';

const ItemPage = () => {
  const { itemId } = useParams();
  const id = parseInt(itemId, 10);

  // Find the item definition
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

  // Filter purchases for this item
  const records = purchases.filter(p => p.itemId === id);

  if (!product) {
    return (
      <div className="min-h-screen p-8">
        <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
          &larr; Back to Home
        </Link>
        <p className="text-red-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <Link to={`/category/${encodeURIComponent(productCategory)}`} className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to {productCategory}
      </Link>
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <p className="mb-2"><strong>Grower:</strong> {product.grower}</p>
      <p className="mb-6"><strong>Type:</strong> {product.strainType}</p>

      <h3 className="text-xl font-semibold mb-3">Purchase Records</h3>
      {records.length === 0 ? (
        <p>No purchases recorded for this item.</p>
      ) : (
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Author</th>
              <th className="border px-4 py-2">Date Purchased</th>
              <th className="border px-4 py-2">Harvest Date</th>
              <th className="border px-4 py-2">THC (%)</th>
              <th className="border px-4 py-2">CBD (%)</th>
            </tr>
          </thead>
          <tbody>
            {records.map(rec => (
              <tr key={rec.id}>
                <td className="border px-4 py-2">{rec.author}</td>
                <td className="border px-4 py-2">{rec.datePurchased}</td>
                <td className="border px-4 py-2">{rec.harvestDate}</td>
                <td className="border px-4 py-2">{rec.thc}</td>
                <td className="border px-4 py-2">{rec.cbd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ItemPage;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function CategoryPage() {
  const { title } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        // Using Fake Store API to fetch products by category
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${title.toLowerCase()}`
        );
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [title]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 capitalize">{title} Products</h2>

      {loading ? (
        <p className="text-gray-500">Loading products...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500">No products found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h3 className="font-semibold text-gray-800">{product.title}</h3>
              <p className="text-emerald-600 font-bold">₹{product.price}</p>
              <button
                onClick={() => navigate(`/product/${product.id}`)}
                className="mt-2 px-4 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700"
              >
                View Product
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { title: "men's clothing", display: "Men Clothing", query: "mens-shirts" },
  { title: "women's clothing", display: "Women Clothing", query: "womens-dresses" },
  { title: "jewelery", display: "Jewelery", query: "jewelery" },
];

function Categories() {
  const navigate = useNavigate();
  const [images, setImages] = useState({});

  useEffect(() => {
    categories.forEach(async (cat) => {
      try {
        const res = await fetch(`https://dummyjson.com/products/category/${cat.query}`);
        const data = await res.json();
        if (data.products && data.products.length > 0) {
          setImages((prev) => ({
            ...prev,
            [cat.title]: data.products[0].thumbnail,
          }));
        }
      } catch (err) {
        console.error("Image fetch error:", err);
      }
    });
  }, []);

  const handleCategoryClick = (title) => {
    navigate(`/category/${encodeURIComponent(title)}`);
  };

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
      {categories.map((cat, index) => (
        <div
          key={index}
          onClick={() => handleCategoryClick(cat.title)}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer group"
        >
          <img
            src={images[cat.title] || `https://picsum.photos/300?random=${index}`}
            alt={cat.display}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-2xl font-bold text-white">{cat.display}</p>
            <p className="text-sm text-emerald-300 mt-2">View All →</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;

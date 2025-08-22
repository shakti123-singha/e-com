import React from "react";
import { useNavigate } from "react-router-dom";
import men from "../assets/images/men.jpg";
import women from "../assets/images/women.jpg";
import kids2 from "../assets/images/kids2.jpg"; // will use for jewelery

const category = [
  { title: "men's clothing", display: "Men Clothing", imageUrl: men },
  { title: "women's clothing", display: "Women Clothing", imageUrl: women },
  { title: "jewelery", display: "Jewelery", imageUrl: kids2 },
];

function Categores() {
  const navigate = useNavigate();

  const handleCategoryClick = (title) => {
    navigate(`/category/${encodeURIComponent(title)}`);
  };

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
      {category.map((catego, index) => (
        <div
          key={index}
          onClick={() => handleCategoryClick(catego.title)}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer group"
        >
          <img
            src={catego.imageUrl}
            alt={catego.display}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-2xl font-bold text-white">{catego.display}</p>
            <p className="text-sm text-emerald-300 mt-2">View All →</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categores;

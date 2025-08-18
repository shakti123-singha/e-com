import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>

      {/* Rating */}
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
              <div>
            <span>+</span>
           <span>Add to cart</span> 
        </div>
    </div>
  );
};

export default ProductCard;

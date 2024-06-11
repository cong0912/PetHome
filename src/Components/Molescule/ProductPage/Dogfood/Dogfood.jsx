import React, { useState, useEffect } from "react";
import "./Dogfood.scss";
import { motion } from "framer-motion";
import petCover from "assets/images/pet-cover.webp";
import { Link } from "react-router-dom";
import ProductCard from "Components/Molescule/ProductCards/ProductCard";
import axios from "axios";
import MyAxios from "setup/configAxios";

function Dogfood() {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(18000);
  const [maxPrice, setMaxPrice] = useState(495000);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    MyAxios.get("http://localhost:5000/api/v1/products?type=product&name=food&species=dog")
      .then((response) => {
        setProducts(response.data); // Update state with the data array
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => product.price >= minPrice && product.price <= maxPrice);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="flex justify-center items-center flex-row space-x-4">
        <div>
          <motion.h1
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl text-[#222a63] font-bold"
          >
            PET HOME
          </motion.h1>
          <motion.h1
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl text-[#4c4c4c] font-bold "
          >
            thực phẩm cho chó
          </motion.h1>
        </div>
        <div>
          <img
            src={petCover}
            alt="Pet Cover"
            className="w-[50vw] hidden md:block"
          />
        </div>
      </div>
      <div className="product-page">
        <div className="filter-section">
          <h3>Lọc theo giá</h3>
          <input
            type="range"
            min="18000"
            max="495000"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          <input
            type="range"
            min="18000"
            max="495000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <button className="filter-button">Lọc</button>
          <p>
            Giá {minPrice.toLocaleString()} đ — {maxPrice.toLocaleString()} đ
          </p>
        </div>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <ProductCard
                status={product.status}
                img={product.image}
                content={product.name}
                forType={product.forType}
                price={`${product.price.toLocaleString()} đ`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dogfood;

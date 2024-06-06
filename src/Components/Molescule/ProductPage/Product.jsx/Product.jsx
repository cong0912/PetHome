import React, { useState, useEffect } from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
import ProductCard from "Components/Molescule/ProductCards/ProductCard";
import axios from "axios";

function Product() {
    const [products, setProducts] = useState([]);
    const [minPrice, setMinPrice] = useState(18000);
    const [maxPrice, setMaxPrice] = useState(495000);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/products?type=product")
            .then((response) => {
                setProducts(response.data.data); // Update state with the data array
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const filteredProducts = products.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <div className="cat-hero">
                {/* hero section */}
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

export default Product;

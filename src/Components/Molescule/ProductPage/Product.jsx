import React, { useState } from "react";
import "./Product.scss";
import ProductCard from "../ProductCards/ProductCard";

// API Fake
const products = [
    {
        status: "OUT OF STOCK",
        img: require("../../../assets/products/cho/thuc an/Banh cookie.png"), 
        content: "BÁNH COOKIE YẾN MẠCH CHO CHÓ | 200gr",
        forType: "Bánh thưởng",
        price: 80000,
    },
    {
        status: "OUT OF STOCK",
        img: require("../../../assets/products/cho/thuc an/Banh cookie.png"), 
        content: "BÁNH COOKIE YẾN MẠCH CHO CHÓ | 200gr",
        forType: "Bánh thưởng",
        price: 80000,
    },
    {
        status: "OUT OF STOCK",
        img: require("../../../assets/products/cho/thuc an/Banh cookie.png"), 
        content: "BÁNH COOKIE YẾN MẠCH CHO CHÓ | 200gr",
        forType: "Bánh thưởng",
        price: 80000,
    },
    {
        status: "In Stock",
        img: require("../../../assets/products/cho/thuc an/Banh cookie.png"), 
        content: "BÁNH COOKIE YẾN MẠCH CHO CHÓ | 200gr",
        forType: "Bánh thưởng",
        price: 80000,
    },
    {
        status: "In Stock",
        img: require("../../../assets/products/cho/thuc an/Banh cookie.png"), 
        content: "BÁNH COOKIE YẾN MẠCH CHO CHÓ | 200gr",
        forType: "Bánh thưởng",
        price: 80000,
    },
    {
        status: "In Stock",
        img: require("../../../assets/products/cho/thuc an/Banh cookie.png"), 
        content: "BÁNH COOKIE YẾN MẠCH CHO CHÓ | 200gr",
        forType: "Bánh thưởng",
        price: 80000,
    },
    {
        status: "OUT OF STOCK",
        img: require("../../../assets/products/cho/thuc an/Banh cookie.png"), 
        content: "BÁNH COOKIE YẾN MẠCH CHO CHÓ | 200gr",
        forType: "Bánh thưởng",
        price: 80000,
    },
    {
        status: "OUT OF STOCK",
        img: require("../../../assets/products/cho/thuc an/Banh cookie.png"), 
        content: "BÁNH COOKIE YẾN MẠCH CHO CHÓ | 200gr",
        forType: "Bánh thưởng",
        price: 80000,
    },
    {
        status: "OUT OF STOCK",
        img: require("../../../assets/products/cho/thuc an/Banh cookie.png"), 
        content: "BÁNH COOKIE YẾN MẠCH CHO CHÓ | 200gr",
        forType: "Bánh thưởng",
        price: 80000,
    },
    {
        status: "In Stock",
        img: require("../../../assets/products/cho/thuc an/Banh cookie.png"), 
        content: "BÁNH COOKIE YẾN MẠCH CHO CHÓ | 200gr",
        forType: "Bánh thưởng",
        price: 80000,
    },
    {
        status: "In Stock",
        img: require("../../../assets/products/cho/thuc an/Banh cookie.png"), 
        content: "BÁNH COOKIE YẾN MẠCH CHO CHÓ | 200gr",
        forType: "Bánh thưởng",
        price: 80000,
    },
    {
        status: "In Stock",
        img: require("../../../assets/products/cho/thuc an/Banh cookie.png"), 
        content: "BÁNH COOKIE YẾN MẠCH CHO CHÓ | 200gr",
        forType: "Bánh thưởng",
        price: 80000,
    },

];

function ProductPage() {
    const [minPrice, setMinPrice] = useState(18000);
    const [maxPrice, setMaxPrice] = useState(495000);

    const filteredProducts = products.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
    );

    return (
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
                {filteredProducts.map((product, index) => (
                    <ProductCard
                        status={product.status}
                        img={product.img}
                        content={product.content}
                        forType={product.forType}
                        price={`${product.price.toLocaleString()} đ`}
                        onClick={() => console.log(`Clicked on ${product.content}`)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductPage;

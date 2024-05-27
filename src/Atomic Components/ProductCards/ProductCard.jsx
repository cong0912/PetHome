import "./ProductCards.css"
function ProductCard() {
    return (
        <div className="product-card-container">
            <div className="product-card-detail">
                <div className="product-img">
                    <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNjM5LWltYWdlXzItbDBqOXFvd3IucG5n.png" className="img" />
                </div>
                <div className="product-card-current">
                    <p className="product-card-current-text">Out of stock</p>
                </div>
                <div className="product-card-whichpet">
                    <p>cho meo</p>
                </div>
                <div className="product-card-detail">
                    <p>Cat ve sinh than hoat tinh cho meo mui chanh tui 15L/18kg</p>
                </div>
                <div className="product-card-price">
                    <p>140.000d</p>
                </div>
            </div>
        </div>
    )
}
export default ProductCard
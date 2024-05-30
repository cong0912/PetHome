import Text from "../../Atom/Text/Text"
import "./ProductCards.css"
function ProductCard({
    status,
    content,
    forType,
    className,
    onClick,
    price,
}) {
    return (
        <div
            className={`product-card-container ${className}`}
            onClick={onClick}>
            <div className="product-card-detail">
                <div className="product-img">
                    <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNjM5LWltYWdlXzItbDBqOXFvd3IucG5n.png" className="img" />
                </div>
                <div className="product-card-current">
                    <Text
                        className="product-card-current-text"
                        content={status}
                    />
                </div>
                <div>
                    <Text
                        className="product-card-whichpet"
                        content={forType} />
                </div>
                <div >
                    <Text
                        className="product-card-detail"
                        content={content}
                    />
                </div>
                <div >
                    <Text
                        className="product-card-price"
                        content={price} />
                </div>
            </div>
        </div>
    )
}
export default ProductCard
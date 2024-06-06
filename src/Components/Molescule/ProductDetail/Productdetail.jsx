import React, { useEffect } from "react";
import { TextField } from '@mui/material';
import { useState } from "react";
import "./Productdetail.scss"
import { useParams } from "react-router-dom";
import MyAxios from "../../../setup/configAxios";

function Productdetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    useEffect(() => {
        MyAxios.get(`http://localhost:5000/api/v1/products/${id}`)
            .then((response) => {
                console.log(response);
                setProduct(response.data); 
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
    return (
       product? ( <div className="product-detail-container">
       <div className="product-information">
           <h1 className="info-name">{product.name}</h1>
           <p>{product.price}</p>
           <p>availability{product.quantity}</p>
           <div>
               <div>
                   <TextField
                       type="number"
                       value={quantity}
                       onChange={handleQuantityChange}
                       inputProps={{ min: 1, step: 1 }}
                   />
                   <button onClick={handleIncrement}>+</button>
               </div>
               <p className="">Thêm vào giỏ hàng</p>
           </div>
       </div>
     <img src={product.image} alt="" srcset="" />

   </div>):(<>KHONG TIM THAY SAN PHAM</>)
    )
}
export default Productdetail
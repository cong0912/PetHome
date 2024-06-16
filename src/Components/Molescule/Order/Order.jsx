import { useEffect, useState } from "react";
import styles from "./Order.module.scss";
import Myaxios from "setup/configAxios";
import axios from "axios";
import OrderList from "./OrderList/OrderList";

const Order = () => {
  // userId
  const userId = localStorage.getItem("userId");
  // cartDetails
  let shopCart = localStorage.getItem("shopCart");
  if (shopCart) {
    let data = JSON.parse(shopCart);
    data.forEach((item) => {
      let cartDetails = {
        productId: item.id,
        quantity: item.value,
      };
    });
  }
  // get Province and districts

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);

  //GET DATA PROVINCES AND
  useEffect(() => {
    // Lấy tỉnh thành
    const getProvinces = async () => {
      try {
        const response = await axios.get("https://esgoo.net/api-tinhthanh/1/0.htm");
        setProvinces(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getProvinces();
  }, []);

  const handleProvinceChange = async (e) => {
    const selectedProvinceId = e.target.value;
    const dis = provinces.find((a) => a.full_name == selectedProvinceId);
    // Lấy quận huyện
    try {
      const response = await axios.get(`https://esgoo.net/api-tinhthanh/2/${dis.id}.htm`);
      setDistricts(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>Thanh toán</div>
      <form className={styles["order-info-form"]}>
        <div className={styles["content"]}>
          <div className={styles["order-info-left"]}>
            <div className={styles["content-title"]}>
              <h3 className={styles["text"]}>Thông tin thanh toán</h3>
            </div>

            <div className={styles["name-info"]}>
              <p className={styles["text"]}>Họ và tên</p>
              <input className={styles["input-text"]} type="text" placeholder="Họ tên của bạn" />
            </div>
            <div className={styles["phone-email-info"]}>
              <div className={styles["phone-info"]}>
                <p className={styles["text"]}>Số điện thoại</p>
                <input className={styles["input-text"]} type="tel" placeholder="Số điện thoại của bạn" />
              </div>
              <div className={styles["email-info"]}>
                <p className={styles["text"]}>Địa chỉ email</p>
                <input className={styles["input-text"]} type="email" placeholder=" Email của bạn" />
              </div>
            </div>
            <div className={styles["address-info"]}>
              <div className={styles["provice-info"]}>
                <p className={styles["text"]}>Tỉnh/Thành phố</p>
                <select id="province" className={styles["select"]} onChange={handleProvinceChange}>
                  <option disabled value="">
                    Select Provinces ...
                  </option>
                  {provinces.map((province) => {
                    return (
                      <option key={province.id} value={province.full_name}>
                        {province.full_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className={styles["dictrict-info"]}>
                <p className={styles["text"]}>Quận/Huyện</p>
                <select id="province" className={styles["select"]}>
                  <option disabled value="">
                    Select Dictricts ...
                  </option>
                  {districts.map((district) => {
                    return (
                      <option key={district.id} value={district.full_name}>
                        {district.full_name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className={styles["duong-info"]}>
              <p className={styles["text"]}>Địa chỉ</p>
              <input className={styles["input-text"]} type="text" placeholder="Ví dụ : 20A Nguyễn Huệ" />
            </div>
          </div>
          <div className={styles["order-info-right"]}>
            <OrderList />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Order;

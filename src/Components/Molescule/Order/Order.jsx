import styles from "./Order.module.scss";

const Order = () => {
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
                <select id="province" className={styles["select"]}>
                  <option disabled value="">
                    Select Provinces ...
                  </option>
                </select>
              </div>
              <div className={styles["dictrict-info"]}>
                <p className={styles["text"]}>Quận/Huyện</p>
                <select id="province" className={styles["select"]}>
                  <option disabled value="">
                    Select Dictricts ...
                  </option>
                </select>
              </div>
            </div>
            <div className={styles["duong-info"]}>
              <p className={styles["text"]}>Địa chỉ</p>
              <input className={styles["input-text"]} type="text" placeholder="Ví dụ : 20A Nguyễn Huệ" />
            </div>
          </div>
          <div className={styles["order-info-right"]}>
            <div className={styles["order-info-right-title"]}>
              <h3>Đơn hàng của bạn</h3>
            </div>
            <div className={styles["order-info-right-review"]}>
              <table className={styles["table-products"]}>
                <thead>
                  <tr>
                    <th>Sản phẩm</th>
                    <th>Tạm tính</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tên sản phẩm</td>
                    <td>Giá sản phẩm</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr></tr>
                  <tr></tr>
                </tfoot>
              </table>
            </div>
            <div className={styles["order-info-right"]}></div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Order;

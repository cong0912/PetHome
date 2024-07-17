import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyAxios from "../../../setup/configAxios";
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Divider, 
  Box,
  Chip
} from '@mui/material';

const OrderDetailStaff = () => {
  const [orderData, setOrderData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        const response = await MyAxios.get(`api/v1/orders/${id}`);
        setOrderData(response.data);
      } catch (error) {
        console.error('Error fetching order detail:', error);
      }
    };

    fetchOrderDetail();
  }, [id]);

  if (!orderData) return <div>Loading...</div>;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Processing': return 'bg-yellow-400';
      case 'Completed': return 'bg-green-400';
      case 'Cancelled': return 'bg-red-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" className="mb-4">Chi tiết đơn hàng</Typography>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Thông tin đơn hàng</Typography>
              <Typography>ID: {orderData._id}</Typography>
              <Typography>Ngày đặt: {new Date(orderData.dateOrder).toLocaleString()}</Typography>
              <Typography>Tổng tiền: {orderData.totalPrice.toLocaleString()} VND</Typography>
              <Chip 
                label={orderData.status} 
                className={`mt-2 text-white ${getStatusColor(orderData.status)}`}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Thông tin giao hàng</Typography>
              <Typography>
                Địa chỉ: {orderData.shipping.addressShipping.street}, {orderData.shipping.addressShipping.district}, {orderData.shipping.addressShipping.city}
              </Typography>
              <Typography>Phí vận chuyển: {orderData.shipping.shippingFee.toLocaleString()} VND</Typography>
            </Grid>
          </Grid>

          <Divider className="my-4" />

          <Typography variant="h6" className="mb-2">Sản phẩm</Typography>
          {orderData.orderDetails.map((item, index) => (
            <Box key={index} className="mb-4 p-4 bg-gray-100 rounded">
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={2}>
                  <img src={item.product.image} alt={item.product.name} className="w-full h-auto" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">{item.product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{item.product.des}</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography>Số lượng: {item.quantity}</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography>Giá: {item.price.toLocaleString()} VND</Typography>
                </Grid>
              </Grid>
            </Box>
          ))}

          <Divider className="my-4" />

          <Typography variant="h6">Thanh toán</Typography>
          <Typography>Phương thức: {orderData.payment.paymentMethod}</Typography>
          <Typography>Trạng thái: {orderData.payment.status}</Typography>
          <Typography>Ngày thanh toán: {new Date(orderData.payment.datePayment).toLocaleString()}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderDetailStaff;
import React from 'react';
import '../pages/css/OrderPage.css';
import p02 from '../pages/css/p02.jpeg';
import p03 from '../pages/css/p03.jpg';
import p04 from '../pages/css/p04.jpeg';
import p05 from '../pages/css/p05.jpeg';
import p06 from '../pages/css/p06.jpeg';
import p07 from '../pages/css/p07.jpeg';
import Sidebar from './Sidebar';

const OrderPage = () => {
  const orders = [
    { id: 1, name: 'Red Dress', price: '$120', size: 'M', duration: '7 days', img: p02 },
    { id: 2, name: 'Blue Jeans', price: '$80', size: 'L', duration: '5 days', img: p03 },
    { id: 3, name: 'Leather Jacket', price: '$200', size: 'L', duration: '10 days', img: p04 },
    { id: 4, name: 'Shirt', price: '$100', size: 'M', duration: '3 days', img: p05 },
    { id: 5, name: 'Coat', price: '$300', size: 'XL', duration: '14 days', img: p06 },
    { id: 6, name: 'Bracelet', price: '$70', size: 'One Size', duration: '7 days', img: p07 },
  ];

  return (
    <div className="order-page">
      <Sidebar />
      <h1>Your Rents</h1>
      <div className="orders-container">
        {orders.map(order => (
          <div key={order.id} className="order-item">
            <img src={order.img} alt={order.name} className="order-image" />
            <div className="order-details">
              <h2>{order.name}</h2>
              <p className="price">{order.price}</p>
              <p className="size-duration">Size: {order.size}</p>
              <p className="size-duration">Rental Duration: {order.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default  OrderPage;
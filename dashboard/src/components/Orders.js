import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setOrders(res.data.reverse()); // Latest on top
    });
  }, []);

  return (
    <div className="orders-container">
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Type</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              const typeClass = order.mode === "BUY" ? "buy" : "sell";
              return (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price.toFixed(2)}</td>
                  <td className={typeClass}>{order.mode}</td>
                  <td>{new Date(order.time).toLocaleTimeString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

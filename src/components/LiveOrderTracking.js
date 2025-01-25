import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Replace with your server URL

const LiveOrderTracking = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Listen for order updates
    socket.on("orderUpdate", (order) => {
      setOrders((prevOrders) => {
        const updatedOrders = prevOrders.map((o) =>
          o.id === order.id ? order : o
        );
        return updatedOrders;
      });
    });

    // Fetch initial orders
    socket.emit("getOrders", (initialOrders) => {
      setOrders(initialOrders);
    });

    // Cleanup on component unmount
    return () => {
      socket.off("orderUpdate");
    };
  }, []);

  return (
    <div>
      <h1>Live Order Tracking</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order #{order.id}: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveOrderTracking;

import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
// import { cartType } from '../interface/Product';
import { formcheckout } from "../interface/User";
import "tailwindcss/tailwind.css";

const Checkout = () => {
  const context = useContext(CartContext);

  if (!context) {
    return <p>Error: Cart context not found.</p>;
  }

  const { cart, removeFromCart } = context;
  const [formData, setFormData] = useState<formcheckout>({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const totalPrice = cart.reduce(
    (total, item) => total + item.salePrice * item.quantity,
    0
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Checkout successful!");
    cart.forEach((item) => removeFromCart(item, item.quantity));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Cart Summary</h3>
        {cart.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.name} className="border-b">
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">${((item.salePrice ?? item.price) * item.quantity).toFixed(2)}</td>
                  <td className="py-2 px-4">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <h3 className="text-xl font-bold mt-4">
          Total Price: ${totalPrice.toFixed(2)}
        </h3>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
        <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-4">
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default Checkout;

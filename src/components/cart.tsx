import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Cart = () => {
  const context = useContext(CartContext);

  if (!context) {
    return <p>Error: Cart context not found.</p>;
  }

  const { cart, addToCart, removeFromCart } = context;

  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      (item.sale === true || item.sale === "true"
        ? item.salePrice
        : item.price) *
        item.quantity,
    0
  );

  const handleRemoveAll = () => {
    cart.forEach((item) => removeFromCart(item, item.quantity));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="flex justify-between mb-2">
        <button
          aria-label="Remove all items from cart"
          className="bg-red-500 text-white py-2 px-4 rounded-md mb-4 md:mb-0"
          onClick={handleRemoveAll}
        >
          Remove All
        </button>
        <h3 className="text-xl font-bold mb-4 md:mb-0">
          Total Price: ${totalPrice.toFixed(2)}
        </h3>
      </div>
      {cart.length === 0 ? (
        <p className="text-center">No items in the cart</p>
      ) : (
        <div>
          <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
            <thead>
              <tr className="border-b bg-gray-100 ">
                <th className="py-2 px-4 text-start ">Ảnh sản phẩm</th>
                <th className="py-2 px-4 text-start">Tên Sản Phẩm</th>
                <th className="py-2 px-4 text-start">Giá</th>
                <th className="py-2 px-4 text-start">Số lượng</th>
                <th className="py-2 px-4 text-start">Xoá sản phẩm</th>
                <th className="py-2 px-4 text-start">Thanh toán</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-2 px-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                  </td>
                  <td className="py-2 px-4">
                    <Link
                      to={`/product/${item.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td className="py-2 px-4">
                    $
                    {(item.sale === true || item.sale === "true"
                      ? item.salePrice
                      : item.price
                    ).toFixed(2)}
                  </td>
                  <td className="py-10 px-4 flex items-center justify-center">
                    <button
                      aria-label={`Decrease quantity of ${item.name}`}
                      className=" text-gray-800 p-1 rounded-md"
                      onClick={() => removeFromCart(item, 1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      aria-label={`Increase quantity of ${item.name}`}
                      className=" text-gray-800 p-1 rounded-md"
                      onClick={() => addToCart(item, 1)}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      aria-label={`Remove ${item.name} from cart`}
                      className="bg-red-500 text-white py-1 px-4 rounded-md"
                      onClick={() => removeFromCart(item, item.quantity)}
                    >
                      Remove
                    </button>
                  </td>
                  <td className="">
                    <button className="bg-green-500 text-white py-1 px-4 rounded-md">
                      <Link to="">
                        <button
                          aria-label="Proceed to checkout"
                          className=" py-2 px-4 rounded-md"
                        >
                          Checkout
                        </button>
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex flex-col md:flex-row md:justify-between items-center">
            <Link to="/checkout">
              <button
                aria-label="Proceed to checkout"
                className="bg-green-500 text-white py-2 px-4 rounded-md"
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

import React, { useState } from "react";
import { addtoCart, removeTocart, clearCart } from "../../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import prodcuts from '../../utils/data.json'

const Ecommerce = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const cartItem = prodcuts.products.filter((item) => state.includes(item.id));

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="py-4 px-6 bg-white shadow-md flex items-center justify-between">
        <h4
          className="font-bold text-2xl text-gray-800 cursor-pointer hover:text-blue-600 transition"
          onClick={() => setShowCart(false)}
        >
          Shop
        </h4>
        <div className="relative cursor-pointer" onClick={() => setShowCart(true)}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-800 hover:text-blue-600 transition"
          >
            <path d="M10 10H30L27 20H13L10 10Z" stroke="currentColor" strokeWidth="2" />
            <path d="M12 20L11 25H29L28 20H12Z" stroke="currentColor" strokeWidth="2" />
            <circle cx="15" cy="30" r="2" fill="currentColor" />
            <circle cx="25" cy="30" r="2" fill="currentColor" />
            <circle cx="30" cy="10" r="8" fill="#EF4444" />
            <text
              x="30"
              y="14"
              fontSize="10"
              fill="#FFF"
              textAnchor="middle"
              fontFamily="Arial"
            >
              {state.length}
            </text>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {!showCart ? (
          // Product Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {prodcuts.products.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.first_name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {item.first_name}
                  </h3>
                  <div className="mt-auto">
                    {!state.includes(item.id) ? (
                      <button
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        onClick={() => dispatch(addtoCart(item.id))}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <button
                        className="w-full py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition"
                        onClick={() => dispatch(removeTocart(item.id))}
                      >
                        Remove from Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Cart View
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Your Cart ({cartItem.length} Items)
            </h3>
            {cartItem.length === 0 ? (
              <p className="text-center text-gray-600">Your cart is empty.</p>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {cartItem.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-50 rounded-lg shadow-sm flex flex-col"
                    >
                      <img
                        src={item.image}
                        alt={item.first_name}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800 truncate">
                          {item.first_name}
                        </h3>
                        <button
                          className="mt-auto w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                          onClick={() => dispatch(removeTocart(item.id))}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <button
                    className="py-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Ecommerce;
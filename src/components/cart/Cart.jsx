import React from "react";
import data from "../../services/dummies";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import images from "../../services/dummies";
import ItemCard from "./ItemCard";
import AnimatedBackground from "../common/AnimatedBackground";

export default function Cart() {
  return (
    <div className="max-w-container mx-auto px-4">
    <AnimatedBackground/>
      <h1 className="text-3xl font-bold md:text-5xl pt-8">Cart</h1>
      <p className="text-base text-zinc-600 pt-2">Please, check your Orders carefully before proceeding to checkout.</p>

      {data.products.length > 0 ? (
        <div className="pb-20 relative">
          <div className="w-full h-20 hidden md:grid grid-cols-5 place-content-center px-6 font-bold text-lg text-stone-950">
            <h2 className="col-span-2">Product</h2>
            <h2 className="">Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className="mt-5 ">
            {data.products.map((item) => (
              <div key={item.id}>
                <ItemCard
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              </div>
            ))}
          </div>

          <button className="py-2 px-10 bg-red-500 text-white  font-semibold uppercase mb-4 hover:bg-red-700 duration-300">
            Reset cart
          </button>

          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">Cart totals</h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Subtotal
                  <span className="font-semibold tracking-wide font-titleFont">
                    $1000
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Shipping Charge
                  <span className="font-semibold tracking-wide font-titleFont">
                    $40
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  Total
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    $20030
                  </span>
                </p>
              </div>
              <div className="flex justify-end">
                <Link to="/paymentgateway">
                  <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={images.images.emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/shop">
              <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}

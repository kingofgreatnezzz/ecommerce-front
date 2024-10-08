import React, { useState } from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import images from "../../services/dummies";

export default function Footer() {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email!");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please provide a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };

  return (
    <div className="">
      <div className="w-full backdrop-blur-md py-20  ">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 px-4 gap-10">
          <div className="col-span-2">
            <h3 className="font-bold text-lg text-zinc-950">
              More about Modex
            </h3>
            <div className="flex flex-col gap-6">
              <p className="text-base w-full xl:w-[80%] text-zinc-950">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                sint ab ullam, numquam nesciunt in.
              </p>
              <ul className="flex items-center gap-2">
                <a
                  href="https://www.youtube.com/@reactjsBD"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="w-7 h-7 bg-zinc-950 text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                    <FaYoutube />
                  </li>
                </a>
                <a
                  href="https://github.com/noorjsdivs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="w-7 h-7 bg-zinc-950 text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                    <FaGithub />
                  </li>
                </a>
                <a
                  href="https://www.facebook.com/Noorlalu143/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="w-7 h-7 bg-zinc-950 text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                    <FaFacebook />
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className="w-7 h-7 bg-zinc-950 text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                    <FaLinkedin />
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg text-zinc-950">Shop</h3>
            <ul className="flex flex-col gap-2 ">
              <li className="font-titleFont text-base text-zinc-500 hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Accesories
              </li>
              <li className="font-titleFont text-base text-zinc-500 hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Clothes
              </li>
              <li className="font-titleFont text-base text-zinc-500 hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Electronics
              </li>
              <li className="font-titleFont text-base text-zinc-500 hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Home appliances
              </li>
              <li className="font-titleFont text-base text-zinc-500 hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                New Arrivals
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-zinc-950">Account</h3>
            <ul className="flex flex-col gap-2">
              <li className="font-titleFont text-base text-zinc-500 hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Profile
              </li>
              <li className="font-titleFont text-base text-zinc-500 hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Orders
              </li>
              <li className="font-titleFont text-base text-zinc-500 hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Addresses
              </li>
              <li className="font-titleFont text-base text-zinc-500 hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Account Details
              </li>
              <li className="font-titleFont text-base text-zinc-500 hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Payment Options
              </li>
            </ul>
          </div>
          <div className="col-span-2 flex flex-col items-center w-full px-4">
            <h3 className="font-bold text-lg text-zinc-950">
              Subscribe to our newsletter
            </h3>
            <div className="w-full">
              <p className="text-center mb-4 text-zinc-950">
                A at pellentesque et mattis porta enim elementum.
              </p>
              {subscription ? (
                <motion.p
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full text-center text-base font-titleFont font-semibold text-green-600"
                >
                  Subscribed Successfully!
                </motion.p>
              ) : (
                <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
                  <div className="flex flex-col w-full">
                    <input
                      onChange={(e) => setEmailInfo(e.target.value)}
                      value={emailInfo}
                      className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                      type="email"
                      placeholder="Insert your email ...*"
                    />
                    {errMsg && (
                      <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                        {errMsg}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={handleSubscription}
                    className="bg-slate-800 text-slate-300 w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                  >
                    Subscribe
                  </button>
                </div>
              )}
              <img src={images.images.payment} alt="card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

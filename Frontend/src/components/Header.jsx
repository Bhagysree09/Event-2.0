import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ReactTyped } from "react-typed"; // Use named import for Typed
import RestaurantImage from "../assets/restaurant.jpg"; // Adjust the path based on your folder structure
import ChangePasswordModal from "./ChangePasswordModal"; // Import the modal

function Header() {
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal

  // Check local storage for token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    setIsLoggedIn(false); // Update the logged-in state
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div
      className="relative bg-slate-900 p-4 bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${RestaurantImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Ensures full screen
      }}
    >
      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-[1240px] py-[20px] flex justify-between border-black mx-auto items-center">
        <div className="font-bold text-xl sm:text-2xl md:text-3xl text-white">
          <Link to="/">ROYAL EVENT</Link>
        </div>

        {/* Hamburger Menu and Close Button for Mobile */}
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-2xl sm:text-3xl md:hidden block text-white"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-2xl sm:text-3xl md:hidden block text-white"
          />
        )}

        {/* Main Navigation Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-10 text-white text-base sm:text-lg md:text-xl font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isLoggedIn ? (
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
          ) : (
            <>
              <li>
                <button onClick={handleLogout} className="text-white">
                  Logout
                </button>
              </li>
              <li>
                <button onClick={openModal} className="text-white">
                  Change Password
                </button>
              </li>
            </>
          )}
        </ul>

        {/* Responsive Mobile Menu */}
        <ul
          className={`duration-300 w-full h-screen md:hidden fixed bg-slate-400 text-white text-lg sm:text-xl top-[85px] ${
            toggle ? "left-[0]" : "left-[100%]"
          }`}
        >
          <li className="p-5">
            <Link to="/" onClick={() => setToggle(false)}>
              Home
            </Link>
          </li>
          {!isLoggedIn ? (
            <li className="p-5">
              <Link to="/signin" onClick={() => setToggle(false)}>
                Sign in
              </Link>
            </li>
          ) : (
            <li className="p-5">
              <button onClick={handleLogout} className="text-white">
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Change Password Modal */}
      <ChangePasswordModal isOpen={modalIsOpen} onRequestClose={closeModal} />

      {/* Add content in the banner section */}
      <div className="relative z-10 text-white text-center mt-16">
        <h1 className="text-4xl md:text-6xl font-bold">DREAM MAKER</h1>
        <p className="mt-4 text-xl md:text-2xl">
          We believe that it is all about the BIG DREAMS.
        </p>
        <ReactTyped
          className="pl-3 text-white block font-bold text-4xl"
          strings={[
            "Wedding",
            "Birthday",
            "Anniversary",
            "Camping",
            "Engagement",
          ]}
          typeSpeed={120}
          loop={true}
          backSpeed={120}
        />
        <button className="mt-8 px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate and Link for redirection
import axios from "axios"; // Import axios

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State to handle error messages
  const [success, setSuccess] = useState(null); // State to handle success messages
  const navigate = useNavigate(); // For redirecting after successful signin

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error before each submission
    setSuccess(null); // Reset success message before each submission

    // Prepare the login data to send
    const loginData = {
      email: email.trim(), // Trim whitespace
      password: password.trim(), // Trim whitespace
    };

    console.log("Login Data:", loginData); // Log the login data

    try {
      // Make the POST request to the signin API using Axios
      const response = await axios.post(
        "http://localhost:8001/api/user/login", // Ensure this is the correct endpoint
        loginData,
        {
          headers: {
            "Content-Type": "application/json", // Ensure the content type is set
          },
        }
      );

      // Check if the signin was successful
      if (response.status === 200) {
        setSuccess("Login successful!");
        console.log("User logged in successfully:", response.data);

        // Save the token or user data to localStorage
        localStorage.setItem("token", response.data.token);

        // Redirect the user to the home page after successful login
        setTimeout(() => {
          navigate("/"); // Redirect to home page
        }, 2000);
      } else {
        setError(
          response.data.message ||
            "Invalid email or password. Please try again."
        );
      }
    } catch (err) {
      console.error("Signin error:", err);
      if (err.response) {
        console.error("Error response data:", err.response.data); // Log response data
        setError(
          err.response.data.message ||
            "An error occurred. Please try again later."
        );
      } else {
        setError(
          "An error occurred. Please check your network connection and try again."
        );
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

      {/* Display error message */}
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      {/* Display success message */}
      {success && <p className="text-green-600 text-center mb-4">{success}</p>}

      {/* Signin form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-2 border rounded-lg focus:ring focus:outline-none focus:ring-indigo-300"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-2 border rounded-lg focus:ring focus:outline-none focus:ring-indigo-300"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Register link */}
      <div className="mt-4 text-center">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;

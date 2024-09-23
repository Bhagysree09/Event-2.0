import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("User"); // Default role set to 'User'
  const [error, setError] = useState(null); // To handle error messages
  const [success, setSuccess] = useState(null); // To handle success messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const userData = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
      phonenumber: phone.trim(),
      role: role || "User",
    };

    try {
      const response = await axios.post(
        "http://192.168.1.8:8001/api/user/register",
        userData
      );

      if (response.status === 201) {
        setSuccess("Signup successful!");
        console.log("User registered successfully:", response.data);
      } else {
        setError(
          response.data.message || "Failed to register. Please try again."
        );
      }
    } catch (err) {
      console.error("Signup error:", err);
      if (err.response) {
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-600 text-center mb-4">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-2 border rounded-lg focus:ring focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 border rounded-lg focus:ring focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 border rounded-lg focus:ring focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full px-4 py-2 border rounded-lg focus:ring focus:outline-none"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="block w-full px-4 py-2 border rounded-lg focus:ring focus:outline-none"
              required
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already registered?{" "}
            <Link to="/Signin" className="text-indigo-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

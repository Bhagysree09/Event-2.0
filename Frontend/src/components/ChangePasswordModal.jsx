import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

// Set the app element for accessibility
Modal.setAppElement("#root");

const ChangePasswordModal = ({ isOpen, onRequestClose, userId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!userId) {
      setError("User ID is missing. Please try again.");
      setLoading(false);
      return;
    }

    const oldPassword = e.target.oldPassword.value;
    const newPassword = e.target.newPassword.value;

    try {
      const response = await axios.post(
        `http://localhost:8001/api/user/${userId}/change-password`,
        { oldPassword, newPassword }
      );

      if (response.status === 200) {
        alert("Password changed successfully!");
        onRequestClose(); // Close the modal after success
      }
    } catch (error) {
      setError("Failed to change password. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white p-6 rounded-md shadow-lg w-1/3"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      contentLabel="Change Password"
    >
      <h2 className="text-lg font-bold">Change Password</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form className="mt-4 w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="oldPassword">
            Old Password
          </label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="newPassword">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            onClick={onRequestClose}
            className="mt-4 ml-2 px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ChangePasswordModal;

import React, { useState, useEffect } from "react";
import Modal from "react-modal"; 
import "./Modal.css";

Modal.setAppElement('#root');

const CustomModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const validateDOB = (dob) => {
    const selectedDate = new Date(dob);
    const currentDate = new Date();
    return selectedDate <= currentDate;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Invalid phone number. Please enter a valid 10-digit phone number.");
      return;
    }

    if (!validateDOB(formData.dob)) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    setFormData({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });

    handleClose();
  };

  return (
    <div className="modal">
            <Modal isOpen={show} onRequestClose={handleClose} className="modal-content">
      <h2>Fill Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label><br />
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email Address:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />
        <label htmlFor="phone">Phone Number:</label><br />
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        /><br />
        <label htmlFor="dob">Date of Birth:</label><br />
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        /><br /><br />
        <button className="submit-button" type="submit">Submit</button>
      </form>
    </Modal>
    </div>

  );
};

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="container">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      <CustomModal show={showModal} handleClose={closeModal} />
    </div>
  );
}

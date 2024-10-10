import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ show, handleClose }) => {
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
    <div className={`modal ${show ? "show" : ""}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="email">Email Address:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="phone">Phone Number:</label>
          <br />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
          <br />
          <br />

          <label htmlFor="dob">Date of Birth</label>
          <br />
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};


export default function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      <Modal show={showModal} handleClose={closeModal} />
    </div>
  );
}

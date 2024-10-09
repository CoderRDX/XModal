import React,{useState} from "react";
import "./Modal.css"

const Modal = ({ show, handleClose }) => {

    const handleSubmit = (event) => {
        event.preventDefault(); 

        const name = event.target.username.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const dob = event.target.dob.value;

        handleClose();
      };

    return (
      <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <h2>Fill Details</h2>
          <form>
            <label htmlFor="name">Username:</label><br />
            <input type="text" id="username" name="username" required /><br /><br />
  
            <label htmlFor="email">Email Address:</label><br />
            <input type="email" id="email" name="email" required /><br /><br />

            <label htmlFor="email">Phone Number:</label><br />
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required /><br /><br />

            <label htmlFor="email">Date of Birth</label><br />
            <input type="date" id="dob" name="dob" required /><br /><br />
  
            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  };

export default function App(){

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };

    return(
        <div className="container">
            <h1>User Details Modal</h1>
            <button onClick={openModal}>Open Form</button>
            <Modal show={showModal} handleClose={closeModal} />
        </div>
    );
}
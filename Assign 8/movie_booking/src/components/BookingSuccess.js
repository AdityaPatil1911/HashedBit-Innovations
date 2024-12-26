import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingSuccess.css";

const BookingSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, mobile, bookingId } = location.state;

  const randomBookingId = `BOOK${Math.floor(1000 + Math.random() * 9000)}`;

  const handleBackToMovies = () => {
    navigate("/");
  };

  return (
    <div className="booking-success-container">
      <h1>Booking Confirmed!</h1>
      <p>
        <strong>Booking ID:</strong> {randomBookingId}
      </p>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Mobile:</strong> {mobile}
      </p>
      <button onClick={handleBackToMovies}>Back to Movies</button>
    </div>
  );
};

export default BookingSuccess;

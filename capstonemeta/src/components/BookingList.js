import React from 'react';

function BookingList({ reservations }) {
  return (
    <div>
      <h2>Reserve a table</h2>
      <ul>
      {reservations.map((reservation, index) => (
          <li key={index}>
            {reservation.name} - {reservation.date} - {reservation.time} - {reservation.occasion} - {reservation.phone} - {' '} - {reservation.guests} guests
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;
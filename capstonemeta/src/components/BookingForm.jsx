import {React, useState} from 'react';
import '../styles/bookingform.css';
/*
https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js
*/

function BookingForm({ availableTimes, updateTimes }) {
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guest: "",
    date: "",
    occasion: "",
    time: "",
  });

  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;;
    setFormData({ ...formData, [name]: value });
      if (name === 'date') {
      updateTimes(value, availableTimes);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      setSubmitted(true);
      alert("Your reservation has been made, Thanks You!")

    setFormData({
    name: "",
    phone: "",
    guest: "",
    date: "",
    occasion: "",
    time: "",
    });
  };


  return (
    <div className='formcontainer'>
      {!submitted ? (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="field">

            <label htmlFor='name'>Name:
            <input
            id='name'
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange }/></label>

            <label htmlFor='phone'>Phone number:
            <input
            id='phone'
            type="phone"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}/></label>


            <label htmlFor="date">Date:
            <input
            id='date'
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}/></label>


            <label htmlFor='time'>Time:
            <select
            id='time'
            name="time"
            value={formData.time}
            onChange={handleChange}>
              <option>Select a time</option>

              {availableTimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>
              ))}

            </select></label>


            <label htmlFor='guest'>Number of guests:
            <input
            id='guest'
            type="number"
            name="guest"
            placeholder="1" min="1" max="10"
            value={formData.guest}
            onChange={handleChange}/></label>


            <label htmlFor="occasion">What's the occasion:
            <select className='options' value={formData.occasion}  id="occasion" onChange={handleChange}>
              <option value="dinner">Dinner</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select></label>

            <button type="submit" >Book Now</button>
   
          </div>
        </fieldset>
      </form>
       ) : (
        <div>
          <h2>Thank you for your reservation!</h2>
          <button onClick={() => setSubmitted(false)}>Make Another Reservation</button>
        </div>
      )}
    </div>
  );
}

export default BookingForm

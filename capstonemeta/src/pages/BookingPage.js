import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import '../styles/bookingform.css';
import BookingForm2 from '../components/BookingForm2.js';
import BookingList from '../components/BookingList.js';
import { useState, useReducer, useEffect } from 'react';

const INITIALIZE_TIMES = 'INITIALIZE_TIMES';
const UPDATE_TIMES = 'UPDATE_TIMES';

function reducer(state, action) {
  switch (action.type) {
    case INITIALIZE_TIMES:
    case UPDATE_TIMES:
      return action.payload; 
    default:
      return state;
  }
}


export default function BookingPage() {


  const [reservations, setReservations] = useState([])
  const [availableTimes, dispatch] = useReducer(reducer, []);


  function initializeTimes() {
    return [
      '20:00 PM', '20:30 PM', '21:30 PM', '22:00 PM'
    ];
  }

  const updateTimes = (date, times) => {
   dispatch({ type: UPDATE_TIMES, payload: times });
  };

  useEffect(() => {
    dispatch({ type: INITIALIZE_TIMES, payload: initializeTimes() });
  }, []);

   
  return (
    <>
    <Nav />
    <Footer />

    <BookingForm2 
    availableTimes={availableTimes}  
    updateTimes={updateTimes} />

    <BookingList reservations={reservations} />

    </>
    );
  }
  
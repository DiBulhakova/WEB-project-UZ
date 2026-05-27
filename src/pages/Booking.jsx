import { useParams } from "react-router-dom";
import WagonSelector from "../components/WagonSelector";
import SeatMap from "../components/SeatMap";
import BookingForm from "../components/BookingForm";
import { useEffect, useState } from "react";

function Booking() {
  const { trainId } = useParams();

  const [selectedWagon, setSelectedWagon] =
    useState(null);

  const [selectedSeats, setSelectedSeats] =
  useState([]);  

  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3001/bookings")
    .then((response) => response.json())
    .then((bookings) => {
      const seats = bookings
        .filter(
          (booking) =>
            booking.trainId === trainId &&
            booking.wagon === selectedWagon
        )
        .flatMap((booking) => booking.seats);

      setBookedSeats(seats);
    });
  }, [trainId, selectedWagon]);

  const handleSeatToggle = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter(
          (selectedSeat) =>
            selectedSeat !== seat
        )
      );
    } else {
      setSelectedSeats([
        ...selectedSeats,
        seat,
      ]);
    }
  };

  return (
    <div>
      <h1>Бронювання квитка</h1>

      <p>Потяг №{trainId}</p>

      <WagonSelector
        selectedWagon={selectedWagon}
        onSelectWagon={setSelectedWagon}
      />

      {selectedWagon && (
        <SeatMap
          selectedSeats={selectedSeats}
          bookedSeats={bookedSeats}
          onSeatToggle={handleSeatToggle}
        />
      )}

      {selectedSeats.length > 0 && (
        <BookingForm
          trainId={trainId}
          selectedWagon={selectedWagon}
          selectedSeats={selectedSeats}
        />
      )}
    </div>
  );
}

export default Booking;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WagonSelector from "../components/WagonSelector";
import SeatMap from "../components/SeatMap";
import BookingForm from "../components/BookingForm";

function Booking() {
  const { trainId } = useParams();

  const [selectedWagon, setSelectedWagon] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  const loadBookedSeats = () => {
    if (!selectedWagon) return;

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
  };

  useEffect(() => {
    loadBookedSeats();
  }, [trainId, selectedWagon]);

  const handleSeatToggle = (seat) => {
    if (bookedSeats.includes(seat)) {
      return;
    }

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter(
          (selectedSeat) => selectedSeat !== seat
        )
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleWagonSelect = (wagon) => {
    setSelectedWagon(wagon);
    setSelectedSeats([]);
  };

  return (
    <div>
      <h1>Бронювання квитка</h1>

      <p>Потяг №{trainId}</p>

      <WagonSelector
        selectedWagon={selectedWagon}
        onSelectWagon={handleWagonSelect}
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
          onBookingSaved={loadBookedSeats}
        />
      )}
    </div>
  );
}

export default Booking;
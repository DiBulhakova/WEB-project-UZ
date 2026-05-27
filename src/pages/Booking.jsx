import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WagonSelector from "../components/WagonSelector";
import SeatMap from "../components/SeatMap";
import BookingForm from "../components/BookingForm";
import { getBookings } from "../services/BookingService";

function Booking() {
  const { trainId } = useParams();

  const [selectedWagon, setSelectedWagon] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  const handleBookingSaved = () => {
  setBookedSeats([...bookedSeats, ...selectedSeats]);
  setSelectedSeats([]);
  };

  const loadBookedSeats = () => {
    if (!selectedWagon) return Promise.resolve();

    return getBookings().then((bookings) => {
      const seats = bookings
        .filter(
          (booking) =>
            String(booking.trainId) === String(trainId) &&
            Number(booking.wagon) === Number(selectedWagon)
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
          onBookingSaved={handleBookingSaved}
        />
      )}
    </div>
  );
}

export default Booking;
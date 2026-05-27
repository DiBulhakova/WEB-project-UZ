import { useState } from "react";
import { useParams } from "react-router-dom";
import WagonSelector from "../components/WagonSelector";
import SeatMap from "../components/SeatMap";
import BookingForm from "../components/BookingForm";

function Booking() {
  const { trainId } = useParams();

  const [selectedWagon, setSelectedWagon] =
    useState(null);

  const [selectedSeats, setSelectedSeats] =
  useState([]);  

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
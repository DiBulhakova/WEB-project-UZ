function SeatMap({ selectedSeats, bookedSeats, onSeatToggle }) {
  const seats = Array.from(
    { length: 12 },
    (_, index) => index + 1
  );

  return (
    <div>
      <h2>Оберіть місця</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 60px)",
          gap: "10px",
        }}
      >
        {seats.map((seat) => {
          const isBooked = bookedSeats.includes(seat);
          const isSelected = selectedSeats.includes(seat);

          return (
            <button
              key={seat}
              onClick={() => onSeatToggle(seat)}
              style={{
              width: "60px",
              height: "40px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              backgroundColor: bookedSeats.includes(seat)
                ? "red"
                : selectedSeats.includes(seat)
                ? "green"
                : "lightgray",
              color: "white",
            }}
            >
              {seat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SeatMap;
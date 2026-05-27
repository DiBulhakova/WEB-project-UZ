function SeatMap({
  selectedSeats,
  onSeatToggle,
}) {
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
        {seats.map((seat) => (
          <button
            key={seat}
            onClick={() => onSeatToggle(seat)}
            style={{
              backgroundColor:
                selectedSeats.includes(seat)
                  ? "lightgreen"
                  : "white",
            }}
          >
            {seat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SeatMap;
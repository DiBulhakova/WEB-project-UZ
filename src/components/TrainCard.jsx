function TrainCard({ train }) {
  return (
    <div>
      <h3>Потяг №{train.number}</h3>

      <p>{train.route}</p>

      <p>
        {train.departureDate} {train.departureTime}
      </p>

      <p>Тривалість: {train.duration}</p>

      <button>Забронювати</button>
    </div>
  );
}

export default TrainCard;
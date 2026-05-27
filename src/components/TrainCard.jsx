import { Link } from "react-router-dom";

function TrainCard({ train }) {
  return (
    <div>
      <h3>Потяг №{train.number}</h3>

      <p>{train.route}</p>

      <p>
        {train.departureDate} {train.departureTime}
      </p>

      <p>Тривалість: {train.duration}</p>

      <Link to={`/booking/${train.number}`}>
        <button>Забронювати</button>
      </Link>
    </div>
  );
}

export default TrainCard;
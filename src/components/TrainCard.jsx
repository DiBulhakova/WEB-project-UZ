import { Link } from "react-router-dom";
import "./TrainCard.css";

function TrainCard({ train }) {
  return (
    <div className="train-card">
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
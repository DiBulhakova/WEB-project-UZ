import { useEffect, useState } from "react";
import TrainList from "../components/TrainList";

function Home() {
  const [trains, setTrains] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/trains")
      .then((response) => response.json())
      .then((data) => setTrains(data));
  }, []);

  const filteredTrains = trains.filter(
    (train) =>
      train.number.includes(search) ||
      train.route.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Список рейсів</h1>
      <input
        type="text"
        placeholder="Пошук за номером або маршрутом"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TrainList trains={filteredTrains} />
    </div>
  );
}

export default Home;
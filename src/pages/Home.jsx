import { useEffect, useState } from "react";
import TrainList from "../components/TrainList";

function Home() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/trains")
      .then((response) => response.json())
      .then((data) => setTrains(data));
  }, []);

  return (
    <div>
      <h1>Список рейсів</h1>

      <TrainList trains={trains} />
    </div>
  );
}

export default Home;
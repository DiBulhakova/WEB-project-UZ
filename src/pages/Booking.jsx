import { useState } from "react";
import { useParams } from "react-router-dom";
import WagonSelector from "../components/WagonSelector";

function Booking() {
  const { trainId } = useParams();

  const [selectedWagon, setSelectedWagon] =
    useState(null);

  return (
    <div>
      <h1>Бронювання квитка</h1>

      <p>Потяг №{trainId}</p>

      <WagonSelector
        selectedWagon={selectedWagon}
        onSelectWagon={setSelectedWagon}
      />
    </div>
  );
}

export default Booking;
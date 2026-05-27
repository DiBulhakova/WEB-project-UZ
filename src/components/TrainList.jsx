import TrainCard from "./TrainCard";

function TrainList({ trains }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "16px",
      }}
    >
      {trains.map((train) => (
        <TrainCard
          key={train.id}
          train={train}
        />
      ))}
    </div>
  );
}

export default TrainList;
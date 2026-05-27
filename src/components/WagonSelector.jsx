function WagonSelector({
  selectedWagon,
  onSelectWagon,
}) {
  const wagons = [1, 2, 3, 4];

  return (
    <div>
      <h2>Оберіть вагон</h2>

      {wagons.map((wagon) => (
        <button
          key={wagon}
          onClick={() => onSelectWagon(wagon)}
        >
          Вагон {wagon}
        </button>
      ))}

      {selectedWagon && (
        <p>Обрано вагон №{selectedWagon}</p>
      )}
    </div>
  );
}

export default WagonSelector;
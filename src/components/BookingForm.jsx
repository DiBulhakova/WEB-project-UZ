import { useState } from "react";

function BookingForm({ trainId, selectedWagon, selectedSeats }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
    alert("Введіть ім'я");
    return;
    }

    if (!/^[А-Яа-яІіЇїЄєA-Za-z\s'-]+$/.test(name)) {
    alert("Ім'я повинно містити тільки літери");
    return;
    }

    if (!/^\+380\d{9}$/.test(phone)) {
    alert(
        "Телефон повинен бути у форматі +380XXXXXXXXX"
    );
    return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Некоректний email");
    return;
    }

    const newBooking = {
    trainId,
    wagon: selectedWagon,
    seats: selectedSeats,
    passenger: {
        name,
        phone,
        email,
    },
    };

    fetch("http://localhost:3001/bookings", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newBooking),
    });

    alert("Бронювання успішно оформлено");
};

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Дані пасажира</h2>

      <div>
        <input
          type="text"
          placeholder="Ім'я"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Телефон"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
      </div>

      <button type="submit">
        Підтвердити бронювання
      </button>
    </form>
  );
}

export default BookingForm;
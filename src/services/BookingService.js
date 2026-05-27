export const getBookings = async () => {
  const response = await fetch(
    "http://localhost:3001/bookings"
  );

  return response.json();
};

export const saveBooking = async (booking) => {
  const response = await fetch(
    "http://localhost:3001/bookings",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    }
  );

  return response.json();
};
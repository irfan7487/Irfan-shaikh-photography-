document.addEventListener("DOMContentLoaded", () => {
  const calendar = document.getElementById("calendar");
  const orders = document.getElementById("orders");
  const events = document.getElementById("events");

  calendar.innerHTML = "<h2>📅 Calendar</h2><p>Show month/date/day here</p>";
  orders.innerHTML = "<h2>📝 Orders</h2><p>No orders yet</p>";
  events.innerHTML = "<h2>🎉 Events</h2><p>No events yet</p>";
});
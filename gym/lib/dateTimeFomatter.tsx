import react from "react";

const DateTimeFormatter = ({ dateString }: any) => {
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  const inputDay = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    inputDate.getDate(),
    0,
    0,
    0,
    0
  );
  const currentDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    0,
    0,
    0,
    0
  );

  // Check if the given date is in the past
  const isPastDate = inputDay < currentDay;
  // Options for formatting time

  // Format date and time based on the condition
  const formattedDateTime = isPastDate
    ? inputDate.toLocaleDateString("ko-KR", {}) // Display only date for past dates
    : inputDate.toLocaleTimeString("ko-KR", {
        hour: "numeric",
        minute: "numeric",
        hour12: false, // Use 24-hour format
      }); // Display time for today

  return (
    <div>
      <h5>날짜: {formattedDateTime}</h5>
    </div>
  );
};

export default DateTimeFormatter;

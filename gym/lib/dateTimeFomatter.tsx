import react from "react";

const DateTimeFormatter = ({ dateString }: any) => {
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  // Check if the given date is in the past
  const isPastDate = inputDate >= currentDate;
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
      <p>{formattedDateTime}</p>
    </div>
  );
};

export default DateTimeFormatter;

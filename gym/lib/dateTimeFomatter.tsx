import react from "react";

const DateTimeFormatter = (dateString: string) => {
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  // Check if the given date is in the past
  const isPastDate = inputDate < currentDate;

  // Format date and time based on the condition
  const formattedDateTime = isPastDate
    ? inputDate.toLocaleDateString() // Display only date for past dates
    : inputDate.toLocaleTimeString(); // Display time for today

  return (
    <div>
      <p>{formattedDateTime}</p>
    </div>
  );
};

export default DateTimeFormatter;

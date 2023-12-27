const DateTimeFormatterInBoard = ({ dateString }: any) => {
  const inputDate = new Date(dateString);

  // Check if the given date is in the past
  // Options for formatting time

  // Format date and time based on the condition
  const formattedDateTime =
    inputDate.toLocaleDateString("ko-KR", {}) +
    " " +
    inputDate.toLocaleTimeString("ko-KR", {
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

export default DateTimeFormatterInBoard;

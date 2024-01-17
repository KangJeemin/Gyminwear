const DateTimeFommaterINComment = ({ dateString }: any) => {
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

  const returnFommater = () => {
    if (inputDay < currentDay) {
      //년도와 월을 비교, (일은 같은데 월이 다른 경우도 있을 경우 생각)
      return inputDate.toLocaleDateString("ko-KR");
    } else {
      //일, 시간, 분을 비교
      if (currentDate.getHours() - inputDate.getHours() !== 0) {
        return currentDate.getHours() - inputDate.getHours() + "일전";
      } else if (currentDate.getMinutes() - inputDate.getMinutes() !== 0) {
        return currentDate.getMinutes() - inputDate.getMinutes() + "분전";
      } else {
        return "방금";
      }
    }
  };

  return (
    <div>
      <h5> {returnFommater()}</h5>
    </div>
  );
};

export default DateTimeFommaterINComment;

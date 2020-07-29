export const daysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
}

export const createMonthArray = ({month, year}) => {
  const daysAmount = daysInMonth(month, year);
  let monthArray = [];
  let firstDay = new Date(year, month);
  for (let day = 1; day <= daysAmount; day += 1) {
    monthArray.push(new Date(year, month, day))
  }
  return monthArray;
}

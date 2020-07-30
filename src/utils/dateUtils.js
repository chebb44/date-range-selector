export const daysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
}

export const createMonthArray = (period) => {
  const year = period.getFullYear();
  const month = period.getMonth();
  const daysAmount = daysInMonth(month, year);
  let monthArray = [];
  for (let day = 1; day <= daysAmount; day += 1) {
    monthArray.push(new Date(year, month, day))
  }
  return monthArray;
}

export const getNowDateWithoutTime = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0,);
  return date;
}

export const isEqualMonthYear = (date1, date2) => {
  return date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
}

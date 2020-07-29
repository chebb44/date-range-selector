export const daysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
}

export const createMonthArray = ({month, year}) => {
  const daysAmount = daysInMonth(month, year);
  let monthArray = [];
  for (let day = 1; day <= daysAmount; day += 1) {
    monthArray.push(new Date(year, month, day))
  }
  return monthArray;
}

export const getNowDateWithoutTime = () => {
  const date = new Date();
  date.setHours(0,0,0,0,);
  return date;
}



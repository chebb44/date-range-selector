import {LEFT_SHIFT} from "../constants";

export const daysInMonth = (period) => {
  const year = period.getFullYear();
  const month = period.getMonth();
  return new Date(year, month + 1, 0).getDate();
}

export const createMonthArray = (period) => {
  const daysAmount = daysInMonth(period);
  let monthArray = [];
  for (let day = 1; day <= daysAmount; day += 1) {
    monthArray.push(new Date(period.getFullYear(), period.getMonth(), day))
  }
  return monthArray;
}

export const createTwoMonthArray = (period) => {
  const rightSideDays = createMonthArray(period);
  const prevPeriod = new Date(period.getFullYear(), period.getMonth() - 1);
  const leftSideDays = createMonthArray(prevPeriod);
  return {leftSideDays, rightSideDays}
}

export const getNowDateWithoutTime = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0,);
  return date;
}

export const isEqualMonthYear = (date1, date2) => {
  return date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
}

export const getFirstMonthDay = (date) => {
  const firstDay = new Date(date.getTime());
  firstDay.setDate(1);
  return firstDay
}

export const getSiblingMonth = (date, direction) => {
  if (direction === LEFT_SHIFT) {
    const endDate = new Date(date.getTime());
    endDate.setDate(0);
    const startDate = new Date(endDate.getTime());
    startDate.setDate(1);
    return {endDate, startDate}
  } else {
    const startDate = new Date(date.getTime());
    startDate.setDate(1);
    startDate.setMonth(date.getMonth() + 1);
    const lastDayIndex = daysInMonth(startDate);
    const endDate = new Date(startDate.getTime());
    endDate.setDate(lastDayIndex);
    return {endDate, startDate}
  }
}

export const getNewDateWithChangeMonth = (date, shift) => {
  return new Date(date.getFullYear(), date.getMonth() + shift, date.getDate());
}

export const getNewDateWithChangeDay = (date, shift) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + shift);
}

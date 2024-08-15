import {
  format,
  subYears,
  addMonths,
  startOfMonth,
  startOfYear,
} from "date-fns";

const getMonthYearLabel = (date) => format(date, "MM|yy");

export default function GetMonthYear(startYear) {
  const options = [];
  const currentDate = startOfMonth(new Date());
  const startDate = startOfMonth(new Date(startYear, 0, 1));

  let currentMonth = startDate;

  while (currentMonth <= currentDate) {
    options.push({
      id: options.length + 1,
      label: getMonthYearLabel(currentMonth),
    });
    currentMonth = addMonths(currentMonth, 1);
  }

  return options;
}

const Grrr = GetMonthYear(12);

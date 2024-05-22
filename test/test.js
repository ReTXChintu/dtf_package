const {
  formatToDDMMYYYY,
  formatToMMDDYYYY,
  formatToDDMMMYYYY,
  formatTo24HourTime,
  formatTo12HourTime,
} = require("../src/index.js");

describe("Date Formatter", () => {
  const dates = [
    {
      date: new Date("2012-10-17T21:13:27.000Z"),
      DDMMYYYY: "17/10/2012",
      MMDDYYYY: "10/17/2012",
      DDMMMYYYY: "17 Oct, 2012",
      H24: "21:13:27",
      H12: "09:13:27 PM",
    },
    {
      date: new Date("2000-01-01T00:00:00.000Z"),
      DDMMYYYY: "01/01/2000",
      MMDDYYYY: "01/01/2000",
      DDMMMYYYY: "01 Jan, 2000",
      H24: "00:00:00",
      H12: "12:00:00 AM",
    },
    {
      date: new Date("1776-07-04T16:30:00.000Z"),
      DDMMYYYY: "04/07/1776",
      MMDDYYYY: "07/04/1776",
      DDMMMYYYY: "04 Jul, 1776",
      H24: "16:30:00",
      H12: "04:30:00 PM",
    },
    {
      date: new Date("2020-12-25T09:45:15.000Z"),
      DDMMYYYY: "25/12/2020",
      MMDDYYYY: "12/25/2020",
      DDMMMYYYY: "25 Dec, 2020",
      H24: "09:45:15",
      H12: "09:45:15 AM",
    },
    {
      date: new Date("2024-03-15T06:00:00.000Z"),
      DDMMYYYY: "15/03/2024",
      MMDDYYYY: "03/15/2024",
      DDMMMYYYY: "15 Mar, 2024",
      H24: "06:00:00",
      H12: "06:00:00 AM",
    },
  ];

  dates.forEach(({ date, DDMMYYYY, MMDDYYYY, DDMMMYYYY, H24, H12 }) => {
    test(`should format Date ${date.toISOString()} to DD/MM/YYYY`, () => {
      const formattedDate = formatToDDMMYYYY(date);
      expect(formattedDate).toBe(DDMMYYYY);
    });

    test(`should format Date ${date.toISOString()} to MM/DD/YYYY`, () => {
      const formattedDate = formatToMMDDYYYY(date);
      expect(formattedDate).toBe(MMDDYYYY);
    });

    test(`should format Date ${date.toISOString()} to DD MMM, YYYY`, () => {
      const formattedDate = formatToDDMMMYYYY(date);
      expect(formattedDate).toBe(DDMMMYYYY);
    });

    test(`should format Time ${date.toISOString()} to 24-hour format`, () => {
      const formattedTime = formatTo24HourTime(date);
      expect(formattedTime).toBe(H24);
    });

    test(`should format Time ${date.toISOString()} to 12-hour format`, () => {
      const formattedTime = formatTo12HourTime(date);
      expect(formattedTime).toBe(H12);
    });
  });
});

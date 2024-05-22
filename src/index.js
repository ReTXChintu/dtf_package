/**
 * Format a Date object into a string with a given format
 * @param {Date} date - The Date object to format
 * @param {string} format - The format string (e.g., 'YYYY-MM-DD HH:mm:ss')
 * @returns {string} - The formatted date string
 */
function formatDate(date, format) {
  const map = {
    YYYY: date.getUTCFullYear(),
    MM: ("0" + (date.getUTCMonth() + 1)).slice(-2),
    DD: ("0" + date.getUTCDate()).slice(-2),
    HH: ("0" + date.getUTCHours()).slice(-2),
    mm: ("0" + date.getUTCMinutes()).slice(-2),
    ss: ("0" + date.getUTCSeconds()).slice(-2),
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss/gi, (matched) => map[matched]);
}

/**
 * Format Date to DD/MM/YYYY
 * @param {Date} date - The Date object to format
 * @returns {string} - The formatted date string
 */
function formatToDDMMYYYY(date) {
  return formatDate(date, "DD/MM/YYYY");
}

/**
 * Format Date to MM/DD/YYYY
 * @param {Date} date - The Date object to format
 * @returns {string} - The formatted date string
 */
function formatToMMDDYYYY(date) {
  return formatDate(date, "MM/DD/YYYY");
}

/**
 * Format Date to DD MMM, YYYY
 * @param {Date} date - The Date object to format
 * @returns {string} - The formatted date string
 */
function formatToDDMMMYYYY(date) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = ("0" + date.getUTCDate()).slice(-2);
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
}

/**
 * Format Time to 24-hour format
 * @param {Date} date - The Date object to format
 * @returns {string} - The formatted time string
 */
function formatTo24HourTime(date) {
  return formatDate(date, "HH:mm:ss");
}

/**
 * Format Time to 12-hour format
 * @param {Date} date - The Date object to format
 * @returns {string} - The formatted time string
 */
function formatTo12HourTime(date) {
  let hours = date.getUTCHours();
  const minutes = ("0" + date.getUTCMinutes()).slice(-2);
  const seconds = ("0" + date.getUTCSeconds()).slice(-2);
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  return `${("0" + hours).slice(-2)}:${minutes}:${seconds} ${ampm}`;
}

module.exports = {
  formatToDDMMMYYYY,
  formatToDDMMYYYY,
  formatToMMDDYYYY,
  formatTo12HourTime,
  formatTo24HourTime,
};

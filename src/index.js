const defaultOffset = 5.5; // IST offset

/**
 * Adjust the date to a specific time zone
 * @param {Date} date - The Date object to adjust
 * @param {number} offset - The time zone offset in hours
 * @returns {Date} - The adjusted Date object
 */
function adjustToTimeZone(date, offset = defaultOffset) {
  // Create a new Date object to avoid mutating the original one
  const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  // Adjust the date by the specified offset in hours
  return new Date(utcDate.getTime() + offset * 3600000);
}

/**
 * Format a Date object into a string with a given format
 * @param {Date} date - The Date object to format
 * @param {string} format - The format string (e.g., 'YYYY-MM-DD HH:mm:ss')
 * @param {number} offset - The time zone offset in hours
 * @returns {string} - The formatted date string
 */
function formatDate(date, format, offset = defaultOffset) {
  const adjustedDate = adjustToTimeZone(date, offset);

  const map = {
    YYYY: adjustedDate.getFullYear(),
    MM: ("0" + (adjustedDate.getMonth() + 1)).slice(-2),
    DD: ("0" + adjustedDate.getDate()).slice(-2),
    HH: ("0" + adjustedDate.getHours()).slice(-2),
    mm: ("0" + adjustedDate.getMinutes()).slice(-2),
    ss: ("0" + adjustedDate.getSeconds()).slice(-2),
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss/gi, (matched) => map[matched]);
}

// Update the other formatting functions to accept a time zone offset

function formatToDDMMYYYY(date, offset = defaultOffset) {
  return formatDate(date, "DD/MM/YYYY", offset);
}

function formatToMMDDYYYY(date, offset = defaultOffset) {
  return formatDate(date, "MM/DD/YYYY", offset);
}

function formatToDDMMMYYYY(date, offset = defaultOffset) {
  const adjustedDate = adjustToTimeZone(date, offset);

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = ("0" + adjustedDate.getDate()).slice(-2);
  const month = monthNames[adjustedDate.getMonth()];
  const year = adjustedDate.getFullYear();
  return `${day} ${month}, ${year}`;
}

function formatTo24HourTime(date, offset = defaultOffset) {
  return formatDate(date, "HH:mm:ss", offset);
}

function formatTo12HourTime(date, offset = defaultOffset) {
  const adjustedDate = adjustToTimeZone(date, offset);

  let hours = adjustedDate.getHours();
  const minutes = ("0" + adjustedDate.getMinutes()).slice(-2);
  const seconds = ("0" + adjustedDate.getSeconds()).slice(-2);
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

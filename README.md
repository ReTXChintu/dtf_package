# MongoDB Date Formatter

A simple utility to format MongoDB Date objects into different date and time formats.

## Installation

Install the package via npm:
`npm install dtf_package`

## Usage

- First, require the package in your project:

```bash
const {
  formatToDDMMYYYY,
  formatToMMDDYYYY,
  formatToDDMMMYYYY,
  formatTo24HourTime,
  formatTo12HourTime
} = require('mongodb-date-formatter');
```

- Then, you can use the provided functions to format dates and times. Here are some examples:

```bash
const date = new Date('2012-10-17T21:13:27.000Z');
console.log(formatToDDMMYYYY(date)); // Outputs: 17/10/2012
console.log(formatToMMDDYYYY(date)); // Outputs: 10/17/2012
console.log(formatToDDMMMYYYY(date)); // Outputs: 17 Oct, 2012
console.log(formatTo24HourTime(date)); // Outputs: 21:13:27
console.log(formatTo12HourTime(date)); // Outputs: 09:13:27 PM
```

- API
  formatToDDMMYYYY(date)
  Formats the date to DD/MM/YYYY.

- Parameters:
  date (Date): The date to format.

- Returns:
  string: The formatted date.

- API
  formatToMMDDYYYY(date)
  Formats the date to MM/DD/YYYY.

- Parameters:
  date (Date): The date to format.

- Returns:
  string: The formatted date.

- API
  formatToDDMMMYYYY(date)
  Formats the date to DD MMM, YYYY.

- Parameters:
  date (Date): The date to format.

- Returns:
  string: The formatted date.

- API
  formatTo24HourTime(date)
  Formats the time to 24-hour format HH:mm:ss.

- Parameters:
  date (Date): The date to format.

- Returns:
  string: The formatted time.

- API
  formatTo12HourTime(date)
  Formats the time to 12-hour format hh:mm:ss AM/PM.

- Parameters:
  date (Date): The date to format.

- Returns:
  string: The formatted time.

## Running Tests

- To run the tests, first install the development dependencies:

```bash
npm install
```

- Then, use the following command to run the tests:

```bash
npm test
```

## Changelog
- All notable changes to this project are documented in [Changelog](./CHANGELOG.md).
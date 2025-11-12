// Utility functions for the OGame-like game

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to validate if a value is a number
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// Function to deep clone an object
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Exporting utility functions
export { getRandomNumber, formatNumber, isNumber, deepClone };
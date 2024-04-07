// Grab the time display and change location button elements from the HTML
const timeDisplay = document.getElementById('current-time');
const changeLocationButton = document.getElementById('change-location-btn');

// Track the currently displayed location index
let currentLocationIndex = 0;

// Define the locations with their details
const locations = [
  { city: 'New York', timeZone: 'America/New_York', color: '#007bff', textColor: '#fff' },
  { city: 'London', timeZone: 'Europe/London', color: '#dc3545', textColor: '#fff' },
  { city: 'Tokyo', timeZone: 'Asia/Tokyo', color: '#ffc107', textColor: '#000' },
  { city: 'India', timeZone: 'Asia/Kolkata', color: '#28a745', textColor: '#fff' },
];

// Function to update the displayed time and colors
function updateDisplay() {
  // Get the current location object
  const currentLocation = locations[currentLocationIndex];

  // Create a new Date object to get the current time
  const now = new Date();

  // Format the time according to the current location's time zone
  const formattedTime = now.toLocaleString('en-US', { timeZone: currentLocation.timeZone });

  // Update the text content of the time display element
  timeDisplay.textContent = '${currentLocation.city} (${currentLocation.timeZone}): ${formattedTime}';

  // Change the background and text colors for the entire page and the button
  document.body.style.backgroundColor = currentLocation.color;
  document.body.style.color = currentLocation.textColor;
  changeLocationButton.style.backgroundColor = currentLocation.color;
  changeLocationButton.style.color = currentLocation.textColor;

  // Switch to the next location, looping back if needed
  currentLocationIndex = (currentLocationIndex + 1) % locations.length;
}

// Add a click event listener for the change location button
changeLocationButton.addEventListener('click', updateDisplay);

// Update the display initially when the page loads
updateDisplay();
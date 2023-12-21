var dropdown = document.querySelector('.dropdown');

// Add a click event listener
dropdown.addEventListener('click', function() {
  // Select the dropdown content within this dropdown
  var dropdownContent = this.querySelector('.dropdown-content');

  // Toggle the display property
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
});
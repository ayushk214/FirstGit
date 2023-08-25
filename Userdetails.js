// Get the form element
const userForm = document.getElementById('userForm');

// Add event listener to form submission
userForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Create an object to store user data
    const userData = {
        name: name,
        email: email
    };

    // Store the user data object in local storage
    localStorage.setItem('userData', JSON.stringify(userData));
});

// To retrieve the data and parse it back to an object
const storedData = localStorage.getItem('userData');
if (storedData) {
    const parsedUserData = JSON.parse(storedData);
    console.log(parsedUserData)
}
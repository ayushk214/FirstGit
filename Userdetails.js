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

    // Convert the object to a JSON string and store in local storage
    localStorage.setItem('userData', JSON.stringify(userData));

});

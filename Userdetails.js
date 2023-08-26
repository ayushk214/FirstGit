// Get the form element
const userForm = document.getElementById('userForm');
const userList = document.getElementById('listOfItems');

// Add event listener to form submission
userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Create an object to store user data
    const userData = {
        name: name,
        email: email,
        mobile: mobile
    };

    // Store the user data object in local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Call the function to display user data
    showUserOnScreen(userData);

    // Clear the form inputs after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobile').value = '';
});

function showUserOnScreen(object) {
    const parentElem = document.getElementById('listOfItems');
    // Create a new list item element
    const listItem = document.createElement('li');
    listItem.textContent = `${object.name} - ${object.email} - ${object.mobile}`;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        parentElem.removeChild(listItem);
        localStorage.removeItem(object.email);
    });

    // Create an edit button
    const editButton = document.createElement('input');
    editButton.type = 'button';
    editButton.value = 'Edit';
    editButton.onclick = () => {
        parentElem.removeChild(listItem);
        localStorage.removeItem(object.email);
        document.getElementById('name').value = object.name;
        document.getElementById('email').value = object.email;
        document.getElementById('mobile').value = object.mobile;
    };

    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    parentElem.appendChild(listItem);
}

// Append the new list item to the list
userList.appendChild(listItem);


// Retrieve stored data and display on page load
const storedData = localStorage.getItem('userData');
if (storedData) {
    const parsedUserData = JSON.parse(storedData);
    showUserOnScreen(parsedUserData);
}

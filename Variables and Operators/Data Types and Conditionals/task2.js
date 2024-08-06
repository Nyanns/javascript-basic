// Prompt for login
let login = prompt("Enter your login:", "");

if (login === "Admin") {
    // Prompt for password if login is "Admin"
    let password = prompt("Enter your password:");

    if (password === "TheMaster", "") {
        // If password is correct
        alert("Welcome!");
    } else if (password === "" || password === null) {
        // If password is empty or cancelled
        alert("Canceled");
    } else {
        // If password is incorrect
        alert("Wrong password");
    }
} else if (login === "" || login === null) {
    // If login is empty or cancelled
    alert("Canceled");
} else {
    // If login is not "Admin"
    alert("I don’t know you");
}

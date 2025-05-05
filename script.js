// validating username

const validateUserName = document.getElementById("button");

const validatePassword = document.getElementById("password");

validateUserName.addEventListener("click", function () {

    const userName = document.getElementById("username").value.trim();
    const userNameStatus = document.getElementById("userNameStatus");
    const nameRegex = /^[A-Za-z\s]+$/;

    if (userName === "") {

        userNameStatus.textContent = "Note: Fill UserName";
        return;
    }

    if (!nameRegex.test(userName)) {
        userNameStatus.textContent = "Note: Only Alphabets & Space are allowed!";
        return;
    }

    userNameStatus.textContent = "Note: Valid Username";



});


// validate password

validatePassword.addEventListener("input", function () {

    const password = validatePassword.value;

    const passwordStatus = document.getElementById("passwordStatus");

    let strength = "Weak";

    if (password.length >= 6 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
        strength = "Strong";

    } else if (password.length >= 4 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
        strength = "Medium";

    }

    passwordStatus.textContent ="Note: " +strength + " Password";

});
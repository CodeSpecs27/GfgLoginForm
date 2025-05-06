// validating username


function validateUserName(username,usernameStatus) {

    const userName = document.getElementById(username).value.trim();
    const userNameStatus = document.getElementById(usernameStatus);
    const nameRegex = /^[A-Za-z\s]+$/;

    userNameStatus.className = "invalid";

    if (userName === "") {

        userNameStatus.textContent = "Note: Fill UserName!";
        return;
    }

    if (!nameRegex.test(userName)) {
        userNameStatus.textContent = "Note: Only Alphabets & Space are allowed!";
        return;
    }

    userNameStatus.className = "valid";
    userNameStatus.textContent = "Note: Valid Username!";

}


// validate password


function validatePassword(passwordF,passwordstatus) {

    const password = document.getElementById(passwordF).value;

    const passwordStatus = document.getElementById(passwordstatus);

    let strength = "Weak";
    let className = "weak";

    if (password.length >= 6 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
        strength = "Strong";
        className = "strong"

    } else if (password.length >= 4 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
        strength = "Medium";
        className = "medium";

    }

    passwordStatus.className = className;
    passwordStatus.textContent ="Note: " +strength + " Password!";

};


// validate email


function validateEmail(emailF,emailstatus) {
    const email = document.getElementById(emailF).value.trim();
    const emailStatus = document.getElementById(emailstatus);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    emailStatus.className = "invalid";

    if (email === "") {
        emailStatus.textContent = "Note: Fill Email!";
        return;
    }

    if (!emailRegex.test(email)) {
        emailStatus.textContent = "Note: Invalid Email Format!";
        return;
    }

    emailStatus.className = "valid";
    emailStatus.textContent = "Note: Valid Email!";

}


// validate phone number


function validatePhone(phoneF,phonestatus) {
    const phone = document.getElementById(phoneF).value.trim();
    const phoneStatus = document.getElementById(phonestatus);   
    const phoneRegex = /^\d{10}$/;

    phoneStatus.className = "invalid";
    if (phone === "") {
        phoneStatus.textContent = "Note: Fill Phone Number!";
        return;
    }
    if (!phoneRegex.test(phone)) {
        phoneStatus.textContent = "Note: Invalid Phone Number Format!";
        return;
    }

    phoneStatus.className = "valid";
    phoneStatus.textContent = "Note: Valid Phone Number!";
}


document.addEventListener("DOMContentLoaded", function () {

    // Validate username - Login Page
    const validateOnSubmit = document.getElementById("button");
    if (validateOnSubmit) {
        validateOnSubmit.addEventListener("click", function () {
            validateUserName("username", "userNameStatus");
        });
    }


    // validate username,email,phone - Register Page
    const validateOnRegister = document.getElementById("register");
    if (validateOnRegister) {
        validateOnRegister.addEventListener("click", function () {
            validateUserName("username1", "userNameStatus1");
            validateEmail("email", "emailStatus");
            validatePhone("phone", "phoneStatus");

            alert("Sign Up Successfull!");
        });
    }

    // Validate password - Login Page
    const validatePasswordOnInput = document.getElementById("password");
    if (validatePasswordOnInput) {
        validatePasswordOnInput.addEventListener("input", function () {
            validatePassword("password", "passwordStatus");
        });
    }

     // Validate password - Register Page
    const validatePasswordOnRegisterInput = document.getElementById("password1");
    if (validatePasswordOnRegisterInput) {
        validatePasswordOnRegisterInput.addEventListener("input", function () {
            validatePassword("password1", "passwordStatus1");
        });
    }

    
});


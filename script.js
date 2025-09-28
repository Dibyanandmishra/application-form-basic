document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("jobForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop form submission
        let isValid = true;

        // Clear previous errors
        document.querySelectorAll(".error").forEach(el => el.style.display = "none");
        document.querySelectorAll("input, textarea, select").forEach(el => el.classList.remove("error-border"));

        // First Name
        const fname = document.getElementById("fname");
        if (fname.value.trim() === "") {
            showError(fname, "First name is required");
            isValid = false;
        }

        // Last Name
        const lname = document.getElementById("lname");
        if (lname.value.trim() === "") {
            showError(lname, "Last name is required");
            isValid = false;
        }

        // Email
        const email = document.getElementById("Email");
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email.value.trim())) {
            showError(email, "Enter a valid email address");
            isValid = false;
        }

        // Job Role
        const jobRole = document.getElementById("JobRole");
        if (jobRole.value === "") {
            showError(jobRole, "Please select a job role");
            isValid = false;
        }

        // Address
        const address = document.getElementById("Address");
        if (address.value.trim().length < 10) {
            showError(address, "Address must be at least 10 characters");
            isValid = false;
        }

        // City
        const city = document.getElementById("City");
        if (city.value.trim() === "") {
            showError(city, "City is required");
            isValid = false;
        }

        // Pin Code
        const pin = document.getElementById("PinCode");
        if (!/^\d{6}$/.test(pin.value.trim())) {
            showError(pin, "Enter a valid 6-digit pin code");
            isValid = false;
        }

        // Start Date
        const date = document.getElementById("date");
        if (date.value === "") {
            showError(date, "Please select a start date");
            isValid = false;
        }

        // CV Upload
        const cv = document.getElementById("cv");
        if (cv.files.length === 0) {
            showError(cv, "Please upload your CV");
            isValid = false;
        }

        if (isValid) {
            alert("✅ Form submitted successfully!");
            form.reset();
        }
    });

    function showError(input, message) {
        const errorElement = input.parentElement.querySelector(".error");
        errorElement.textContent = message;
        errorElement.style.display = "block";
        input.classList.add("error-border");
    }
});

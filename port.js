document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop the default form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const budget = document.getElementById("budget").value.trim();
        const message = document.getElementById("message").value.trim();

        const nameRegex = /^[A-Za-z\s]{2,50}$/;
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const messageRegex = /^[A-Za-z0-9\s.,!?]{2,500}$/;

        if (!nameRegex.test(name) || !emailRegex.test(email) || !messageRegex.test(message) || budget === "") {
            alert("Please enter valid input in all fields.");
            return;
        }

        // Submit using Formspree endpoint
        fetch("https://formspree.io/f/xzzeyyrg", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ name, email, message ,budget})
        })
        .then(response => {
            if (response.ok) {
                alert("✅ Message sent successfully!");
                form.reset();
            } else {
                alert("❌ Failed to send message. Try again later.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("⚠️ There was a problem sending your message.");
        });
    });
});

// for third offer
document.addEventListener("DOMContentLoaded", function () {
    // ... your existing form submission code ...

    // Add click event listener for third offer
    const thirdOfferBtn = document.querySelector(".third_btn");
    if (thirdOfferBtn) {
        thirdOfferBtn.addEventListener("click", function (e) {
            e.preventDefault(); // optional: prevents default link behavior
            alert("❌ Currently not offering any services for web applications.");
        });
    }
});

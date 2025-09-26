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


// Service details
const serviceDetails = {
  "web-dev": {
    title: "Web Development",
    desc: `
      <p>I create fully responsive, scalable, and interactive websites tailored to your business needs.</p>
      <ul>
        <li>Custom HTML, CSS, and JavaScript development</li>
        <li>Cross-browser & cross-device compatibility</li>
        <li>Performance optimization (fast load times)</li>
        <li>Basic SEO setup for better visibility</li>
        <li>Deployment support (Netlify, Vercel, or custom hosting)</li>
      </ul>
    `
  },
  "uiux": {
    title: "UI/UX Design",
    desc: `
      <p>I design user-centered interfaces that balance beauty with functionality.</p>
      <ul>
        <li>Wireframing and prototyping</li>
        <li>Clean, modern, and intuitive UI designs</li>
        <li>Mobile-first responsive layouts</li>
        <li>Accessibility standards (WCAG guidelines)</li>
        <li>Collaboration with developers for smooth handoff</li>
      </ul>
    `
  },
  "seo": {
    title: "SEO Optimization",
    desc: `
      <p>I optimize websites to rank higher and load faster.</p>
      <ul>
        <li>On-page SEO (meta tags, titles, descriptions)</li>
        <li>Keyword integration & SEO-friendly content structure</li>
        <li>Image optimization & lazy loading</li>
        <li>Mobile-first optimization</li>
        <li>Speed enhancements (minification, caching)</li>
      </ul>
    `
  },
  "fullstack": {
    title: "Full-Stack Websites",
    desc: `
      <p>I build complete full-stack websites, combining frontend and backend for real-world use.</p>
      <ul>
        <li>Responsive frontend using HTML, CSS, Bootstrap, Tailwind CSS and JavaScript</li>
        <li>Backend development with PHP</li>
        <li>Database integration with MySQL</li>
        <li>User authentication & admin dashboards</li>
        <li>Deployment on hosting servers (cPanel / XAMPP to live server)</li>
      </ul>
    `
  },
  "wordpress": {
    title: "WordPress Development",
    desc: `
      <p>I develop flexible and easy-to-manage WordPress websites.</p>
      <ul>
        <li>Custom theme development or customization</li>
        <li>Plugin integration & configuration</li>
        <li>WooCommerce setup for online stores</li>
        <li>SEO and speed optimization</li>
        <li>Training on how to manage your site</li>
      </ul>
    `
  },
  "laravel": {
    title: "Laravel Websites",
    desc: `
      <p>I create secure and scalable backend-driven websites using Laravel.</p>
      <ul>
        <li>Custom Laravel application development</li>
        <li>Database design & integration</li>
        <li>REST API development</li>
        <li>User authentication & role management</li>
        <li>Performance & security best practices</li>
      </ul>
    `
  }
};

// Hook modal elements
const modalTitle = document.getElementById("serviceModalLabel");
const modalBody = document.getElementById("serviceModalBody");
const serviceModal = new bootstrap.Modal(document.getElementById("serviceModal"));

// Open modal on service click
document.querySelectorAll(".service-item").forEach(item => {
  item.addEventListener("click", () => {
    const key = item.getAttribute("data-service");
    const { title, desc } = serviceDetails[key];

    // Fill modal
    modalTitle.textContent = title;
    modalBody.innerHTML = `<p class="text-white">${desc}</p>`;

    // Show modal
    serviceModal.show();
  });
});
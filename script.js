// ================================
// Medical Reminder Website
// script.js
// ================================

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to MediCare Reminder!");
});

// ================================
// Get Started Button
// ================================

const getStartedBtn = document.querySelector(".hero button");

if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
        // Change this later to your login page
        window.location.href = "pages/login.html";
    });
}

// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ================================
// Active Navigation
// ================================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });
});

// ================================
// Feature Card Hover Effect
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

// ================================
// Footer Year
// ================================

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} MediCare Reminder. All Rights Reserved.`;
}

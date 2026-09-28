
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function (link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML = `&copy; ${new Date().getFullYear()} Harriet Sarich. All Rights Reserved.`;
    }

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for your message!");
            form.reset();
        });
    }
});

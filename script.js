document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".carousel > div");
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove active class from all sections
            sections.forEach(section => section.classList.remove("active"));

            // Add active class to the corresponding section
            sections[index].classList.add("active");

            // Remove active class from all navbar links
            navLinks.forEach(nav => nav.classList.remove("active"));

            // Add active class to the clicked navbar link
            this.classList.add("active");
        });
    });
});

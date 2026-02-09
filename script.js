let sections = document.querySelectorAll("section");    // Select all sections (home, about, services, etc.)
let navLinks = document.querySelectorAll(".navbar a");  // Select all navbar links

window.addEventListener("scroll", () => {       // Run this code when user scrolls the page
    let current = "";

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 150;
        let sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {  // Remove active class from all navbar links
        link.classList.remove("active");
        // Add active class to the link of current section
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

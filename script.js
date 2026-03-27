let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let scrollY = window.scrollY;

    sections.forEach(section => {

        let sectionTop = section.offsetTop - 150;
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            document
                .querySelector('.navbar a[href="#' + sectionId + '"]')
                .classList.add("active");
        }

    });

});


// prevent all # links from jumping to top
let buttons = document.querySelectorAll('a[href="#"]');

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault(); // stop default jump
    });
});



//========MOBILE========

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function () {

    // NAVBAR ACTIVE LINK ON SCROLL
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {
        let current = "home";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + current
            );
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();


    // GAMES SLIDER - THREE CARDS AT A TIME
    const games = Array.from(document.querySelectorAll(".game-slide"));
    const nextButton = document.getElementById("nextGames");
    const prevButton = document.getElementById("prevGames");

    let currentGame = 0;

    function showGames() {
        games.forEach((game, index) => {
            const position = (index - currentGame + games.length) % games.length;

            game.style.display = position < 3 ? "" : "none";
        });
    }

    nextButton.addEventListener("click", function () {
        currentGame = (currentGame + 3) % games.length;
        showGames();
    });

    prevButton.addEventListener("click", function () {
        currentGame = (currentGame - 3 + games.length) % games.length;
        showGames();
    });

    showGames();


    // CONTACT FORM
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        formMessage.textContent = "Thank you! Your message has been received.";
        contactForm.reset();
    });


    // MOBILE MENU
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navbarContent");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (navMenu && navMenu.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
            }
        });
    });

});

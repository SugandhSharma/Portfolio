// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // MOBILE MENU
    // ==========================

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    const setMenu = (open) => {
        navLinks.classList.toggle("active", open);
        menuBtn.setAttribute("aria-expanded", String(open));
    };

    menuBtn.addEventListener("click", () => {
        setMenu(!navLinks.classList.contains("active"));
    });

    // ==========================
    // CLOSE MENU AFTER CLICK
    // ==========================

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => setMenu(false));
    });

    // Smooth scrolling is CSS (scroll-behavior:smooth) so the browser also
    // updates the URL hash and moves keyboard focus to the section.

    // ==========================
    // SCROLL TO TOP BUTTON
    // ==========================

    const topBtn = document.createElement("button");
    topBtn.innerHTML = '<i class="fa-solid fa-arrow-up" aria-hidden="true"></i>';
    topBtn.id = "topBtn";
    topBtn.type = "button";
    topBtn.setAttribute("aria-label", "Back to top");
    document.body.appendChild(topBtn);

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ==========================
    // SCROLL: ACTIVE LINK, NAVBAR SHADOW, TOP BUTTON
    // ==========================

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === "#" + current);
        });

        header.classList.toggle("sticky", window.scrollY > 50);
        topBtn.classList.toggle("show", window.scrollY > 400);

    });

    // ==========================
    // CONTACT FORM
    // ==========================
    // No backend: the form opens the visitor's mail client with the message
    // pre-filled. To collect submissions on a server instead, give the <form>
    // an action (e.g. Formspree) and delete this handler.

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            const { name, email, message } = form.elements;

            const subject = `Portfolio contact from ${name.value}`;
            const body = `${message.value}\n\n— ${name.value} (${email.value})`;

            window.location.href = "mailto:sugandhsharma586@gmail.com"
                + `?subject=${encodeURIComponent(subject)}`
                + `&body=${encodeURIComponent(body)}`;

            const btn = form.querySelector("button");
            btn.textContent = "Opening your mail app…";

            setTimeout(() => { btn.textContent = "Send Message"; }, 2500);

        });

    }

});

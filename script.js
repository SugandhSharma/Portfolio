// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // MOBILE MENU
    // ==========================

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if(menuBtn){

        menuBtn.addEventListener("click",()=>{

            navLinks.classList.toggle("active");

        });

    }

    // ==========================
    // CLOSE MENU AFTER CLICK
    // ==========================

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("active");

        });

    });

    // ==========================
    // SMOOTH SCROLL
    // ==========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    // ==========================
    // ACTIVE NAVBAR LINK
    // ==========================

    const sections=document.querySelectorAll("section");
    const navItems=document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const sectionTop=section.offsetTop-150;

            if(window.scrollY>=sectionTop){

                current=section.getAttribute("id");

            }

        });

        navItems.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    });

    // ==========================
    // NAVBAR SHADOW
    // ==========================

    const header=document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>50){

            header.classList.add("sticky");

        }

        else{

            header.classList.remove("sticky");

        }

    });

    // ==========================
    // SCROLL TO TOP BUTTON
    // ==========================

    const topBtn=document.createElement("button");

    topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

    topBtn.id="topBtn";

    document.body.appendChild(topBtn);

    topBtn.style.cssText=`

    position:fixed;
    right:25px;
    bottom:25px;
    width:55px;
    height:55px;
    border:none;
    border-radius:50%;
    background:#2563eb;
    color:white;
    font-size:20px;
    cursor:pointer;
    display:none;
    z-index:999;
    transition:.3s;

    `;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            topBtn.style.display="block";

        }

        else{

            topBtn.style.display="none";

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    // ==========================
    // SCROLL REVEAL
    // ==========================

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.2

    });

    document.querySelectorAll("section").forEach(section=>{

        observer.observe(section);

    });




    // ==========================
    // CERTIFICATIONS ANIMATION
    // ==========================

    const certCards = document.querySelectorAll(".cert-card");

    const certObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    certCards.forEach((card) => {

        certObserver.observe(card);

    });


    // ==========================
    // CONTACT FORM
    // ==========================

    const form=document.querySelector("form");

    if(form){

        form.addEventListener("submit",(e)=>{

            e.preventDefault();

            const btn=form.querySelector("button");

            btn.innerHTML="Message Sent ✓";

            btn.style.background="#16a34a";

            setTimeout(()=>{

                btn.innerHTML="Send Message";

                btn.style.background="#2563eb";

            },2500);

            form.reset();

        });

    }

});
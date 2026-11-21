// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        if(navLinks.style.display === "flex"){

            navLinks.style.display = "none";

        }else{

            navLinks.style.display = "flex";
            navLinks.style.flexDirection = "column";
            navLinks.style.position = "absolute";
            navLinks.style.top = "80px";
            navLinks.style.right = "20px";
            navLinks.style.background = "white";
            navLinks.style.padding = "20px";
            navLinks.style.borderRadius = "10px";
            navLinks.style.boxShadow =
            "0 10px 20px rgba(0,0,0,.15)";

        }

    });

}


// ==========================
// ROOM SEARCH BUTTON
// ==========================

const searchBtn = document.getElementById("searchBtn");

if(searchBtn){

    searchBtn.addEventListener("click",()=>{

        alert(
            "Room search feature ready. Connect it to your backend later."
        );

    });

}


// ==========================
// NEWSLETTER
// ==========================

const subscribeBtn =
document.querySelector(".newsletter button");

if(subscribeBtn){

    subscribeBtn.addEventListener("click",()=>{

        const email =
        document.querySelector(".newsletter input");

        if(email.value === ""){

            alert("Please enter your email.");

        }else{

            alert(
                "Thanks for subscribing to Sheraton Lagos updates!"
            );

            email.value = "";

        }

    });

}


// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements =
document.querySelectorAll(
".card, .featured-card, .facility-card, .testimonial, .image-placeholder"
);

const revealOnScroll = () => {

    revealElements.forEach((element)=>{

        const top =
        element.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){

            element.classList.add("show");

        }

    });

};

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

const buttons =
document.querySelectorAll("button");

buttons.forEach(button=>{

    button.addEventListener("click",(e)=>{

        const circle =
        document.createElement("span");

        const diameter =
        Math.max(
            button.clientWidth,
            button.clientHeight
        );

        const radius =
        diameter / 2;

        circle.style.width =
        circle.style.height =
        `${diameter}px`;

        circle.style.left =
        `${e.clientX - button.offsetLeft - radius}px`;

        circle.style.top =
        `${e.clientY - button.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple =
        button.getElementsByClassName(
            "ripple"
        )[0];

        if(ripple){

            ripple.remove();

        }

        button.appendChild(circle);

    });

});


// ==========================
// NAVBAR SHADOW ON SCROLL
// ==========================

window.addEventListener(
"scroll",
()=>{

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 5px 25px rgba(0,0,0,.2)";

}
else{

navbar.style.boxShadow =
"0 2px 15px rgba(0,0,0,.08)";

}

}
);


// ==========================
// GALLERY PLACEHOLDER EFFECT
// ==========================

const galleries =
document.querySelectorAll(
".gallery-grid .image-placeholder"
);

galleries.forEach(item=>{

item.addEventListener(
"mouseenter",
()=>{

item.style.borderColor =
"#111";

});

item.addEventListener(
"mouseleave",
()=>{

item.style.borderColor =
"#c8a96a";

});

});


// ==========================
// ROOM BOOK BUTTONS
// ==========================

document
.querySelectorAll(".featured-card button")
.forEach(btn=>{

btn.addEventListener("click",()=>{

alert(

"Booking page will open here. Connect this to your reservation system later."

);

});

});


// ==========================
// COUNTER ANIMATION
// ==========================

function startCounter(element,target){

let count = 0;

const speed = target / 100;

const update = ()=>{

if(count < target){

count += speed;

element.innerText =
Math.floor(count);

requestAnimationFrame(update);

}else{

element.innerText = target;

}

};

update();

}


// ==========================
// SMOOTH PAGE FADE
// ==========================

window.addEventListener(
"beforeunload",
()=>{

document.body.style.opacity = "0";

}
);


// ==========================
// CONTACT FORM
// ==========================

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

alert(
"Message Sent Successfully!"
);

contactForm.reset();

}
);

}


// ==========================
// HERO BUTTON EFFECTS
// ==========================

document
.querySelectorAll(".hero button")
.forEach(button=>{

button.addEventListener("mouseover",()=>{

button.style.transform =
"translateY(-5px) scale(1.05)";

});

button.addEventListener("mouseout",()=>{

button.style.transform =
"translateY(0) scale(1)";

});

});


// ==========================
// PRELOADER READY
// ==========================

window.addEventListener(
"load",
()=>{

console.log(
"Sheraton Lagos Hotel Website Loaded Successfully"
);

}
);
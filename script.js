// var typed = new Typed('#element', {
//     strings: ['Web Developer', 'Programmer', 'Student'],
//     typeSpeed: 75,
//     backSpeed: 50,
//     loop: true
// });

// const cursor = document.getElementById('cursor');

// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.clientX + 'px';
//     cursor.style.top = e.clientY + 'px';
// });

// document.addEventListener('mouseout', () => {
//     cursor.style.display = 'none';
// });

// document.addEventListener('mouseover', () => {
//     cursor.style.display = 'block';
// });

// document.addEventListener('mousedown', () => {
//     cursor.style.transform = 'scale(0.8)';
// });

// document.addEventListener('mouseup', () => {
//     cursor.style.transform = 'scale(1)';
// });


// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


// gsap.from('nav', { duration: 1, y: '-100%', ease: 'bounce' });
// gsap.from('.firstSection > div', { duration: 1, opacity: 0, x: -50, stagger: 0.2 });
// gsap.from('.secondSection .vertical', {
//     duration: 1,
//     opacity: 0,
//     y: 50,
//     stagger: 0.2,
//     scrollTrigger: {
//         trigger: '.secondSection',
//         start: 'top center'
//     }
// });

// gsap.from('.techItem', {
//     duration: 0.8,
//     opacity: 0,
//     y: 50,
//     stagger: 0.1,
//     scrollTrigger: {
//         trigger: '.techSection',
//         start: 'top center'
//     }
// });

// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const parallax = document.querySelector('.firstSection');
//     parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
// });

// const techItems = document.querySelectorAll('.techItem');
// techItems.forEach(item => {
//     item.addEventListener('mouseenter', () => {
//         gsap.to(item, { scale: 1.05, duration: 0.3 });
//     });
//     item.addEventListener('mouseleave', () => {
//         gsap.to(item, { scale: 1, duration: 0.3 });
//     });
// });

// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselItems = document.querySelectorAll('.carousel-item');

// let counter = 0;
// const size = carouselItems[0].clientWidth;
// const visibleItems = 5; // Number of items visible at once

// // Clone the first 'visibleItems' number of items and append them to the end
// for (let i = 0; i < visibleItems; i++) {
//   const clone = carouselItems[i].cloneNode(true);
//   carouselSlide.appendChild(clone);
// }

// function moveCarousel() {
//   counter++;
//   carouselSlide.style.transition = "transform 0.5s ease-in-out";
//   carouselSlide.style.transform = `translateX(${-size * counter}px)`;

//   if (counter >= carouselItems.length) {
//     setTimeout(() => {
//       carouselSlide.style.transition = "none";
//       counter = 0;
//       carouselSlide.style.transform = `translateX(0)`;
//     }, 500);
//   }

//   updateActiveItem();
// }

// function updateActiveItem() {
//   const items = document.querySelectorAll('.carousel-item');
//   items.forEach((item, index) => {
//     item.classList.remove('active');
//     if (index === (counter + 2) % items.length) {
//       item.classList.add('active');
//     }
//   });
// }

// setInterval(moveCarousel, 3000); // Change slide every 3 seconds

// // Initial setup
// carouselSlide.style.transform = `translateX(-${size * counter}px)`;
// updateActiveItem();

document.addEventListener("DOMContentLoaded", function () {
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselItems = Array.from(document.querySelectorAll(".carousel-item"));

    // Clone elements to create an infinite scrolling effect
    const cloneCount = carouselItems.length; // Number of clones
    carouselItems.forEach(item => {
        const clone = item.cloneNode(true);
        carouselSlide.appendChild(clone);
    });

    // Set up GSAP animation for infinite scrolling
    gsap.to(carouselSlide, {
        x: `-=${carouselItems.length * 220}`, // Adjust based on item width + gap
        duration: 20, // Adjust speed
        ease: "linear",
        repeat: -1 // Infinite loop
    });

    // Custom cursor effect
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseout', () => cursor.style.display = 'none');
    document.addEventListener('mouseover', () => cursor.style.display = 'block');
    document.addEventListener('mousedown', () => cursor.style.transform = 'scale(0.8)');
    document.addEventListener('mouseup', () => cursor.style.transform = 'scale(1)');

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // GSAP animations for various sections
    gsap.from('nav', { duration: 1, y: '-100%', ease: 'bounce' });
    gsap.from('.firstSection > div', { duration: 1, opacity: 0, x: -50, stagger: 0.2 });
    gsap.from('.techItem', {
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.techSection',
            start: 'top center'
        }
    });

    // Parallax effect for first section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelector('.firstSection').style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Hover animation for tech items
    document.querySelectorAll('.techItem').forEach(item => {
        item.addEventListener('mouseenter', () => gsap.to(item, { scale: 1.05, duration: 0.3 }));
        item.addEventListener('mouseleave', () => gsap.to(item, { scale: 1, duration: 0.3 }));
    });
});



// ----------------------------
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.style.color = "red";
            formMessage.textContent = "Please fill in all fields.";
            return;
        }

        if (!validateEmail(email)) {
            formMessage.style.color = "red";
            formMessage.textContent = "Please enter a valid email address.";
            return;
        }

        formMessage.style.color = "green";
        formMessage.textContent = "Your message has been sent successfully!";
        form.reset();
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // GSAP Animation for Contact Section
    gsap.from(".contactSection", {
        duration: 1,
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: ".contactSection",
            start: "top center"
        }
    });
});

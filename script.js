var typed = new Typed('#element', {
    strings: ['Web Developer', 'Programmer', 'Student'],
    typeSpeed: 75,
    backSpeed: 50,
    loop: true
});

const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mouseout', () => {
    cursor.style.display = 'none';
});

document.addEventListener('mouseover', () => {
    cursor.style.display = 'block';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


gsap.from('nav', { duration: 1, y: '-100%', ease: 'bounce' });
gsap.from('.firstSection > div', { duration: 1, opacity: 0, x: -50, stagger: 0.2 });
gsap.from('.secondSection .vertical', {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.secondSection',
        start: 'top center'
    }
});

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

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.firstSection');
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
});

const techItems = document.querySelectorAll('.techItem');
techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.05, duration: 0.3 });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.3 });
    });
});

const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');

let counter = 0;
const size = carouselItems[0].clientWidth;
const visibleItems = 5; // Number of items visible at once

// Clone the first 'visibleItems' number of items and append them to the end
for (let i = 0; i < visibleItems; i++) {
  const clone = carouselItems[i].cloneNode(true);
  carouselSlide.appendChild(clone);
}

function moveCarousel() {
  counter++;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;

  if (counter >= carouselItems.length) {
    setTimeout(() => {
      carouselSlide.style.transition = "none";
      counter = 0;
      carouselSlide.style.transform = `translateX(0)`;
    }, 500);
  }

  updateActiveItem();
}

function updateActiveItem() {
  const items = document.querySelectorAll('.carousel-item');
  items.forEach((item, index) => {
    item.classList.remove('active');
    if (index === (counter + 2) % items.length) {
      item.classList.add('active');
    }
  });
}

setInterval(moveCarousel, 3000); // Change slide every 3 seconds

// Initial setup
carouselSlide.style.transform = `translateX(-${size * counter}px)`;
updateActiveItem();
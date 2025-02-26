// Cache DOM elements
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');
const preloader = document.getElementById('preloader');
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

let particles = [];

// Smooth scrolling for nav links
document.addEventListener('DOMContentLoaded', () => {
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    });
  });
});

// Hide preloader on full page load
window.addEventListener('load', () => {
  preloader.style.display = 'none';
});

// Set canvas size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', () => {
  resizeCanvas();
  initParticles(); // Reinitialize particles on resize
});

// Particle class for canvas animation
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2
    };
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.draw();
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    // Bounce particles off the edges
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y;
    }
  }
}

// Initialize particles
function initParticles() {
  particles = [];
  const particleCount = 100; // Adjust as needed
  for (let i = 0; i < particleCount; i++) {
    const radius = Math.random() * 3 + 1;
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * (canvas.height - radius * 2) + radius;
    particles.push(new Particle(x, y, radius, 'white'));
  }
}
initParticles();

// Animate particles
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(particle => particle.update());
}
animate();

// Active nav link tracking using Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -60% 0px', // Adjust based on your header height
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').substring(1) === id);
      });
    }
  });
}, observerOptions);

// Observe each section
sections.forEach(section => observer.observe(section));

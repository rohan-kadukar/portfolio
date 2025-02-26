(() => {
  const navbar = document.querySelector('.navbar'),
    navLinks = document.querySelectorAll('.navbar a'),
    sections = document.querySelectorAll('section'),
    preloader = document.getElementById('preloader'),
    canvas = document.getElementById('background-canvas'),
    ctx = canvas.getContext('2d');
  let particles = [];

  // Smooth scrolling using event delegation
  navbar.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (link && link.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (target) {
        window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
      }
    }
  });

  // Hide preloader on window load
  window.addEventListener('load', () => preloader.style.display = 'none');

  // Canvas setup and particle initialization
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const initParticles = () => {
    particles = [];
    const count = 100;
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 3 + 1,
        x = Math.random() * (canvas.width - 2 * r) + r,
        y = Math.random() * (canvas.height - 2 * r) + r;
      particles.push({
        x, y, r,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2
      });
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      // Update position and bounce off edges
      p.x += p.vx;
      p.y += p.vy;
      if (p.x + p.r > canvas.width || p.x - p.r < 0) p.vx = -p.vx;
      if (p.y + p.r > canvas.height || p.y - p.r < 0) p.vy = -p.vy;
    });
    requestAnimationFrame(animate);
  };

  // Initialize and handle canvas resize
  resizeCanvas();
  initParticles();
  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });
  animate();

  // Intersection Observer for active nav link highlighting
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href').slice(1) === id);
        });
      }
    });
  }, { rootMargin: '0px 0px -60% 0px', threshold: 0.1 });
  sections.forEach(sec => observer.observe(sec));
})();

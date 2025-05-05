const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function setupCanvas() {
  canvas.width = window.innerWidth * 0.8; // Adjust canvas size for better fit on small screens
  canvas.height = window.innerHeight * 0.8; // Adjust canvas size for better fit on small screens
}

setupCanvas();

const particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.radius = Math.random() * 2;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fill();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) {
      this.vx = -this.vx;
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.vy = -this.vy;
    }
  }
}

function createParticles() {
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.draw();
    particle.update();
  });
}

createParticles();
animate();

window.addEventListener('resize', () => {
  setupCanvas();
  particles.length = 0;
  createParticles();
});

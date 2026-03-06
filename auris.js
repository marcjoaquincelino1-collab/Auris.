const orb = document.querySelector(".auris-orb");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let orbX = mouseX;
let orbY = mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {

  // Smooth follow
  orbX += (mouseX - orbX) * 0.08;
  orbY += (mouseY - orbY) * 0.08;

  orb.style.transform = `translate(${orbX}px, ${orbY}px)`;

  requestAnimationFrame(animate);
}

animate();
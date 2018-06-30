const canvas = document.getElementById("canvas");

const context = canvas.getContext('2d');

const forceText = document.getElementById("force");

const arc = {
  x: 100,
  y: 100,
  r: 50,
  maxR: 200,
  fill: "rgba(0, 0, 255, 0.25)",
  draw() {
    context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
    context.fillStyle = this.fill;
  }
}

init();

function init() {
  window.addEventListener('resize', resizeCanvas, false);

  canvas.addEventListener('touchmove', touch, false);

  canvas.addEventListener('touchend', () => context.clearRect(0, 0, canvas.width, canvas.height));

  resizeCanvas();
}

function touch(event){
  event.preventDefault();

  let force = event.touches[0].force;

  forceText.innerHTML = `Force: ${force.toFixed(2)}`;

  arc.x = event.touches[0].screenX;
  arc.y = event.touches[0].screenY;
  arc.r = force * arc.maxR;
  arc.fill = `rgba(0, 0, 255, ${force})`

  draw();
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  arc.draw();
  context.fill();
}

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

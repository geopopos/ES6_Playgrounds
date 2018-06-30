const canvas = document.getElementById("canvas");

const context = canvas.getContext('2d');

const forceText = document.getElementById("force");

const arc = {
  x: 100,
  y: 100,
  r: 50,
  maxR: 200,
  opacity: 0.25,
  draw() {
    context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
    const grd = context.createRadialGradient(this.x,this.y,this.r/2,this.x,this.y,this.r);
    grd.addColorStop(0, `rgba(20, 20, 20, ${this.opacity})`);
    grd.addColorStop(1, `rgba(235, 235, 235, 0)`);
    context.fillStyle = grd;
    context.fill();
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
  arc.r = force * event.touches[0].radiusX * 7;
  arc.opacity = force/2.3;

  draw();
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  arc.draw();
}

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

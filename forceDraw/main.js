const canvas = document.getElementById("canvas");

const context = canvas.getContext('2d');

const arc = {
  prevX: null,
  prevY: null,
  x: 100,
  y: 100,
  r: 1,
  maxR: 7,
  draw() {
    // context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
    // context.fillStyle = "black";
    context.fill();
    if (this.prevX){
      context.moveTo(this.prevX, this.prevY);
      context.lineTo(this.x, this.y);
      context.lineWidth = this.r;
      context.stroke();
    }
  }
}

init();

function init() {
  window.addEventListener('resize', resizeCanvas, false);

  canvas.addEventListener('touchmove', touch, false);

  canvas.addEventListener('touchend', () => arc.prevX = arc.prevY = null);

  resizeCanvas();
}

function touch(event){
  event.preventDefault();

  let force = event.touches[0].force;

  arc.x = event.touches[0].screenX - canvas.offsetLeft;
  arc.y = event.touches[0].screenY - canvas.offsetTop;
  arc.r = force * force;

  draw();

  arc.prevX = arc.x;
  arc.prevY = arc.y;
}

function draw() {
  context.beginPath();
  arc.draw();
}

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

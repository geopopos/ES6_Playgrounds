// function doSomething(event){
//   console.log(`screen: (${event.screenX},${event.screenY}),
//   page: (${event.pageX},${event.pageY}),
//   client: (${event.clientX},${event.clientY})`);
// }
//
// addEventListener('click', doSomething);

const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('mousedown'));
clickParagraph.addEventListener('mouseup', () => console.log('mouseup'));

const dblclickParagraph = document.getElementById('dblclick');

dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event){
  event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', (event) => console.log(`x: ${event.clientX} y: ${event.clientY}`));

addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
addEventListener('keypress', (event) => document.body.innerHTML = document.body.innerHTML + event.key);

// check if user pressed the C key while holding down the control key
addEventListener('keydown', (event) => {
  if(event.key == 'c' && event.ctrlKey) {
    console.log('Action cancelled');
  }
});

// check if the shift key was held down while the mouse was clicked
addEventListener('click', (event) => {
  if(event.shiftKey){
    console.log('A Shifty Click!');
  }
});


// TOUCH EVENTS
addEventListener('touchend', () => document.getElementById("touch").innerHTML = "Touch Stopped");

const touchPressure = document.getElementById('touchpressure');

console.log(touchPressure);

addEventListener('touchmove', (event) => touchPressure.innerHTML = `Touch Force: ${event.targetTouches[0].force}`);

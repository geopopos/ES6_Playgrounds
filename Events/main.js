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

// REMOVING EVENT LISTENERS
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);

function remove(event) {
  console.log('Enjoy this while it lasts!');
  onceParagraph.style.backgroundColor = 'pink';
  onceParagraph.removeEventListener('click', remove);
}

// STOPPING DEFAULT BEHAVIOR
const brokenLink = document.getElementById('broken');

brokenLink.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Broken Link');
});


// EVENT PROPAGATION
// Bubbling VS Capture
// BUBBLING: used by setting the third parameter in the addEventListener function to false (this is default)
// basically events are fired from the element clicked on and then bubble up to the parents all the way to the root
// so when the li is clicked on 'Clicked on li' will populate the console first then 'Clicked on ul'
// Capture: used by setting the third parameter in the addEventListener function to true
//basically events are fired from the root element all the way down through the children to the element clicked on
// so when the li is clicked on 'Clicked on ul' will populate the console first then 'Clicked on li'
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

// ulElement.addEventListener('click', (event) => console.log('Clicked on ul'), false);
// liElement.addEventListener('click', (event) => console.log('Clicked on li'), true);


// STOPPING THE BUBBLING PHASE
// liElement.addEventListener('click', (event) => {
//   console.log('clicked on li');
//   event.stopPropagation();
// }, false);


// EVENT DELEGATION
ulElement.addEventListener('click', highlight);

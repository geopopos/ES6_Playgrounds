// const form = document.forms[0];
//
// const form = document.getElementsByTagName('form')[0]
//
// const form = document.forms.search;
const form = document.forms['search'];

const [input, button] = form.elements;

// const input = form.searchInput;
//
// const input = form['searchInput'];

// input.addEventListener('focus', () => alert('focused'), false);

input.addEventListener('blur', () => alert('blurred'), false);

input.addEventListener('change', () => alert('changed'), false);

form.addEventListener('submit', search, false);

function search(event) {
  alert(`You searched for ${input.value}`);
  event.preventDefault();
}

input.value = "Search Here";

input.addEventListener('focus', function() {
  if (input.value === 'Search Here') {
    input.value = '';
  }
}, false);

input.addEventListener('blur', function() {
  if (input.value === '') {
    input.value = 'Search Here';
  }
}, false);

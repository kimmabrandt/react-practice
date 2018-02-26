import { getBoxStyle } from './Spiral.js'

const boxes = [];
const fizz = React.createElement('strong', {}, 'Fizz');
const buzz = React.createElement('strong', {}, 'Buzz');
const fizzbuzz = React.createElement('strong', {}, 'FizzBuzz');

for (var i = 0; i < 20; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    boxes[i] = React.createElement('div', { style: getBoxStyle(i), key: i }, fizzbuzz)
  }
  else if (i % 3 == 0) {
    boxes[i] = React.createElement('div', { style: getBoxStyle(i), key: i }, fizz)
  }
  else if (i % 5 == 0) {
    boxes[i] = React.createElement('div', { style: getBoxStyle(i), key: i }, buzz)
  }
  else {
    boxes[i] = React.createElement('div', { style: getBoxStyle(i), key: i }, i)
  }
}

ReactDOM.render(
  React.createElement('div', {}, boxes),
  document.getElementById('app')
)

///// RULES /////
// must draw 15 boxes in a spiral num 1-15
// if # is divisible by 3, box display 'fizz' in strong type
// if # divisible by 5, box display 'buzz' in strong type
// if # divisible by 3 and 5, display 'fizzbuzz' in strong type
// otherwise display # in reg type

import _ from 'lodash';

function component1() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component1());



// Importing my function
import myName from './myName';

function component2() {
  const element = document.createElement('div');

  // Using my function
  element.textContent = myName('Stephanie');
  return element;
}

document.body.appendChild(component2());
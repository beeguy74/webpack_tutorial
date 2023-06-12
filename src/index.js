import _ from 'lodash';
import printMe from './print.js';

function componentDefault() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['I', 'am', 'default'], ' ');
  return element;
}

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(componentDefault());
document.body.appendChild(component());

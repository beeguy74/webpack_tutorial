import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function componentDefault() {
  const element = document.createElement('div');

  // Lodash, now imported
  element.innerHTML = _.join(['I', 'am', 'default'], ' ');
  return element;
}

function component() {
  const element = document.createElement('div');

  // Lodash, now imported
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(componentDefault());
document.body.appendChild(component());

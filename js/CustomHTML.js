'use strict';

class CustomHTML {
  constructor (tagName, attributes, content) {
    this.tagName = tagName;
    this.attributes = attributes;
    this.content = content;
  }
  
  render (selector) {
    const element = document.createElement(this.tagName);

    for (let property in this.attributes) {
      if (property === 'className') {
        element.classList.add(this.attributes[property]);
      } else {
        element.setAttribute(property, this.attributes[property]);
      }
    }

    element.innerHTML = this.content;

    const parent = document.querySelector(selector);
    if (!parent) {
      console.log('Error.Parent element not found.');
    } else {
      parent.insertBefore(element, parent.firstChild);
    }
  }
}
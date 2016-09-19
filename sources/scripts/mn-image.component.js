'use strict';

let prototype = Object.create(HTMLElement.prototype);
prototype.createdCallback = mnImage;
document.registerElement('mn-image', {prototype});

function mnImage() {
  let element = this;

  let imageAttributes = [
    {
      name: 'src',
    },
    {
      name: 'width',
    },
    {
      name: 'height',
    },
  ];

  // image element
  let image = document.createElement('img');
  imageAttributes.map(setImageAttribute);
  element.appendChild(image);

  function setImageAttribute(attribute) {
    let isDefaultAttribute = attribute.hasOwnProperty('default');
    let attributeValue = element.getAttribute(attribute.name);

    if (isDefaultAttribute) {
      let isValidValue = attribute.hasOwnProperty('values')
        && attribute.values.indexOf(attributeValue) >= 0;

      let value = isValidValue
        ? attributeValue
        : attribute.default;

      image.setAttribute(attribute.name, value);
    } else if (attributeValue) {
      image.setAttribute(attribute.name, attributeValue);
    }
  }
}

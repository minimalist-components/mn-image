'use strict';

let prototype = Object.create(HTMLElement.prototype);
prototype.createdCallback = mnImage;
document.registerElement('mn-image', {
  prototype,
  // extends: 'a',
});

function mnImage() {
  let element = this;

  let imageAttributes = [
    {
      name: 'src',
    },
  ];

  // image element
  let image = document.createElement('img');
  imageAttributes.map(setImageAttribute);
  element.appendChild(image);

  // shine element
  let shine = document.createElement('div');
  shine.classList.add('shine');
  element.appendChild(shine);

  element.addEventListener('mouseenter', setRotation3d);
  element.addEventListener('mousemove', setRotation3d);
  element.addEventListener('touchstart', setRotation3d);
  element.addEventListener('touchmove', setRotation3d);
  element.addEventListener('mouseout', unsetRotate3d);

  function setRotation3d(event) {
    let bounds = this.getBoundingClientRect();
    let percentX = (event.clientX - bounds.left) / bounds.width;
    let percentY = (event.clientY - bounds.top) / bounds.height;
    let angles = 20;
    let rotateY = (angles * (-percentX * 2)) + angles;
    let rotateX = (angles * (percentY * 2)) - angles;
    this.style.transform = `
      scale(1.07)
      perspective(1000px)
      rotateY(${rotateY}deg)
      rotateX(${rotateX}deg)
    `;
    // console.log(event.clientX - bounds.left);
    // let translateX = (bounds.width  / 2) - (event.clientX - bounds.left);
    // let translateY;
    // console.log(translateX);
    // this.style.transform = `translate(${translateX)}px ${parseInt(translateY)}px)`;
  }

  function unsetRotate3d() {
    this.style.transform = '';
  }

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

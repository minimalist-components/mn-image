let prototype = Object.create(HTMLElement.prototype);
prototype.createdCallback = mnImage;
document.registerElement('mn-image', {
  prototype,
});

function mnImage() {
  let element = this;

  let imageAttributes = [
    {
      name: 'src',
    },
    {
      name: 'alt',
    },
  ];

  // image element
  let image = document.createElement('img');
  imageAttributes.map(setImageAttribute);
  element.appendChild(image);

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

class MnImage extends HTMLElement {

}

customElements.define('mn-image', MnImage);

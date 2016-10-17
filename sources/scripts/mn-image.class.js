class MnImage extends HTMLElement {
  constructor(self) {
    self = super(self);
    this.setImage();
    return self;
  }

  setImage() {
    let element = this;
    let attributes = [
      {
        name: 'src',
      },
      {
        name: 'alt',
      },
    ];

    // image element
    let image = document.createElement('img');
    attributes.map(setAttribute);
    this.appendChild(image);

    this.addEventListener('mouseenter', setRotation3d);
    this.addEventListener('mousemove', setRotation3d);
    this.addEventListener('mouseout', unsetRotate3d);

    function setRotation3d(event) {
      if (this.parentElement.tagName === 'A') {
        let bounds = this.getBoundingClientRect();
        let isTouchEvent = event.type.startsWith('touch');

        let clientX = isTouchEvent
          ? event.touches[0].clientX
          : event.clientX;

        let clientY = isTouchEvent
          ? event.touches[0].clientY
          : event.clientY;

        let percentX = (clientX - bounds.left) / bounds.width;
        let percentY = (clientY - bounds.top) / bounds.height;
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
    }

    function unsetRotate3d() {
      this.style.transform = '';
    }

    function setAttribute(attribute) {
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
}

customElements.define('mn-image', MnImage);

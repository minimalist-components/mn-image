class MnImage extends HTMLElement {
  constructor(self) {
    self = super(self);
    this.setImage();
    this.setOutline();
    this.setRotation();
    this.setBlur();
    this.setClick();
    return self;
  }

  setOutline() {
    if (this.parentElement.tagName === 'A') {
      this.parentElement.classList.add('no-outline');
    }
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
      {
        name: 'title',
      },
      {
        name: 'draggable',
      },
    ];

    // image element
    let image = document.createElement('img');
    attributes.map(setAttribute);
    this.appendChild(image);

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

  setRotation() {
    this.addEventListener('mouseenter', setRotation3d);
    this.addEventListener('mousemove', setRotation3d);
    this.addEventListener('mouseleave', unsetRotate3d);

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
  }

  setBlur() {
    if (this.parentElement.tagName === 'A') {
      this.parentElement.addEventListener('click', blur);
      this.parentElement.addEventListener('mouseleave', blur);
      this.parentElement.addEventListener('touchmove', blur);
    }

    function blur() {
      this.blur();
    }
  }

  setClick() {
    if (this.parentElement.tagName === 'A') {
      this.parentElement.addEventListener('mousedown', clicked);
      this.parentElement.addEventListener('mouseup', unclicked);
    }

    let oldTransform;

    function clicked() {
      let mnImage = this.querySelector('mn-image');
      oldTransform = mnImage.style.transform;
      let transform = mnImage
        .style
        .transform
        .replace('scale(1.07)', 'scale(1.03)')
        .replace(/rotateX(.+)/, 'rotateX(0)')
        .replace(/rotateY(.+)/, 'rotateY(0)');

      mnImage.style.transform = transform;
    }

    function unclicked() {
      let mnImage = this.querySelector('mn-image');
      mnImage.style.transform = oldTransform;
    }
  }
}

customElements.define('mn-image', MnImage);

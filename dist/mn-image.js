"use strict";function mnImage(){function setImageAttribute(attribute){var isDefaultAttribute=attribute.hasOwnProperty("default"),attributeValue=element.getAttribute(attribute.name);if(isDefaultAttribute){var isValidValue=attribute.hasOwnProperty("values")&&attribute.values.indexOf(attributeValue)>=0,value=isValidValue?attributeValue:attribute.default;image.setAttribute(attribute.name,value)}else attributeValue&&image.setAttribute(attribute.name,attributeValue)}var element=this,imageAttributes=[{name:"src"},{name:"width"},{name:"height"}],image=document.createElement("img");imageAttributes.map(setImageAttribute),element.appendChild(image)}var prototype=Object.create(HTMLElement.prototype);prototype.createdCallback=mnImage,document.registerElement("mn-image",{prototype:prototype});
//# sourceMappingURL=mn-image.js.map

"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MnImage=function(_HTMLElement){function MnImage(self){var _this,_ret;return _classCallCheck(this,MnImage),self=_this=_possibleConstructorReturn(this,(MnImage.__proto__||Object.getPrototypeOf(MnImage)).call(this,self)),_this.setImage(),_this.setOutline(),_this.setRotation(),_this.setBlur(),_this.setClick(),_ret=self,_possibleConstructorReturn(_this,_ret)}return _inherits(MnImage,_HTMLElement),_createClass(MnImage,[{key:"setOutline",value:function(){"A"===this.parentElement.tagName&&this.parentElement.classList.add("no-outline")}},{key:"setImage",value:function(){function setAttribute(attribute){var isDefaultAttribute=attribute.hasOwnProperty("default"),attributeValue=element.getAttribute(attribute.name);if(isDefaultAttribute){var isValidValue=attribute.hasOwnProperty("values")&&attribute.values.indexOf(attributeValue)>=0,value=isValidValue?attributeValue:attribute.default;image.setAttribute(attribute.name,value)}else attributeValue&&image.setAttribute(attribute.name,attributeValue)}var element=this,attributes=[{name:"src"},{name:"alt"},{name:"title"},{name:"draggable"}],image=document.createElement("img");attributes.map(setAttribute),this.appendChild(image)}},{key:"setRotation",value:function(){function setRotation3d(event){if("A"===this.parentElement.tagName){var bounds=this.getBoundingClientRect(),isTouchEvent=event.type.startsWith("touch"),clientX=isTouchEvent?event.touches[0].clientX:event.clientX,clientY=isTouchEvent?event.touches[0].clientY:event.clientY,percentX=(clientX-bounds.left)/bounds.width,percentY=(clientY-bounds.top)/bounds.height,angles=20,rotateY=angles*(2*-percentX)+angles,rotateX=angles*(2*percentY)-angles;this.style.transform="\n          scale(1.07)\n          perspective(1000px)\n          rotateY("+rotateY+"deg)\n          rotateX("+rotateX+"deg)\n        "}}function unsetRotate3d(){this.style.transform=""}this.addEventListener("mouseenter",setRotation3d),this.addEventListener("mousemove",setRotation3d),this.addEventListener("mouseleave",unsetRotate3d)}},{key:"setBlur",value:function(){function blur(){this.blur()}"A"===this.parentElement.tagName&&(this.parentElement.addEventListener("click",blur),this.parentElement.addEventListener("mouseleave",blur),this.parentElement.addEventListener("touchmove",blur))}},{key:"setClick",value:function(){function clicked(){var mnImage=this.querySelector("mn-image");oldTransform=mnImage.style.transform;var transform=mnImage.style.transform.replace("scale(1.07)","scale(1.03)").replace(/rotateX(.+)/,"rotateX(0)").replace(/rotateY(.+)/,"rotateY(0)");mnImage.style.transform=transform}function unclicked(){var mnImage=this.querySelector("mn-image");mnImage.style.transform=oldTransform}"A"===this.parentElement.tagName&&(this.parentElement.addEventListener("mousedown",clicked),this.parentElement.addEventListener("mouseup",unclicked));var oldTransform=void 0}}]),MnImage}(HTMLElement);customElements.define("mn-image",MnImage);
//# sourceMappingURL=mn-image.js.map

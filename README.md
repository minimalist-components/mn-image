[![Bower version](https://badge.fury.io/bo/mn-image.svg)](https://badge.fury.io/bo/mn-image)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   


# mn-image

A image component with 3d perspective on hover/focus.

See the [demo](https://minimalist-components.github.io/mn-image/)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-image/master/sources/imgs/preview.gif)](http://codepen.io/darlanmendonca/full/BLLvBW)

### Install

```sh
bower install --save mn-image
```

Or just download the main files ```dist/mn-image.css, dist/mn-image.js``` in your project, and make a reference to their, like:

Or just download the main files, located in [dist/](https://github.com/minimalist-components/mn-image/tree/master/dist)

### Usage

And then, in your html, you can use the tag ```mn-image``` i.e.

```html
<mn-image src="path/to/an/image"></mn-image>
```

### 3d perspective

If you want a 3d perspective on mouse over, or focus (both only for desktop) just put the component inside a tag a

```html
<a href="#">
  <mn-image src="path/to/an/image"></mn-image>
</a>
```

And if you want more, the following attributes from image are supported in this component

- [src](http://www.w3schools.com/tags/att_img_src.asp)
- [alt](http://www.w3schools.com/tags/att_img_alt.asp)
- [title](http://www.w3schools.com/tags/att_global_title.asp)
- [draggable](http://www.w3schools.com/tags/att_global_draggable.asp)

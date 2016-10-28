# Minimalist image

A image component with 3d perspective on hover/focus.

See the [demo](http://codepen.io/darlanmendonca/full/BLLvBW/)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-image/master/sources/imgs/preview.gif)](http://codepen.io/darlanmendonca/full/BLLvBW)

### Install

With bower

```sh
bower install --save mn-image
```

Or just download the main files ```dist/mn-image.css, dist/mn-image.js``` in your project, and make a reference to their, like:

```html
<link rel="stylesheet" href="path/to/dist/mn-image.css">
<script src="path/to/dist/vendor.js"></script>
<script src="path/to/dist/mn-image.js"></script>
```

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

And if you want more, the following attributes from inputs are supported in this component

- [src](http://www.w3schools.com/tags/att_img_src.asp)
- [alt](http://www.w3schools.com/tags/att_img_alt.asp)
- [title](http://www.w3schools.com/tags/att_global_title.asp)
- [draggable](http://www.w3schools.com/tags/att_global_draggable.asp)

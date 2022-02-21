![Image of Logo](https://github.com/DennisVoelk/Scrolldini/blob/master/.github/Logo.png)
<p align="center", style="width: 50%;">
<h3 align="center">Easily toggle animations and CSS-classes on scroll.</h3>
</p>
<br>
<h1>What is Scrolldini?</h1>
Scrolldini lets you easily add animations or CSS-classes to an element when it enters or leaves the viewport. This library works HTML-attributes, so you don't have to write custom JavaScript. However, if you want to, you can also configure your animated elements in JavaScript.
<br><br>

<h1>How do you use Scrolldini?</h1>
<b>Step 1:</b> Add the script to your document.<br>

```html
<script src="scrolldini.js"></script>
```

<b>Optional:</b> Add this script if you want to execute Scrolldini once upon page-load.<br>

```html
<script>Scrolldini.checkVisibility()</script>
```


<b>Step 2:</b> Add "sd" to the class-list of your element.<br>

```html
<div class="sd">
```


<b>Step 3:</b> Add the desired HTML-attributes.<br>

```html
<div class="sd" sd-toggle-class="slide-in-right">
```

<b>Done</b> 🎉
<br><br>


<h1>Available Attributes</h1>
<b>Toggling a class of your class-list</b><br>

```
sd-toggle-class="your-class-name"
```


<b>Adding a class to your class-list</b><br>

```
sd-add-class="your-class-name"
```


<b>Removing a class from your class-list</b><br>

```
sd-remove-class="your-class-name"
```

</b><br>

<b>Adding a clear-zone for scrolling to the top of the page</b> <i>(in this case with a height of 150)</i><br>

```
sd-clear-top="150"
```


<b>Adding a clear-zone for scrolling to the bottom of the page</b> <i>(in this case with a height of 150)</i><br>

```
sd-clear-bottom="150"
```
> 💡 A clear-zone is like padding for your screen. If you don't add a clear-zone, Scrolldini will be triggered once a part your element is in the viewport. With clear-zones, Scrolldini will be triggered only once a larger portion of your element is in the viewport.


<br><br>
<h1>JavaScript usage</h1>
Scrolldini is a static class. You can access it's functionality everywhere.


<br>

<b>Adding a DOM element to Scrolldini</b><br>
``` javascript
var myElement = document.getElementById("box");
Scrolldini.addElement(myElement);
```
You can also manually create a ScrolldiniElement and add it to your Scrolldini object.
``` javascript
var myDOMElement = document.getElementById("box");
const myScrolldiniElement = new ScrolldiniElement(myDOMElement, "sd");
Scrolldini.addElement(myScrolldiniElement);
```
> 💡 The second parameter of the ScrolldiniElement-class specifies the prefix of the Scrolldini-attributes. The default prefix is "sd".

<br><br>

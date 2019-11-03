![Image of Logo](https://github.com/DennisVoelk/Scrolldini/blob/master/.github/Logo.png)
<p align="center", style="width: 50%;">
<h3 align="center">Easily add scroll animations to elements, with or without JavaScript.</h3>
</p>
<p align="center">
⚠️ Scrolldini is currently under development. ⚠️
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


<b>Step 2:</b> Add "sd" to your class-list.<br>

```html
<div class="sd">
```


<b>Step 3:</b> Add the desired HTML-Attribute.<br>

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

<b>Adding a clear-zone to the top of the viewport</b> <i>(in this case with a height of 150)</i><br>

```
sd-clear-top="150"
```


<b>Adding a clear-zone to the bottom of the viewport</b> <i>(in this case with a height of 150)</i><br>

```
sd-clear-bottom="150"
```
> 💡 If an element is inside the clear-zone, the scrolldini-action will be executed.


<br><br>
<h1>JavaScript usage</h1>
You can also access all Scrolldini functions via JavaScript.

<br><br>
<div style="width: 100%; text-align: center; padding: 10px; background-color: #364bbf; border: 0px transparent solid; border-radius: 10px; text-color: #f8f8f8; font-weight: bold;">To be continued..</div>

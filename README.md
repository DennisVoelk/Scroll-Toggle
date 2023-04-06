# Scroll Toggle
The no-code solution to toggle classes of HTML elements when they become visible after horizontal scrolling.


## How to use

First, add the script to your document:<br>
`<script src="scroll-toggle.js"></script>`


Then you can add the desired attribute together with the class you want to add or toggle:<br>
`<div id="myElement" onshow="myClass"></div>`

## The attributes

There are different attributes you can use:
### onshow
Once a part of the element becomes visible, the class will be added to the class-list (if the class-list doesn´t already contain the element).

### whilevisible
The class will only be in the class-list while a part of the element is visible. When it becomes invisible, the class will be removed and when it becomes visible, the class will be added.

### onfullshow
Similar to onshow, but will trigger only when the entire elment is visible (top to bottom).

### whilefullyvisible
Similar to whilevisible, but will trigger only when the entire elment is visible (top to bottom).


------------
### scrollvisibilitymargin
This attribute can be added to the document body (to affect all elements) or to the individual elements. It virtually shrinks the viewport, meaning that the class would be added/removed only if the element is further inside the viewport.
The value defined in the elements would overrule the value defined in the body.
<br><br>
`<div id="myElement" whilefullyvisible="myClass" scrollvisibilitymargin="200"></div>`<br>
This would mean that "myClass" will only be added/removed to the class-list if the entire element is at least 200px away from the top and bottom of the viewport.

## Manually check the visibility of all elements
You can call
`scrollToggleVisibilityCheck()`
to manually tell scroll-toggle to re-check the elements visibilities.
This can be useful after adding elements via code. 

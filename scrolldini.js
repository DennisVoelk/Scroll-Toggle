class ScrolldiniElement {
  constructor(DOMElement, prefix) {
    if(prefix === undefined){
      prefix = "sd"
    }
    this.el = DOMElement;
    this.toggleClass = "";
    this.removeClass = "";
    this.addClass = "";
    this.removeClassHidden = "";
    this.addClassHidden = "";
    this.clearTop = 0;
    this.clearBottom = 0;
    this.visble = false;
    this.prefix = prefix;
    this.inDelay = 0;
    this.outDelay = 0;

    if (this.el.hasAttribute(this.prefix + "-toggle-class")) {
      this.toggleClass = this.el.getAttribute(this.prefix + "-toggle-class");
    }
    if (this.el.hasAttribute(this.prefix + "-remove-class")) {
      this.removeClass = this.el.getAttribute(this.prefix + "-remove-class");
    }
    if (this.el.hasAttribute(this.prefix + "-add-class")) {
      this.addClass = this.el.getAttribute(this.prefix + "-add-class");
    }
    if (this.el.hasAttribute(this.prefix + "-remove-class-hidden")) {
      this.removeClassHidden = this.el.getAttribute(
        this.prefix + "-remove-class-hidden"
      );
    }
    if (this.el.hasAttribute(this.prefix + "-add-class-hidden")) {
      this.addClassHidden = this.el.getAttribute(
        this.prefix + "-add-class-hidden"
      );
    }
    if (this.el.hasAttribute(this.prefix + "-clear-top")) {
      this.clearTop = this.el.getAttribute(this.prefix + "-clear-top");
    }
    if (this.el.hasAttribute(this.prefix + "-clear-bottom")) {
      this.clearBottom = this.el.getAttribute(this.prefix + "-clear-bottom");
    }
    if (this.el.hasAttribute(this.prefix + "-in-delay")) {
      this.inDelay = this.el.getAttribute(this.prefix + "-in-delay");
    }
    if (this.el.hasAttribute(this.prefix + "-out-delay")) {
      this.outDelay = this.el.getAttribute(this.prefix + "-out-delay");
    }
  }

  show() {
    if (this.visble) {
      var that = this;
      setTimeout(function() {
        if (that.toggleClass != "") {
          if (!that.el.classList.contains(that.toggleClass)) {
            that.el.classList.add(that.toggleClass);
          }
        }
        if (that.removeClass != "") {
          that.el.classList.remove(that.removeClass);
        }
        if (that.addClass != "" && !that.el.classList.contains(that.addClass)) {
          that.el.classList.add(that.addClass);
        }
      }, this.inDelay);
    }
  }

  hide() {
    if (!this.visble) {
      var that = this;
      setTimeout(function() {
        if (that.toggleClass != "") {
          if (that.el.classList.contains(that.toggleClass)) {
            that.el.classList.remove(that.toggleClass);
          }
        }
        if (that.removeClassHidden != "") {
          that.el.classList.remove(that.removeClassHidden);
        }
        if (
          that.addClassHidden != "" &&
          !that.el.classList.contains(that.addClassHidden)
        ) {
          that.el.classList.add(that.addClassHidden);
        }
      }, this.outDelay);
    }
  }
}

class Scrolldini {
  constructor(className, prefix, checkOnLoad, checkOnResize) {
    if(checkOnLoad === undefined) {
      checkOnLoad = true;
    }
    if(className === undefined) {
      className = "sd";
    }
    if(prefix === undefined) {
      prefix = "sd";
    }
    if(checkOnResize === undefined) {
      checkOnResize = true;
    }
    this.prefix = prefix;

    const elementsRaw = document.getElementsByClassName(className);
    this.elements = [];
    this.visibleElements = [];
    console.log(checkOnLoad)

    for (let i = 0; i < elementsRaw.length; i++) {
      const el = elementsRaw[i];
      this.elements.push(new ScrolldiniElement(el, (prefix = prefix)));
    }

    window.addEventListener("scroll", this.checkVisibility.bind(this));
    if(checkOnResize){
      window.addEventListener("resize", this.checkVisibility.bind(this));
    }
    if(checkOnLoad){
      this.checkVisibility();
    }
  }

  checkVisibility() {
    for (let i = 0; i < this.visibleElements.length; i++) {
      const el = this.visibleElements[i];
      if (!this.isElementInViewport(el.el, el.clearTop, el.clearBottom)) {
        el.visble = false;
        el.hide();
        this.visibleElements.splice(this.visibleElements.indexOf(el));
      }
    }

    for (let i = 0; i < this.elements.length; i++) {
      const el = this.elements[i];
      if (
        this.isElementInViewport(el.el, el.clearTop, el.clearBottom) &&
        !this.visibleElements.includes(el)
      ) {
        el.visble = true;
        el.show();
        this.visibleElements.push(el);
      }
    }
  }

  isElementInViewport(el, clearTop, clearBottom) {
    var rect = el.getBoundingClientRect();
    return (
      rect.bottom > 0 + clearTop &&
      rect.top <
        (window.innerHeight || document.documentElement.clientHeight) -
          clearBottom /* or $(window).height() */
    );
  }

  addElement(element) {
    if (typeof element == "object") {
      if (element.constructor.name == "ScrolldiniElement") {
        this.elements.push(element);
      }
    } else {
      this.elements.push(new ScrolldiniElement(element, this.prefix));
    }
  }
}

const scroll = new Scrolldini("sd", "sd", true, true);
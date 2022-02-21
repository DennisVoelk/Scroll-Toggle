class ScrolldiniElement {

  constructor(DOMElement, prefix="sd") {
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
  static elements = [];
  static prefix = "sd";
  static visibleElements = [];

  static constructor() {
  }

  static checkVisibility() {
    console.log("tet");
    for (let i = 0; i < Scrolldini.visibleElements.length; i++) {
      const el = Scrolldini.visibleElements[i];
      if (!Scrolldini.isElementInViewport(el.el, el.clearTop, el.clearBottom)) {
        el.visble = false;
        el.hide();
        Scrolldini.visibleElements.splice(Scrolldini.visibleElements.indexOf(el));
      }
    }

    for (let i = 0; i < Scrolldini.elements.length; i++) {
      const el = Scrolldini.elements[i];
      if (
        Scrolldini.isElementInViewport(el.el, el.clearTop, el.clearBottom) &&
        !Scrolldini.visibleElements.includes(el)
      ) {
        el.visble = true;
        el.show();
        Scrolldini.visibleElements.push(el);
      }
    }
  }

  static isElementInViewport(el, clearTop, clearBottom) {
    var rect = el.getBoundingClientRect();
    return (
      rect.bottom > 0 + clearTop &&
      rect.top <
        (window.innerHeight || document.documentElement.clientHeight) -
          clearBottom
    );
  }

  static addElement(element) {
    if (typeof element == "object") {
      if (element.constructor.name == "ScrolldiniElement") {
        Scrolldini.elements.push(element);
      }
    } else {
      Scrolldini.elements.push(new ScrolldiniElement(element, Scrolldini.prefix));
    }
  }
}

window.addEventListener("scroll", Scrolldini.checkVisibility);

const elementsRaw = document.getElementsByClassName("sd");
for (let i = 0; i < elementsRaw.length; i++) {
  const el = elementsRaw[i];
  Scrolldini.addElement(new ScrolldiniElement(el, "sd"));
}
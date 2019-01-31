export class BaseEntity extends HTMLElement {
  constructor({ id, name, createDate }) {
    super();
    this.setAttribute('id', id);
    this._name = name;
    this._createDate = new Date(createDate);
  }

  get id() {
    return this.getAttribute('id');
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
    this.querySelector('.name').innerHTML = value;
  }

  get createDate() {
    return this._createDate;
  }

  get body() {
    return this.querySelector('.body');
  }

  clearBody() {
    const body = this.body;
    while (body.firstChild) {
      body.firstChild.remove();
    }
  }

  // get DOMElement() {
  //   return document.getElementById(this.id);
  // }

  // Update DOM element
  // updateDOM() {
  //   while (this.DOMElement.firstChild) {
  //     this.DOMElement.firstChild.remove();
  //   }
  //   this.DOMElement.appendChild(this.render());
  //   const time = new Date();
  //   console.log(time.getSeconds(), time.getMilliseconds());
  // }

  // generateFragment(templateString) {
  //   const template = document.createElement('template');
  //   template.innerHTML = templateString;
  //   return template.content;
  // }

  // Method overlaoded in derived classes
  // render() {
  //   return null;
  // }
}
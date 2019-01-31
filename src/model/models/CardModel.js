import { BaseEntity } from './BaseEntityModel';
import colors from '../../shared/colorsEnum';

export class Card extends BaseEntity {
  constructor({ content = '', color = 'white', ...rest }) {
    super(rest);
    this._content = content;
    this._color = color;
    this.render();
  }

  render() {
    // TODO Import styles
    this.innerHTML = `
      <div class="card-header">${this.name}</div>
      <div class="card-body">${this.content}</div>
    `;
  }
  
  connectedCallback() {
    // TODO add event listeners
  }

  disconnectedCallback() {
    // TODO remove event listeners
  }

  get content() {
    return this._content;
  }

  set content(value) {
    // TODO:
    // - update view
    // - update storage
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
    // TODO:
    // - update view
    // - update storage
  }

  delete() {
    // TODO:
    // - update parent column
    // - update view
    // - update storage
  }

  _render() {
    const fragment = this.generateFragment(`
      <div id="${this.id} class="card ${this.color}">
        
      </div>
    `);
    // TODO Add buttons and event listeners
    return fragment;  
  }
}
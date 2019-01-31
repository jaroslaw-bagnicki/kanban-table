import { BaseEntity, Card } from '.';
import { arrayInsert, arrayReorder } from '../../shared/utils';

export class Column extends BaseEntity {
  constructor({ cards, ...rest }) {
    super(rest);
    this._cards = cards;
    this.render();
  }

  render() {
    // TODO Import styles
    this.innerHTML = `
    <header>
      <h3 class="name">${this.name}</h3>
      <div class="buttons">
        <button class="edit">edit</button>
        <button class="menu">menu</button>
      </div>
    </header>
    <div class="body"></div>

    <header>
      <span class="name">${this.name}</span>
      <span class="buttons">
        <button class="edit">edit</button>
      </span>
    </header>
    <div class="body"></div>
    `;
    this.renderCards();
  }
  
  connectedCallback() {
    // TODO add event listeners
  }

  disconnectedCallback() {
    // TODO remove event listeners
  }

  get cards() {
    return this._cards;
  }

  set cards(value) {
    this._cards = value;
    this.renderCards();
    // TODO storage update
  }

  renderCards() {
    this.clearBody();
    const body = this.body;
    this.cards.forEach(card => body.appendChild(card));
  }

  delete() {
    // TODO:
    // - update parent board
    // - update view
    // - update storage
  }

  addCard(data) {
    this.columns = [
      ...this.cards, 
      new Card(data)
    ];
  }

  insertCard(card, dropId) {
    this.card = arrayInsert(this.card, card, dropId);
  }

  removeCard(id) {
    this.card = this.card.filter(card => card.id !== id);
  }

  moveCard(grabId, dropId) {
    this.card = arrayReorder(this.card, grabId, dropId);
  }
}
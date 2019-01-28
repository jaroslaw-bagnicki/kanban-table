import { BaseEntity } from './BaseEntityModel';

export class Column extends BaseEntity {
  constructor({ cards, ...rest }) {
    super(rest);
    this._cards = cards;
  }

  get cards() {
    return this._cards;
  }

  deleteColumn() {
    // TODO:
    // - update parent board
    // - update view
    // - upddate storage
  }

  insertCard(cardObj, prevCardId) {
    // TODO
  }

  removeCard(CardId) {
    // TODO
  }
}
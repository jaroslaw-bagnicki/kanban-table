import { BaseEntity } from './BaseEntityModel';

export class Column extends BaseEntity {
  constructor(id, name, createDateStr, cards) {
    super(id, name, createDateStr);
    this.cards = cards;
  }

  get cards() {
    return this.columns;
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
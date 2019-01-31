import { BaseEntity } from './BaseEntityModel';
import { Board } from './BoardModel';
import { Column } from './ColumnModel';
import { Card } from './CardModel';

customElements.define('k-board', Board);
customElements.define('k-column', Column);
customElements.define('k-card', Card);

export {
  BaseEntity,
  Board,
  Column,
  Card
};
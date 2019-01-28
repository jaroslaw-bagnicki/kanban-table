import { BaseEntity } from './BaseEntityModel';
import colors from '../../shared/colorsEnum';

export class Table extends BaseEntity {
  constructor(id, name, createDateStr, content, color = 'white') {
    super(id, name, createDateStr);
    this.content = content;
    this.color = color;
  }

  get content() {
    return this.content;
  }

  set content(value) {
    // TODO:
    // - update view
    // - upddate storage
  }

  get color() {
    return this.color;
  }

  set color(value) {
    this.color = value;
    // TODO:
    // - update view
    // - upddate storage
  }

  deleteCard() {
    // TODO:
    // - update parent column
    // - update view
    // - upddate storage
  }
}
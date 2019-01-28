import { BaseEntity } from './BaseEntityModel';
import colors from '../../shared/colorsEnum';

export class Card extends BaseEntity {
  constructor({ content = '', color = 'white', ...rest }) {
    super(rest);
    this._content = content;
    this._color = color;
  }

  get content() {
    return this._content;
  }

  set content(value) {
    // TODO:
    // - update view
    // - upddate storage
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
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
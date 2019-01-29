import { BaseEntity } from './BaseEntityModel';

export class Board extends BaseEntity {
  constructor({ description = '', columns = [], ...rest }) {
    super(rest);
    this._description = description;
    this._columns = columns;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
    // TODO update view
    // TODO update storage
  }

  get columns() {
    return this._columns;
  }

  insertColumns(columnObj, prevColumnId) {
    // TODO
  }

  removeColumns(ColumnId) {
    // TODO
  }
}
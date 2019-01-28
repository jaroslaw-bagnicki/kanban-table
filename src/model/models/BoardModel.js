import { BaseEntity } from './BaseEntityModel';

export class Board extends BaseEntity {
  constructor({ description = '', columns = [], ...rest }) {
    super(rest);
    this._desciption = description;
    this._columns = columns;
  }

  get desciption() {
    return this._desciption;
  }

  set desciption(value) {
    this._desciption = value;
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
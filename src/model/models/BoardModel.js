import { BaseEntity } from './BaseEntityModel';

export class Board extends BaseEntity {
  constructor(id, name, createDateStr, description = '', columns) {
    super(id, name, createDateStr);
    this.desciption = description;
    this.columns = columns;
  }

  get desciption() {
    return this.desciption;
  }

  set desciption(value) {
    this.desciption = value;
    // TODO update view
    // TODO update storage
  }

  get columns() {
    return this.columns;
  }

  insertColumns(columnObj, prevColumnId) {
    // TODO
  }

  removeColumns(ColumnId) {
    // TODO
  }
}
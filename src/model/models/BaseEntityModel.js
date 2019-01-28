export class BaseEntity {
  constructor({ id, name, createDate }) {
    this._id = id;
    this._name = name;
    this._createDate = new Date(createDate);
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
    // TODO update view
    // TODO update storage
  }

  get createDate() {
    return this._createDate;
  }
}
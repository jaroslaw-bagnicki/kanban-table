export class BaseEntity {
  constuctor(id, name, createDateStr) {
    this.id = id;
    this.name = name;
    this.createDate = new Date(createDateStr);
  }

  get id() {
    return this.id;
  }

  get name() {
    return this.name;
  }

  set name(value) {
    this.name = value;
    // TODO update view
    // TODO update storage
  }

  get createDate() {
    return this.createDate;
  }
}
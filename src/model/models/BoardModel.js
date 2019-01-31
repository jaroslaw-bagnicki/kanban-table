import { BaseEntity, Column } from '.';
import { arrayReorder, arrayInsert } from '../../shared/utils';

export class Board extends BaseEntity {
  constructor({ description = '', columns = [], ...rest }) {
    super(rest);
    this._description = description;
    this._columns = columns;
    this.render();
  }

  render() {
    // TODO import styles
    this.innerHTML = `
    <header>
    <div>
      <h1 class="name">${this.name}</h1>
      <h2 class="description">${this.description}</h2>
    </div>
    <div class="buttons">
      <button class="edit">edit</button>
      <button class="menu">menu</button>
    </div>
    </header>
    <div class="body"></div>
    `;
    this.renderColumns();
  }

  connectedCallback() {
    // TODO add event listeners
  }

  disconnectedCallback() {
    // TODO remove event listeners
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
    this.querySelector('.description').innerHTML = value;
  }

  get columns() {
    return this._columns;
  }

  set columns(value) {
    this._columns = value;
    this.renderColumns();
    // TODO storage update
  }

  renderColumns() {
    this.clearBody();
    const body = this.body;
    this.columns.forEach(col => body.appendChild(col));
  }

  addColumn(data) {
    this.columns = [...this.columns, new Column(data)];
  }

  insertColumn(column, dropId) {
    this.columns = arrayInsert(this.columns, column, dropId);
  }

  removeColumn(id) {
    this.columns = this.columns.filter(col => col.id !== id);
  }

  moveColumn(grabId, dropId) {
    this.columns = arrayReorder(this.columns, grabId, dropId);
  }
}
import { Board, Column, Card } from './models';

// Create instance of Board from raw data
function serializeBoard({ columns, ...rest }) {
  columns = columns.map(col => serializeColumn(col));
  return new Board({ columns, ...rest });
}

function serializeColumn({ cards, ...rest}) {
  cards = cards.map(card => serializeCard(card));
  return new Column({ cards, ...rest });
}

function serializeCard(data) {
  return new Card(data);
}

// Parse instance of Board to raw data
function deserializeBoard({ id, name, createDate, description, columns }) {
  return { id, name, createDate: createDate.toISOString(), description, columns: columns.map(col => deserializeColumn(col)) };
}

function deserializeColumn({ id, name, createDate, cards }) {
  return { id, name, createDate: createDate.toISOString(), cards: cards.map(card => deserializeCard(card)) };
}

function deserializeCard({ id, name, createDate, content, color }) {
  return { id, name, createDate: createDate.toISOString(), content, color };
}

export {
  serializeBoard,
  deserializeBoard
};
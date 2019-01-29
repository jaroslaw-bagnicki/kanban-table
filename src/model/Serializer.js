import { Board, Column, Card } from './models';

// Create instance of Board from raw data
export function serializeBoard({ columns, ...rest }) {
  columns = columns.map(col => serializeColumn(col));
  return new Board({ columns, ...rest });
}

export function serializeColumn({ cards, ...rest}) {
  cards = cards.map(card => serializeCard(card));
  return new Column({ cards, ...rest });
}

export function serializeCard(data) {
  return new Card(data);
}

// Parse instance of Board to raw data
export function deserializeBoard({ id, name, createDate, description, columns }) {
  return { id, name, createDate: createDate.toISOString(), description, columns: columns.map(col => deserializeColumn(col)) };
}

export function deserializeColumn({ id, name, createDate, cards }) {
  return { id, name, createDate: createDate.toISOString(), cards: cards.map(card => deserializeCard(card)) };
}

export function deserializeCard({ id, name, createDate, content, color }) {
  return { id, name, createDate: createDate.toISOString(), content, color };
}

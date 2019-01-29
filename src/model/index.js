import { serializeBoard } from './Serializer';

let board;

export function initBoard(data) {
  board = serializeBoard(data);
  return board;
}

export function getBoard() {
  return board;
}

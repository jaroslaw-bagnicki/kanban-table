import { serializeBoard } from './Serializer';

let board;

function saveBoardToStore(data) {
  board = serializeBoard(data);
}

export default {
  board,
  saveBoardToStore
};
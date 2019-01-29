import { Board, Column, Card } from '../src/model/models';
import * as Serializer from '../src/model/Serializer';
import { sampleBoardData } from '../src/__mocks__/sampleData';

describe('Model e2e tests', () => {

  let boardObj;  

  it('serializeBoard', () => {
    const output = Serializer.serializeBoard(sampleBoardData);
    expect(output).toBeInstanceOf(Board);
    expect(output.columns).toBeInstanceOf(Array);
    boardObj = output;
  });

  it('deserializeBoard', () => {
    const output = Serializer.deserializeBoard(boardObj);
    expect(output).toBeInstanceOf(Object);
    expect(output).toStrictEqual(sampleBoardData);
  });
});

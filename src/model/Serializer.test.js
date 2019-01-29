import { Board, Column, Card } from './models';
import * as Serializer from './Serializer';
import { sampleCardData, sampleColumnData, sampleBoardData } from '../__mocks__/sampleData';

describe('Serializer module', () => {

  let cardObj, columnObj, boardObj;

  it('serializeCard', () => {
    const output = Serializer.serializeCard(sampleCardData);
    expect(output).toBeInstanceOf(Card);
    expect(typeof output.id).toBe('number');
    expect(typeof output.name).toBe('string');
    expect(output.createDate).toBeInstanceOf(Date);
    expect(typeof output.content).toBe('string');
    expect(typeof output.color).toBe('string');
    cardObj = output;
  });

  it('deserializeCard', () => {
    const output = Serializer.deserializeCard(cardObj);
    expect(output).toBeInstanceOf(Object);
    expect(output).toStrictEqual(sampleCardData);
  });

  it('serializeColumn', () => {
    const output = Serializer.serializeColumn(sampleColumnData);
    expect(output).toBeInstanceOf(Column);
    columnObj = output;
  });

  it('deserializeColumn', () => {
    const output = Serializer.deserializeColumn(columnObj);
    expect(output).toBeInstanceOf(Object);
    expect(output).toStrictEqual(sampleColumnData);
  });

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

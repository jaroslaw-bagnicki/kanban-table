import { arrayReorder } from './arrayReorder';

describe('Tests for functions reordering array of object by key', () => {

  const testArr = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ];

  it('from: 2, to: 4', () => {
    const fromId = 2, toId = 4;

    const expectedArr = [
      { id: 1 },
      { id: 3 },
      { id: 2 },
      { id: 4 },
      { id: 5 }
    ];

    const newArr = arrayReorder(testArr, fromId, toId);
    expect(newArr).toStrictEqual(expectedArr);
  });

  it('from: 1, to: 5', () => {
    const fromId = 1, toId = 5;

    const expectedArr = [
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 1 },
      { id: 5 }
    ];

    const newArr = arrayReorder(testArr, fromId, toId);
    expect(newArr).toStrictEqual(expectedArr);
  });

  it('from: 5, to: 1', () => {
    const fromId = 5, toId = 1;

    const expectedArr = [
      { id: 5 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 }
    ];

    const newArr = arrayReorder(testArr, fromId, toId);
    expect(newArr).toStrictEqual(expectedArr);
  });


});
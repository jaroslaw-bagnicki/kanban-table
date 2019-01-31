import { arrayInsert } from './arrayInsert';

describe('Tests for functions reordering array of object by key', () => {

  const testArr = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ];

  const insertedElement = { id: 6 };

  it('followingId: 3', () => {
    const followingId = 3;

    const expectedArr = [
      { id: 1 },
      { id: 2 },
      { id: 6 },
      { id: 3 },
      { id: 4 },
      { id: 5 }
    ];

    const newArr = arrayInsert(testArr, insertedElement, followingId);
    expect(newArr).toStrictEqual(expectedArr);
  });

  it('followingId: 5', () => {
    const followingId = 5;

    const expectedArr = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 6 },
      { id: 5 }
    ];

    const newArr = arrayInsert(testArr, insertedElement, followingId);
    expect(newArr).toStrictEqual(expectedArr);
  });

});
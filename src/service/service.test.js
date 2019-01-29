import dataService from '.';
import { sampleBoardData } from '../__mocks__/sampleData';

jest.mock('../shared/config');

describe('Data service e2e', () => {

  beforeEach(() => {
    // values stored in tests will also be available in other tests unless you run
    // localStorage.clear();
    // or directly reset the storage
    // localStorage.__STORE__ = {};
    // you could also reset all mocks, but this could impact your other mocks
    // jest.resetAllMocks();
    // or individually reset a mock used
    // localStorage.setItem.mockClear();
  });

  const setRes = { message: 'data setted successfully' };
  const removeRes = { message: 'data removed successfully' };

  it('storage', async () => {
    expect(await dataService.getData()).toBeNull();
    expect(await dataService.setData(sampleBoardData)).toMatchObject(setRes);
    expect(await dataService.getData()).toMatchObject(sampleBoardData);
    expect(await dataService.removeData()).toMatchObject(removeRes);
    expect(await dataService.getData()).toBeNull();
  });
});

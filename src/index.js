import dataService from './service';
import { serializeBoard, deserializeBoard } from './model';


async function testSerializer() {
  console.log(dataService.mockBoard);
  await dataService.setData(dataService.mockBoard);
  const rawData = await dataService.getData();
  return serializeBoard(rawData);
}

async function testDeserialing() {
  const board = await testSerializer();
  const rawData = deserializeBoard(board);
  console.log(rawData);
  await dataService.setData(rawData);
  console.log(await dataService.getData(rawData));
}

testDeserialing();
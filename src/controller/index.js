import dataService from '../service';
import { initBoard, getBoard } from '../model';

let board;

export async function startApp() {
  console.log('App started');
  const loadedData = await dataService.getData();
  if (loadedData === null) {
    console.log('No saved data found!');
    // TODO Ask user for init data
    const userData = {
      name: 'New Boad',
      description:'',
      dateCreate: new Date(),
      columns: []
    };
    board = initBoard(userData);
  } else {
    console.log('Data loaded from storage!');
    board = initBoard(loadedData);
  }

  
}
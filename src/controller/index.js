import dataService from '../service';
import { initBoard } from '../model';
import { APP_CONTAINER_SELECTOR } from '../shared/config';

let board;

export async function startApp() {
  console.log('App started');
  const loadedData = await dataService.getData();
  if (loadedData === null) {
    // TODO Ask user for init data
    const userData = {
      name: 'New Boad',
      description:'',
      dateCreate: new Date(),
      columns: []
    };
    board = initBoard(userData);
  } else {
    board = initBoard(loadedData);
  }
  document.querySelector(APP_CONTAINER_SELECTOR).appendChild(board);
}
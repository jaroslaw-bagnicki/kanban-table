import storage from 'localforage';

const STORAGE_KEY = 'kanban-board-demo';

let startId = 0;
function generateId() {
  return startId += 1;
}

let startTimestamp = new Date(2019, 0, 19, 12).getTime();
function generateDate() {
  const increment = Math.round(Math.random() * 30 + 1) * 1000 * 60;
  startTimestamp += increment;
  return new Date(startTimestamp).toISOString();
}

const mockBoard = {
  id: generateId(), 
  name: 'Mock board',
  createDate: generateDate(),
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, minima soluta. Optio non nisi facere.',
  columns: [
    {
      id: generateId(), 
      name: 'TODO',
      createDate: generateDate(),
      cards: [
        {
          id: generateId(), 
          name: 'Task2',
          createDate: generateDate(),
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, sed.',
          color: 'white'
        },
        {
          id: generateId(), 
          name: 'Task3',
          createDate: generateDate(),
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptatibus odit?',
          color: 'red'
        }
      ]
    },
    {
      id: generateId(), 
      name: 'WIP',
      createDate: generateDate(),
      cards: [
        {
          id: generateId(), 
          name: 'Task1',
          createDate: generateDate(),
          content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum quod expedita.',
          color: 'green'
        }
      ]
    },
    {
      id: generateId(), 
      name: 'DONE',
      createDate: generateDate(),
      cards: []
    }
  ]
};

async function getDataFromStorage() {
  try {
    return await storage.getItem(STORAGE_KEY);
  } catch (err) {
    console.warn(err);
  }
}

async function setDataToStorage(rawData) {
  try {
    await storage.setItem(STORAGE_KEY, rawData);
    return {
      message: 'data setted successfully'
    };
  } catch (err) {
    console.warn(err);
  }
}

async function removeDataFromStorage() {
  try {
    await storage.removeItem(STORAGE_KEY);
    return {
      message: 'data removed successfully'
    };
  } catch (err) {
    console.warn(err);
  }
}

// Tests of storage
// async function testStorage() {
//   console.log(await setDataToStorage(mockBoard));
//   console.log(await getDataFromStorage());
//   console.log(await removeDataFromStorage());
// }
// testStorage();
// console.log(mockBoard);

export default {
  getData: getDataFromStorage,
  setData: setDataToStorage,
  removeData: removeDataFromStorage,
  mockBoard
};


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

const sampleCardData = {
  id: 6,
  name: 'Task1',
  createDate: '2019-01-19T13:14:00.000Z',
  color: 'green',
  content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum quod expedita.'
};

const sampleColumnData = {
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
};

const sampleBoardData = {
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

export {
  sampleCardData,
  sampleColumnData,
  sampleBoardData
};
import storage from 'localforage';
import { STORAGE_KEY } from '../shared/config';

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

export default {
  getData: getDataFromStorage,
  setData: setDataToStorage,
  removeData: removeDataFromStorage
};


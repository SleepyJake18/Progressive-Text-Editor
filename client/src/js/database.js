import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('Adding content');
  const database = await openDB('jate', 1);
  const readWrite = database.transaction('jate', 'readwrite');
  const objectStore = readWrite.objectStore('jate');
  const save = objectStore.add({content});
  const savedContent = await request;
  console.log('Text Saved!', savedContent);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('Retrieving content');
  const database = await openDB('jate', 1);
  const read = database.transaction('jate', 'readonly');
  const objectStore = read.objectStore('jate');
  const retrieveContent = objectStore.get(1);
  const retrievedContent = await retrieveContent;
  console.log('Data!', retrievedContent);
  return result?.value;
}

initdb();

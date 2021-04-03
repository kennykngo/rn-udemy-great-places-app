import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('places.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      // Creates a table called 'places' with a unique id (integer)
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL)',
        [],
        // 3rd param - func- success func
        () => {
          resolve();
        },
        // 4th param - func- error func
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

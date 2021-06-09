import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
    name: 'places.db',
    location: 'default'
},
    () => {
        console.log('Tao database thanh cong');
    },
    () => {
        console.log('tao database that bai');
    }
)

export const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM places',
                [],
                (_, result) => {
                    resolve(result);
                    console.log('lay du lieu thanh cong');
                },
                (_, err) => {
                    reject(err);
                    console.log('lay du lieu that bai');

                }
            );
        });
    });
    return promise;
};

export const init = () => {

    db.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
            [],
            () => {
                console.log('tao bang thanh cong');
            },
            () => {
                console.log(' tao bang that bai');
            }
        );
    });

};

export const insertPlace = (title, imageUri, address, lat, lng) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?);`,
                [title, imageUri, address, lat, lng],
                (_, result) => {
                    resolve(result);
                    console.log('insert thanh cong');
                },
                (_, err) => {
                    reject(err);
                    console.log('insert thanh cong');
                }
            );
        });
    });
    return promise;
};
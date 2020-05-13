import { db } from './config.js';



export function getHistory(callback) {
    const unsub = db
        .collection('movimientos')
        .onSnapshot((snapshot) => {
            const docs = [];

            snapshot.forEach((doc) => {
                const data = doc.data();

                docs.push({
                    ...data,
                });
            });

            callback(docs);
        });

    return unsub;
}
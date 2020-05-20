import { db } from './config.js';

export async function createMovimiento(data) {
    return await db
        .collection('movimientos')
        .doc()
        .set(data);
}

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
import { db } from './config.js';

export async function getHistorial(data) {
    return await db
        .collection('movimientos')
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });
}
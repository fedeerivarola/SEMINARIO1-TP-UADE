import { db } from './config.js'

export async function createHijo(data) {
    return await db
        .collection('hijos')
        .doc()
        .set(data);
}

export function getPapa(callback) {
    const unsub = db
        .collection('padres').doc('test@test.com')
        .get().then((doc) => {
            if(doc.exists){
                console.log("se encontro: "+doc.data());
                callback(doc.data());
            } else {
                console.log("no se encontro : " + doc.data());
            }
        });
    return unsub;
}

export async function getSaldo(data) {
    return await db
        .collection('movimientos')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach(
                (doc) => {
                    console.log(`${doc.id} => ${doc.data()}`)
                });
        });
}

export async function getHijos(data){
    return await db
    .collection('hijos')
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach(
            (doc) => {
                console.log(`${doc.id} => ${doc.data()}`)
            }
        );
    });
}
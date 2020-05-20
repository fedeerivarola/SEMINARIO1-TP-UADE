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
                return doc.data();
            } else {
                return null;
            }
        });
    return unsub;
}

// export async function getPapa(param) {
//     console.log(param)
//    await db.collection('padres').doc(param).get().then(
//         (doc) => {
//             if(doc.exists){
//                 let nombre = doc.data().nombre;
//                 let saldo = doc.data().saldo;
//                 console.log({nombre, saldo})
//                 return {nombre, saldo}
//             }else{
//                 return null
//             }
//         }
//     );

// }

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

export async function setSaldo(data) {
    console.log(data)
    return await db
    .collection('padres')
    .doc(data.mail)
    .set(data);
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
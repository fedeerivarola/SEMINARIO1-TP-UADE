import { auth } from './config';

export function userChanges(callback) {
    const unsub = auth.onAuthStateChanged((user) => {
        if (user && !user.isAnonymous) {
            const {
                uid,
                email,
            } = user;

            callback({
                id: uid,
                email,
            });
        } else {
            callback("error");
        }
    });

    return unsub;
}
import { 
    addDoc, 
    collection, 
    setDoc, 
    doc, 
    getDoc 
} from 'firebase/firestore';
import { Toasts } from '../toast-message/toasts';
import { auth, db } from './config';

import { writeDataToStorage, removeDataFromStorage } from '../../helpers/asyncStorage';

export const authErrors = (error: any) => {

    switch (error.code) {

        case 'auth/invalid-email':
            Toasts.showError('Email inválido');
            break;

        case 'auth/email-already-in-use':
            Toasts.showError('O endereço de e-mail já está sendo usado por outra conta');
            break;

        case 'auth/invalid-password':
            Toasts.showError('Sua senha devem ter pelo menos 6 caracteres');
            break;

        default:
            Toasts.showError('Erro desconhecido');
            console.log('Error: ', error);
            break;
    
    }

}

const getUsernameFromEmail = (email: string) => {
    return email.split("@")[0];
}

export const logout = async () => {

    try {

        await auth.signOut();
        await removeDataFromStorage('userStorage');

    } catch (error) {

        authErrors(error);

    }

}

export const login = async (email: string, password: string) => {

    try {

        const res = await auth.signInWithEmailAndPassword(email, password);
        const user = res.user;

        const userDocRef = doc(db, "usuarios", user!.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (!userDocSnapshot.exists()) {
                
            await setDoc(doc(db, "usuarios", user!.uid), {
                usuario: getUsernameFromEmail(email),
                email: email,
            });
    
        }

        writeDataToStorage('userStorage', { 
            usuario: getUsernameFromEmail(email),
            email: email,
        });

    } catch (error) {

        authErrors(error);

    }

}

export const register = async (username: string, email: string, password: string) => {

    try {

        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        
        await setDoc(doc(db, "usuarios", user!.uid), {
            usuario: username,
            email: email,
        });

        writeDataToStorage('userStorage', { 
            usuario: username,
            email: email,
        });

    } catch (error) {

        authErrors(error);

    }

}

export const loginOrRegister = async (username: string, email: string, password: string, authType: string) => {

    if (authType === 'login') {

        await login(email, password);

    } else if (authType === 'register') {

        await register(username, email, password);

    }

}



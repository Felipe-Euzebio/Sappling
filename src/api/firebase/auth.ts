import { addDoc, collection } from 'firebase/firestore';
import { Toasts } from '../toast-message/toasts';
import { auth, db } from './config';

export const logout = async () => {

    try {

        await auth.signOut();

    } catch (error) {

        Toasts.showError('Ops!', 'Não foi possível sair da sua conta.');

    }

}

export const login = async (email: string, password: string) => {

    try {

        const {user: user} = await auth.signInWithEmailAndPassword(email, password);

    } catch (error) {

        Toasts.showError('Ops!', 'Não foi possível entrar na sua conta.');

    }

}

export const register = async (username: string, email: string, password: string) => {

    try {

        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;

        await addDoc(collection(db, "users"), {
            uid: user?.uid,
            username,
            email,
        });

    } catch (err) {

        console.error(err);

    }

}

export const loginOrRegister = async (username: string, email: string, password: string, authType: string) => {

    if (authType === 'login') {

        await login(email, password);

    } else if (authType === 'register') {

        await register(username, email, password);

    }

}



import Toast, { BaseToast } from 'react-native-toast-message';

export const Toasts = {

    showSuccess: (title: string = 'Sucesso!', message: string) => {
        Toast.show({
            type: 'success',
            text1: title,
            text2: message,
            visibilityTime: 3000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
        });
    },

    showError: (title: string = 'Ops!', message: string) => {
        Toast.show({
            type: 'error',
            text1: title,
            text2: message,
            visibilityTime: 3000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
        });
    }

};
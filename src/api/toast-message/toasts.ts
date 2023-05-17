import Toast, { BaseToast } from 'react-native-toast-message';

export const Toasts = {

    showSuccess: (message: string, title: string = 'Sucesso!') => {
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

    showError: (message: string, title: string = 'Ops!') => {
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
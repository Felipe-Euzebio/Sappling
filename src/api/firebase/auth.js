import { Toasts } from "../toast-message/toasts";
import firebase from "./config";

const AuthErrors = (error) => {
  var code = error.code;

  switch (code) {
    case code === "auth/invalid-email":
      Toasts.showError("Email inválido");
      break;

    case code === "auth/email-already-in-use":
      Toasts.showError("O endereço de e-mail já está sendo usado por outra conta");
      break;

    case code === "auth/invalid-password":
      Toasts.showError("Sua senha devem ter pelo menos 6 caracteres");
      break;

    default:
      Toasts.showError("Erro desconhecido");
      console.log("Error: ", error);
      break;
  }
};

export const Auth = {
  logout: async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      AuthErrors(error);
    }
  },

  loginOrRegister: async (email, password, authType) => {
    if (authType === "login") {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        AuthErrors(error);
      }
    } else {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);

        Toasts.showSuccess("Usuário criado com sucesso");
      } catch (error) {
        AuthErrors(error);
      }
    }
  },
};

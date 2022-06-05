// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { getDatabase, ref } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBrv2kbNDE6XPef_DTeOlVJ6SJ_WzuxYWY',
  authDomain: 'gb-react-22949.firebaseapp.com',
  projectId: 'gb-react-22949',
  storageBucket: 'gb-react-22949.appspot.com',
  messagingSenderId: '116234565650',
  appId: '1:116234565650:web:213a2770e810729d6c80cb',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

const db = getDatabase(firebase);

export const userRef = ref(db, 'user');
export const chatsRef = ref(db, 'chats');

export const getChatsById = (chatId: string) => ref(db, `chats/${chatId}`);

export const getMessageListById = (chatId: string) =>
  ref(db, `chats/${chatId}/messageList/`);

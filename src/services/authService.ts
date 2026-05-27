import {
  browserLocalPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";

const ensureAuthReady = () => {
  if (!auth || !googleProvider) {
    throw new Error(
      "Firebase Auth is not configured. Set VITE_FIREBASE_* variables.",
    );
  }
};

export const loginWithGoogle = async (): Promise<User> => {
  ensureAuthReady();
  await setPersistence(auth, browserLocalPersistence);
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

export const logout = async (): Promise<void> => {
  if (!auth) return;
  await signOut(auth);
};

export const observeAuth = (cb: (user: User | null) => void) => {
  if (!auth) {
    cb(null);
    return () => undefined;
  }

  return onAuthStateChanged(auth, cb);
};

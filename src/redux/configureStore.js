import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  blacklist: ['filter'], // не зберігаємо filter у локальному сховищі
};

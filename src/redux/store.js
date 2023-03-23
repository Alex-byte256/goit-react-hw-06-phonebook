import { configureStore , createSlice} from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};





const initialState ={
  contacts:[],
filter:"",
};

const mySlice = createSlice({
  name: "contacts",
  initialState,
  reducers:{
    addContact(state,action){
      state.contacts.push(action.payload)
    },
    removeContact(state,action){
     state.contacts =  state.contacts.filter(el => el.id !== action.payload)
    },
    updateFilter(state,action){
      state.filter = action.payload
    },
  },
})

const persistedReducer = persistReducer(persistConfig, mySlice.reducer);

export const {addContact,removeContact , updateFilter} = mySlice.actions;

export const store = configureStore({
  reducer: {
    contacts :persistedReducer
  },
})

export const persistor = persistStore(store);

import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import imageReducer from '../reducers/imageReducer'
import userReducer from '../reducers/userReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import statusReducer from '../reducers/statusReducer'
import errorReducer from '../reducers/errorReducer'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['image', 'status'],
}

const combinedReducer = combineReducers({
  user: userReducer,
  image: imageReducer,
  status: statusReducer,
  error: errorReducer,
})

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === 'user/logout') {
    state = undefined
  }
  return combinedReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

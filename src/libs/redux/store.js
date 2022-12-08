import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'

import counterReducer from './counterReducer'
import authReducer from './authReducer'

const persistConfig = {
    key: 'root-v1',
    storage,
    whitelist: ['auth'],
}

export const rootReducers = combineReducers({
    auth: authReducer,
    counter: counterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['your/action/type'],
                // Ignore these field paths in all actions
                ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
                // Ignore these paths in the state
                ignoredPaths: ['items.dates'],
            },
        }),
})
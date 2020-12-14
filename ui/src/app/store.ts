import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { rootReducer, RootState } from './rootReducer'

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultRootState extends RootState {}
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(),
})

export type AppReduxStore = typeof store;

export type Reducers = keyof RootState;


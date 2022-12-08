import { useState } from "react";
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { store } from '../libs/redux/store'
import CourseItem from "../components/CourseItem";
import useGetCourses from "../hooks/useGetCourses";
import Counter from "../components/AuthUser";
import AuthValidator from "./AuthValidator";

let persistor = persistStore(store)

function App() {
  const { courses } = useGetCourses()
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AuthValidator />
      </PersistGate>
    </Provider>
  );
}

export default App;

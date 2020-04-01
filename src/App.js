import React from "react"
import { Provider } from "react-redux"
import store from "./store"

import Courses from "./components/Courses"
const App = () => (
  <Provider store={store}>
    <Courses />
  </Provider>
);

export default App;
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './modules/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
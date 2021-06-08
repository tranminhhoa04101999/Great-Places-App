import React from 'react';
import { View, Text } from 'react-native';
import MainScreen from './navigation/PlaceNavigation';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import PlaceReducer from './store/places-reducer';
import PlaceActions from './store/places-action';
import { init } from './helper/db';

init();

export default function app() {
  const rootReducer = combineReducers({
    places: PlaceReducer
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};
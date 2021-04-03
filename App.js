import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import PlacesNavigator from './navigation/PlacesNavigator';
import placesReducer from './store/places-reducer';
import { init } from './helpers/db';

init()
  .then(() => {
    console.log('Intialized database');
  })
  .catch((err) => {
    console.log('Initializing db failed.', err);
  });

// combineReducers - takes an obj that maps the key-value pairs
const rootReducer = combineReducers({
  places: placesReducer,
});

// applyMiddleware is a function that allows the application of ReduxThunk
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});

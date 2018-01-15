import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyAO0n3lB7jxKNTG1phuc1SNoP9X_7_sV4s',
    authDomain: 'manager-25293.firebaseapp.com',
    databaseURL: 'https://manager-25293.firebaseio.com',
    projectId: 'manager-25293',
    storageBucket: 'manager-25293.appspot.com',
    messagingSenderId: '191027454434'
  };
  firebase.initializeApp(config);
  }

  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (

      <Provider store={store}>
       <LoginForm />
      </Provider>
    )
  }
}

export default App;

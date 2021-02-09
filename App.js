import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import Navigator from './routes/Navigator'
import { NavigationContainer } from '@react-navigation/native'
import thunk from 'redux-thunk'
import navbarReducer from './redux/reducers/navbarReducer'
import mypostsReducer from './redux/reducers/myPostsReducer'
import profilesReducer from './redux/reducers/profilesReducer'


const reducers = combineReducers({
  navbarData : navbarReducer,
  myPostsData : mypostsReducer,
  profilesData : profilesReducer
})
 
const store = createStore(reducers, applyMiddleware(thunk))


export default function App() {
  return (
      <NavigationContainer>
      <Provider store={store}>
        
          <Navigator/>
       
      </Provider>
      </NavigationContainer>
  );
}


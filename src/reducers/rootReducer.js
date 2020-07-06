import { combineReducers } from 'redux';
import frozenReducer from './frozenReducer';
import produceReducer from './produceReducer';
import meatReducer from './meatReducer';

//root reducer manage all reducers
//make root reducer:
// 1. method from redux -> combineReducers
// 2. get each individual reducer (function)
//all reducers have 2 params:
  // a. current state, usually provide a default state
  // b. info that came from any action
// 3. call combineReducers and hand it an object
  // a.each key -> piece of state in redux Store
  // b.each value -> value of piece of state in redux Store
//4. make individual reducers to hand the rootreducer
//5. create store -> passing it the rootReducer

  const rootreducer = combineReducers({
    frozen: frozenReducer,
    produce: produceReducer,
    meat: meatReducer
  })
  export default rootreducer;

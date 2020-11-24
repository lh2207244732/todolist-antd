import { createStore } from 'redux';
import  counter from './counter'

let store = createStore(counter);
  
export default store
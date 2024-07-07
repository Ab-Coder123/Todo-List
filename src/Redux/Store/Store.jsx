
import { createStore } from 'redux';
import todoReducer from '../Reducers/todoReducer';

const Store = createStore(todoReducer);

export default Store;
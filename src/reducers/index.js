import { combineReducers } from 'redux';
import Users from './testjson.js';

const allReducers = combineReducers({
    users: Users,
});

export default allReducers;

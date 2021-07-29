import { combineReducers } from 'redux';

import { default as courses } from '../Courses/reducers';
import { default as menu } from '../Lecture/reducers';

const createRootReducers = () =>
  combineReducers({
    courses,
    menu
  });

export default createRootReducers;
import { combineReducers } from 'redux';
import newGithubReducer from './features/github/GithubSlice';
import reducer from './reducers';

const rootReducer = combineReducers({
  newGithub: newGithubReducer,
  github: reducer,
});

export default rootReducer;

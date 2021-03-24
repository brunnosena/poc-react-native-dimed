import RepoOwner from 'types/RepoOwner';
import GithubAction from 'app-redux/features/github/actions/GithubAction';

const initialState: RepoOwner[] = [];

const newGithubReducer = (
  state: RepoOwner[] = initialState,
  action: GithubAction,
) => {
  switch (action.type) {
    case 'github/add':
      if (!state.find((value) => value.id === action.payload.id)) {
        return [...state, action.payload];
      }
      return state;

    default:
      return state;
  }
};

export default newGithubReducer;

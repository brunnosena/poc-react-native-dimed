import RepoOwner from 'types/RepoOwner';

interface GithubAction {
  type: string;
  payload: RepoOwner;
}

export default GithubAction;

interface RepoOwner {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
  repos_url?: string;
  location?: string;
}

export default RepoOwner;

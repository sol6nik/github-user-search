export type LocalGitHubUser = {
  login: string;
  id: number;
  avatar: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter: number;
  public: number;
  folowers: number;
  folowing: number;
  created: string;
};

export type GithubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: number;
  public_repos: number;
  folowers: number;
  folowing: number;
  created_at: string;
};

export type GirhubError = {
  message: string;
  documentation_url: string;
};

import { Container } from "components/Container";
import { Search } from "components/Search";
import { TheHeader } from "components/TheHeader";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock";
import { useState } from "react";
import { GithubUser, LocalGitHubUser, GirhubError } from "types";
import { extractLocalUser } from "utils/extruct-local-user";
import { isGithubUser } from "utils/typeguards";

const BASE_URL = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<LocalGitHubUser | null>(defaultUser);
  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const response = await fetch(url);
    const user = (await response.json()) as GithubUser | GirhubError;

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;

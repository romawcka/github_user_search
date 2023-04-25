import { useState } from "react";

import { Container } from "components/Container";
import { Header } from "components/Header";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";
import { defaultUser } from 'mock'
import { GithubUser, GithubUserError, LocalGithubUser } from "types";

import { isGithubUser } from "utils/typeguard";
import { userExtraction } from "utils/user-extractor";

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGithubUser | null> (defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const res = await fetch(url);
    const user = await res.json() as GithubUser | GithubUserError;

    if (isGithubUser(user)) {
      setUser(userExtraction(user));
    } else {
      setUser(null);
    }
  }

  return (
    <Container>
      <Header/>
      <Search hasError={!user} onSubmit={fetchUser}/>
      {user && (
      <UserCard
        {...user}
        />
      )}
    </Container>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";

import { ProfileCard } from "./components/ProfileCard";
import { Header } from "./components/reusable/Header";
import { UserInfo } from "./components/UserInfo";
import { Loading } from "./components/reusable/Loading";
import { Error } from "./components/reusable/Error";
import { UserRepos } from "./components/UserRepos";

function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState({});
  const [repoData, setRepoData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  // Use useEffect hook to fetch data from API
  useEffect(() => {
    // Check if user input is empty
    if (!user) return;

    const apiRequest = async () => {
      // Set loading state to true and clear error state
      setIsLoading(true);
      setError({});

      try {
        // Fetch user data from API
        const userRes = await axios.get(`/api/user/${user}`);
        setUserData(userRes.data.userData);

        // If user data is successfully fetched, fetch user repositories
        if (userRes.status === 201) {
          try {
            const userReposRes = await axios.get(`api/user/repos/${user}`);
            setRepoData(userReposRes.data.userRepos);
          } catch (error) {
            // Handle error if user repositories cannot be fetched
            const details = error.response;
            setError({
              status: details.status,
              statusText: details.statusText,
              message: "We could not find the user you are looking for",
            });
          }
        }
      } catch (error) {
        // Handle error if user data cannot be fetched
        const details = error.response;
        setError({
          status: details.status,
          statusText: details.statusText,
        });
      } finally {
        // Set loading state to false
        setIsLoading(false);
      }
    };

    apiRequest();
  }, [user]);

  return (
    <>
      <Header isLoading={isLoading} onSearch={setUser} />
      {isLoading && <Loading />}
      {!isLoading &&
        Object.keys(error).length === 0 &&
        Object.keys(userData).length > 0 && (
          <ProfileCard>
            <UserInfo userData={userData} />
            <UserRepos repoData={repoData} user={user} />
          </ProfileCard>
        )}

      {Object.keys(error).length !== 0 && <Error errorDetails={error} />}
    </>
  );
}

export default App;

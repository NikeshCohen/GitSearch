import { Repo } from "./reusable/Repo";

export function UserRepos({ repoData, user }) {
  // Only use the four most recent repos
  const latestRepos = repoData.length <= 4 ? repoData : repoData.slice(0, 4);

  // Return a repo Card for each of the repos with their respective data
  return (
    <section className="repos">
      <h2>Latest Repositories</h2>
      {latestRepos.length > 0 ? (
        latestRepos.map((repo) => (
          <Repo key={repo.id} repo={repo} user={user} />
        ))
      ) : (
        <p className="no-repos">No repositories found</p>
      )}
    </section>
  );
}

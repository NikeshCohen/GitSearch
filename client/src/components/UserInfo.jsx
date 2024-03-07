export function UserInfo({ userData }) {
  // return all the users details
  return (
    <section className="user-details">
      <div className="user-profile-img">
        <img src={userData.avatar_url} alt="user profile avatar" />
        <a href={userData.html_url}>View Github</a>
      </div>
      <div>
        <h1>{userData.login}</h1>
        <div className="stats">
          <p>{userData.followers} Followers </p>
          <hr />
          <p>{userData.following} Following </p>
          <hr />
          <p>{userData.public_repos} Public Repos</p>
        </div>
        <p>{userData.bio}</p>
        <p className="created">Created: {userData?.created_at.split("T")[0]}</p>
      </div>
    </section>
  );
}

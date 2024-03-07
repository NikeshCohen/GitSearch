import { useState } from "react";
import Modal from "./Modal";

export function Repo({ repo, user }) {
  // Handle modal render
  const [showModal, setShowModal] = useState(false);

  // Display all the repo information and create a modal, pass repo data into modal
  return (
    <div className="repo">
      <p className="name">{repo.name}</p>
      <p className="description">{repo.description}</p>
      <p className="language">Language: {repo.language}</p>
      <p className="created">Created: {repo.created_at.split("T")[0]}</p>
      <div className="details">
        <a href={repo.html_url}>View Source</a>
        <hr />
        <button onClick={() => setShowModal(true)}>Recent Commits</button>
      </div>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        repoName={repo.name}
        user={user}
      />
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";

import { Loading } from "./Loading";

function Modal({ open, onClose, repoName, user }) {
  // State variables for commit data, loading state, and error state
  const [commitData, setCommitData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect hook to fetch commit data when the modal opens or when repoName or user changes
  useEffect(() => {
    const apiRequest = async () => {
      setIsLoading(true);
      setError(false);

      try {
        // Fetch commits for the specified repository
        const res = await axios.get(`api/${user}/${repoName}/commits`);
        const reposCommits = res.data.repoCommits;
        // Get the latest 4 commits
        const latestCommits =
          reposCommits.length <= 4 ? reposCommits : reposCommits.slice(0, 4);
        setCommitData(latestCommits);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    // Call the API request function
    apiRequest();
  }, [repoName, user]);

  // Render the modal content
  if (!open) return null;
  return (
    <div className="overlay" onClick={() => onClose()}>
      <div
        className="modal-container"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="close-btn" onClick={() => onClose()}>
          X
        </p>
        <div className="modal-content">
          <h1>
            Recent Commits to <span>{repoName}</span>
          </h1>
          {isLoading && <Loading />}
          {!isLoading && !error && (
            <div className="commits">
              {commitData.length > 0 ? (
                commitData.map((commit, index) => (
                  <div key={index} className="commit">
                    <p>{commit.commit.message}</p>
                    <div className="commit-details">
                      <p>Committer: {commit.commit.committer.name}</p>
                      <hr />
                      <p>Date: {commit.commit.committer.date.split("T")[0]}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-commits">No Commits</p>
              )}
            </div>
          )}
          {error && <p>Could not load commits for ${repoName}</p>}
        </div>
      </div>
    </div>
  );
}

export default Modal;

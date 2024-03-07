const axios = require("axios");

// Function to fetch commits of a GitHub repository
exports.getRepoCommits = async (username, repo) => {
  try {
    // Make a GET request to GitHub API to fetch commits
    const res = await axios.get(
      `https://api.github.com/repos/${username}/${repo}/commits`
    );
    const repoCommits = await res.data;
    return repoCommits;
  } catch (err) {
    // If an error occurs, return an object with status and message
    return {
      status: err.response.status,
      message: err.response.data.message,
    };
  }
};

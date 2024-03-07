const axios = require("axios");

// Function to fetch user repositories from GitHub API
exports.getUserRepos = async (username) => {
  try {
    // Make a GET request to GitHub API to fetch user repositories
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    const repoData = await res.data;
    return repoData;
  } catch (err) {
    // If an error occurs, return an object with status and message
    return {
      status: err.response.status,
      message: err.response.data.message,
    };
  }
};

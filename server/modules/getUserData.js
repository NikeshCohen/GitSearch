const axios = require("axios");

// Function to fetch user data from GitHub API
exports.getUserData = async (username) => {
  try {
    // Make a GET request to GitHub API to fetch user data
    const res = await axios.get(`https://api.github.com/users/${username}`);
    const userData = await res.data;
    return userData;
  } catch (err) {
    return {
      // Make a GET request to GitHub API to fetch user data
      status: err.response.status,
      message: err.response.data.message,
    };
  }
};

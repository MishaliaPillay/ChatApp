const axios = require("axios"); // Install Axios using: npm install axios

const user = "mish";
const GITHUB_TOKEN =
  "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";
const REPO_OWNER = "Jacob-Polane";
const REPO_NAME = "Jacob-Polane.github.io";
const FILE_PATH_USERS = `${user}/users.geojson`;
const FILE_PATH_MESSAGES = `${user}/messages.geojson`;
const BRANCH = "main";

/**
 * Function to wtite JSON data to a GitHub repository
 * @returns {Object} Parsed JSON data to the file
 */

export async function writeToJsonFile(newData, type) {
  FILE_PATH = "";

  if (type === "users") {
    FILE_PATH = FILE_PATH_USERS;
  } else if (type === "messages") {
    FILE_PATH = FILE_PATH_MESSAGES;
  } else {
    console.log("Invalid type");
  }

  const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    });

    const currentContent = Buffer.from(
      response.data.content,
      "base64"
    ).toString("utf-8");
    const fileSha = response.data.sha;

    const updatedContent = JSON.stringify(
      { ...JSON.parse(currentContent), ...newData },
      null,
      2
    );

    const updateResponse = await axios.put(
      apiUrl,
      {
        message: "Update JSON file via API",
        content: Buffer.from(updatedContent).toString("base64"),
        sha: fileSha,
        branch: BRANCH,
      },
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    console.log(
      "File updated successfully:",
      updateResponse.data.content.html_url
    );
  } catch (error) {
    console.error(
      "Error updating the file:",
      error.response?.data || error.message
    );
  }
}

/**
 * Function to read JSON data from a GitHub repository
 * @returns {Object} Parsed JSON data from the file
 */

export async function readJsonFile(type) {
  FILE_PATH = "";

  if (type === "users") {
    FILE_PATH = FILE_PATH_USERS;
  } else if (type === "messages") {
    FILE_PATH = FILE_PATH_MESSAGES;
  } else {
    console.log("Invalid type");
  }

  const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}?ref=${BRANCH}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    });

    const fileContent = Buffer.from(response.data.content, "base64").toString(
      "utf-8"
    );
    const jsonData = JSON.parse(fileContent);

    console.log("JSON Data:", jsonData);
    return jsonData;
  } catch (error) {
    console.error(
      "Error reading the file:",
      error.response?.data || error.message
    );
    throw error;
  }
}

//module.exports = { readJsonFile, writeToJsonFile };

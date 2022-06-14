import { createHeaders } from "./index";
const apiUrl = process.env.REACT_APP_API_URL;

const checkForUser = async (username) => {
  try {
    const response = await fetch(`${apiUrl}?username=${username}`);
    if (!response.ok) {
      throw new Error("Could not complete request");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

const createUser = async (username) => {
  try {
    const options = {
      method: "POST",
      headers: createHeaders(),
      body: JSON.stringify({
        username,
        translations: [],
      }),
    };
    const response = await fetch(apiUrl, options);
    if (!response.ok) {
      throw new Error("Could not create user with username " + username);
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

export const loginUser = async (username) => {
  const [checkError, user] = await checkForUser(username);

  //Error
  if (checkError !== null) {
    return [checkError, null];
  }

  //user exists already
  if (user.length > 0) {
    return [null, user.pop()];
  }

  //none of the above - create new user
  if (user.length === 0) {
    return await createUser(username);
  }
  return [checkError, null];
};

export const userById = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`)
    if(!response.ok) {
      throw new Error('Could not fetch user');
    }
    const user = await response.json();
    return [null, user];
  } catch (error) {
    return [error.message, null ]
  }
}

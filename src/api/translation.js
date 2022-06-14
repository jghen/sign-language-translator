import { createHeaders } from "./index";
const apiUrl = process.env.REACT_APP_API_URL;

export const translationAdd = async (user, translation) => {
  try {
    const options = {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [...user.translations, translation],
      }),
    };

    const response = await fetch(`${apiUrl}/${user.id}`, options);

    if (!response.ok) {
      throw new Error("Could not update the translations");
    }

    const result = await response.json();
    return [null, result];

  } catch (error) {
    return [error.message, null];
  }
};

export const translationClearHistory = async (user) => {
  try {
    const options = {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: []
      }),
    };

    const response = await fetch(`${apiUrl}/${user.id}`, options);

    if (!response.ok) {
      throw new Error("Could not update the translations");
    }

    const result = await response.json();
    return [null, result];

  } catch (error) {
    return [error.message, null];
  }
};

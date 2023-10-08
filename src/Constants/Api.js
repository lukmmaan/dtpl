export const API_URL = "https://dtpl-be-six.vercel.app";

export const Headers = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

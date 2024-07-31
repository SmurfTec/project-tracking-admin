import axios from "axios";

export const api_url = 'http://localhost:5001';
export const localStorageKey = 'auth';

export const makeRequest = async (url, method, body) => {
  const res = await axios({
    method,
    url: `${api_url}${url}`,
    data: body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem(localStorageKey)}`,
    },
  });
  return res;
}
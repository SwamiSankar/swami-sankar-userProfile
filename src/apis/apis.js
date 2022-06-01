import axios from 'axios';

export const axiosUserObject = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const axiosAvatarObject = axios.create({
  baseURL: process.env.REACT_APP_AVATAR_URL,
});

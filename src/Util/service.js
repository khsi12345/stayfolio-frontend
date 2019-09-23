import axios from 'axios';

export const getPicks = async (url, setData) => {
  const response = await axios.get(url);
  setData(response);
};

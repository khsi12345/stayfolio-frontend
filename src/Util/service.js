import axios from 'axios';

export const getApi = async (url, setData) => {
  const response = await axios.get(url);
  setData(response);
};

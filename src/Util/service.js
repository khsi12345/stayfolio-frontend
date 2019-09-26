import axios from 'axios';

export const getApi = async (url, setData) => {
  const response = await axios.get(url);
  setData(response);
};

export const commentPostApi = async (url, key, text) => {
  const result = await axios.post(url,
    { content: text },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: key,
      },
    });
  return result;
};

// 매거진
export const getMagazines = async (url, setData) => {
  const response = await axios.get(url);
  setData(response.data.items);
};

// 매거진 디테일
export const getMagazineDetail = async (url, setData) => {
  const response = await axios.get(url);
  setData(response.data.MAGAZINE);
};

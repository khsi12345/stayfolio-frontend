import axios from 'axios';

export const getApi = async (url, setData) => {
  const response = await axios.get(url);
  setData(response);
};

// export const commentPostApi = async (url, key, text) => {
// await axios.post(url,
//   { content: text },
//   {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: key,
//     },

//   });
// const result = data;
// return data;
// return data;
// console.log(data);
// await axios({
//   method: 'POST',
//   url,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: key,
//   },
//   data: { content: text },
// }).then((response) => response);
// };

// 매거진
export const getMagazines = async (url) => await axios.get(url);

// 매거진 디테일
export const getMagazineDetail = async (url, setData) => {
  const response = await axios.get(url);
  setData(response.data.MAGAZINE);
};

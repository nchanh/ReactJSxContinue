const { default: axios } = require('axios');

const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, fromData = {}) => {
  const response = await request.get(path, { params: fromData });
  return response.data;
};

export default request;

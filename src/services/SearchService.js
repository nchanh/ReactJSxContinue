import * as request from '~/utils';

export const search = async (query, type = 'less') => {
  try {
    const res = await request.get('users/search', { q: query, type: type });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

import { fetchData } from "./api";

export async function searchAccountExist(data) {
  return fetchData('/api/fs/access/search/phone/user', '', {
    method: 'POST',
    body: data,
  });
}

export async function registerUserByPhone(data) {
  return fetchData('/api/fs/access/register/byphone', '', {
    method: 'POST',
    body: data,
  });
}

export async function registerUserByEmail(data) {
  return fetchData('/api/fs/access/register/byemail', '', {
    method: 'POST',
    body: data,
  });
}
import { API_URL } from '../api/config';

export default class UserAPI {
  static fetchUsers = async () => {
    const userAPIURL = `${API_URL}users/index`;
    const response = await fetch(userAPIURL);
    const data = await response.json();
    return data;
  };
}

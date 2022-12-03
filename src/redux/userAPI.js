export default class UserAPI {
  static fetchUsers = async () => {
    const userAPIURL = 'http://[::1]:3000/api/v1/users/index';
    const response = await fetch(userAPIURL);
    const data = await response.json();
    return data;
  };
}

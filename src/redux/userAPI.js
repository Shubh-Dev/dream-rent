export default class UserAPI {
  static fetchUsers = async () => {
    const userAPIURL = 'https://dream-rent-api-production.up.railway.app/api/v1/users/index';
    const response = await fetch(userAPIURL);
    const data = await response.json();
    return data;
  };
}

import axios from 'axios';
const API_URL = "https://18.166.73.221/api/auths/";
class AuthService {
  login(user) {
    console.log(user);
    return axios
      .post(API_URL + 'signin', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        const {data} = response.data
        if (data.accessToken) {
          localStorage.setItem('user', JSON.stringify(data));
        }
        return data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios.post(API_URL + 'signup', {
      comfirmPassword: user.comfirmPassword,
      email: user.email,
      password: user.password
    }).then(response => {
   
      return response.data.success;
    })
  }
}
export default new AuthService();
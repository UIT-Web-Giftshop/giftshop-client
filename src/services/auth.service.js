
import { $http } from '../plugins/http-wrapper'
class AuthService {
  login(user) {
    console.log(user);
    return $http
      .post('auths/signin', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        console.log(response);
        const {data} = response
        if (data.accessToken) {
          $http.setAccessToken(data.accessToken);
        }
        return response.data;
      });
  }
  logout() {
    $http.removeAccessToken();
  }
  register(user) {
    console.log(user);
    return $http.post('auths/signup', {
      confirmPassword: user.confirmPassword,
      email: user.email,
      password: user.password
    }).then(response => {
   
      return response.success;
    })
  }
}
export default new AuthService();
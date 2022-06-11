import * as type from './type'
import { $http } from '../../../plugins/http-wrapper';

export const login = async ({commit}, params) => {
  try {
    const { email, password } = params;
    const response = await $http.post('/auths/signin', {password, email});
    if (response.success) {
      const { data } = response;
      localStorage.setItem('auth', JSON.stringify(data))
      $http.setAccessToken(data.accessToken);
      $http.setDefaultData(data.profile.cartId, data.profile.wishlistId)

      const token = {
        token: data.accessToken,
        profile: data.profile
      }
      commit(type.LOGIN_SUCCESS, token);
      
      return { success: true };
    }
    else{
      return { success: false, msg: 'Oops, Somethings went wrong!' };
    }
  } catch (error) {
    return { success: false, message: 'Oops, Somethings went wrong!' };
  }
};

export const logout = async ({ commit }) => {
  $http.removeAccessToken()
  localStorage.removeItem('auth')
  commit(type.LOGOUT)
};

export const register = async ({commit},params) => {
  try {
    const { email , password, confirmPassword } = params;
    const repsonse = await $http.post('/auths/signup', { email, password, confirmPassword })
    
    if(repsonse.success === true){
      commit(type.REGISTER_SUCCESS)
      return { success: true };
    }
    else{
      return { success: false, msg: 'Oops, Somethings went wrong!' };
    }
  } catch (error) {
    return { success: false, message: 'Oops, Somethings went wrong!' };
  }


}
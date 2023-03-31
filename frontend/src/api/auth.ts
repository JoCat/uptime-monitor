import { api } from './api';

interface LoginResponse {
  accessToken: string;
}

export function authLogin(username: string, password: string) {
  return api
    .post('auth/login', { json: { username, password } })
    .json<LoginResponse>();
}

export function authLogout(refreshToken: string) {
  return api.post('auth/logout', { json: { refreshToken } }).json();
}

import { api } from './api';

export function authLogin(username: string, password: string) {
  return api.post('auth/login', { json: { username, password } });
}

export function authLogout() {
  return api.post('auth/logout');
}

export function authCheck() {
  return api.get('auth/check', { credentials: 'include' });
}

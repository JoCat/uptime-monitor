import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

// import { setAuth } from '../api/api';
import { authLogin, authLogout } from '../api/auth';

const defaultState = {
  isLoggedIn: false,
  // user: {
  //   id: '',
  //   isAdmin: false,
  //   isActive: false,
  // },
};
const userState = atom({
  key: 'user',
  default: defaultState,
});
const userLoaded = atom({
  key: 'userLoaded',
  default: false,
});

export const useUser = () => {
  const [user, setUser] = useRecoilState(userState);
  const [isLoaded, setIsLoaded] = useRecoilState(userLoaded);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) auth(accessToken);
    setIsLoaded(true);
  }, []);

  async function login(email: string, password: string) {
    const { accessToken } = await authLogin(email, password);
    localStorage.setItem('accessToken', accessToken);
    // setAuth(accessToken);
    auth(accessToken);
  }

  function auth(accessToken: string) {
    const userData = JSON.parse(atob(accessToken.split('.')[1]));
    setUser({
      isLoggedIn: true,
      // user: {
      //   id: userData.userId,
      //   isAdmin: userData.isAdmin,
      //   isActive: userData.isActive,
      // },
    });
  }

  async function logout() {
    await authLogout(localStorage.getItem('refreshToken')!);
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    setUser(defaultState);
    // setAuth(undefined);
  }

  return { ...user, login, logout, isLoaded };
};

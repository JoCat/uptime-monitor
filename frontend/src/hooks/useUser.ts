import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

import { authCheck } from '../api';

const userIsLoggedIn = atom({
  key: 'userIsLoggedIn',
  default: false,
});
const userLoaded = atom({
  key: 'userLoaded',
  default: false,
});

export const useUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(userIsLoggedIn);
  const [isLoaded, setIsLoaded] = useRecoilState(userLoaded);

  useEffect(() => {
    checkAuth().finally(() => {
      setIsLoaded(true);
    });
  }, []);

  const checkAuth = async () => {
    try {
      await authCheck();
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  return { isLoaded, isLoggedIn, checkAuth };
};

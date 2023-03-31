import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { useUser } from '../hooks/useUser';
import { Login } from '../pages/admin/login';

export function AdminLayout() {
  const { isLoggedIn, isLoaded } = useUser();
  // const location = useLocation();
  // const history = useHistory();

  const isAuthPaths = ['/login'].includes(location.pathname);

  useEffect(() => {
    if (!isLoaded) return;
    // if (!isLoggedIn && !isAuthPaths) return history.push('/login');
    // if (isLoggedIn && isAuthPaths) history.push('/');
  }, [isAuthPaths, history, isLoggedIn, isLoaded]);

  if (!isLoaded) return <></>;

  return <main>{isLoggedIn ? <Outlet /> : <Login />}</main>;
}

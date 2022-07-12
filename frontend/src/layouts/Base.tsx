import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { api } from '../api/api';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function BaseLayout() {
  const [themeData, setThemeData] = useState({});

  useEffect(() => {
    api('theme')
      .json()
      .then((data) => setThemeData(data as any));
  }, []);

  return (
    <>
      <Header {...themeData} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

import { useEffect, useState } from 'react';

import { api } from '../api/api';
import { Header } from '../components/Header';

export function BaseLayout() {
  const [themeData, setThemeData] = useState({});

  useEffect(() => {
    api('theme')
      .json()
      .then((data) => setThemeData(data as any));
  }, []);

  return <Header {...themeData} />;
}

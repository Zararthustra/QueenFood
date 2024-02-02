import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

import { getLS } from './localStorageService';

import { Sidebar } from '@components/index';
import AppContext from '@services/AppContext';

const AppWrapper = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [darkMode, setDarkMode] = useState<boolean>(
    getLS('darkmode') === 'true' ? true : false
  );

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={`${
          isOpenSidebar ? 'fmd:pl-[200px]' : 'fmd:pl-[50px]'
        } flex`}>
        <Sidebar
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
        <div className={`min-h-screen w-full px-1 ${isMobile ? 'mt-20' : ''}`}>
          <Outlet />
        </div>
      </div>
      <footer className="flex flex-col items-center gap-2 bg-slate-100 py-10 dark:bg-slate-800 dark:text-slate-100">
        <div>Tous droits réservés © 2024</div>
        <a
          href="mailto:arthmayer@outlook.fr"
          className="text-blue-500 underline">
          Contacter le développeur
        </a>
      </footer>
    </AppContext.Provider>
  );
};

export default AppWrapper;

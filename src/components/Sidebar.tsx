import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { DarkModeToggle } from './DarkModeToggle';

import {
  IconFood,
  IconFormula,
  IconHome,
  IconIntolerance,
  IconKhayat,
  IconLogo,
  IconSidebarClose,
  IconSidebarOpen
} from '@assets/index';

interface ISidebarProps {
  isOpenSidebar: boolean;
  setIsOpenSidebar: (value: boolean) => void;
}

export const Sidebar = ({ isOpenSidebar, setIsOpenSidebar }: ISidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    if (isMobile) setIsOpenSidebar(false);
  }, [location.pathname]);

  const items = [
    {
      icon: <IconHome width={32} height={32} className="shrink-0" />,
      title: 'Accueil',
      link: '/'
    },
    {
      icon: <IconFormula width={32} height={32} className="shrink-0" />,
      title: 'Formules',
      link: '/formules'
    },
    {
      icon: <IconIntolerance width={32} height={32} className="shrink-0" />,
      title: 'Intolérances',
      link: '/intolerances'
    },
    {
      icon: <IconFood width={32} height={32} className="shrink-0" />,
      title: 'Aliments',
      link: '/aliments'
    },
    {
      icon: <IconKhayat width={32} height={32} className="shrink-0" />,
      title: 'Fiches',
      link: '/fiches'
    }
  ];

  if (isMobile && !isOpenSidebar)
    return (
      <div className="fixed z-50 flex w-full items-center justify-between bg-slate-100 p-2 text-primary-500 opacity-90 dark:bg-slate-800">
        <IconSidebarOpen
          size={32}
          onClick={() => setIsOpenSidebar(!isOpenSidebar)}
        />
        {location.pathname === '/' ? (
          <div className="h-[50px] w-[50px]" />
        ) : (
          <IconLogo
            className="mr-5 text-slate-950 dark:text-slate-100"
            onClick={() => navigate('/')}
            width={50}
            height={50}
          />
        )}
      </div>
    );

  return (
    <aside
      className={
        isOpenSidebar
          ? 'sidebar sidebar--open shadow-md'
          : 'sidebar sidebar--closed shadow-md'
      }>
      <header
        className={`flex items-center border-b-[1px] py-2 dark:border-gray-700 ${
          isOpenSidebar ? 'justify-between pr-4' : 'justify-center'
        }`}>
        {isOpenSidebar ? (
          <IconSidebarClose
            className="my-2 shrink-0 cursor-pointer text-primary-500"
            size={32}
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
          />
        ) : (
          <IconSidebarOpen
            className="my-2 shrink-0 cursor-pointer text-primary-500"
            size={32}
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
          />
        )}
        {isOpenSidebar && (
          <IconLogo className="dark:text-slate-100" width={50} height={50} />
        )}
      </header>

      <ul className="mt-5">
        {items.map((item, index) => (
          <li key={index} className="">
            <Link
              className={`my-1 flex items-center rounded p-1 text-base hover:bg-gray-200 dark:hover:bg-gray-700 ${
                isOpenSidebar ? 'justify-between pr-4' : 'justify-center'
              }
              ${location.pathname === item.link ? 'text-primary-500' : ''}`}
              to={item.link}>
              {item.icon}
              {isOpenSidebar && (
                <p
                  className={
                    location.pathname === item.link ? 'font-bold' : ''
                  }>
                  {item.title}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>

      <footer className="fixed bottom-2">
        <div
          className={`
          ${isOpenSidebar ? 'w-[183px]' : 'w-[35px]'} 
          flex cursor-pointer items-center justify-center border-b-[1px] pb-2 text-base dark:border-gray-700`}>
          <DarkModeToggle />
        </div>
        <p
          className={`pt-2 text-xs text-gray-400 ${
            isOpenSidebar ? 'text-right' : ''
          }`}>
          {isOpenSidebar ? 'Version ' + APP_VERSION : APP_VERSION}
        </p>
      </footer>
    </aside>
  );
};

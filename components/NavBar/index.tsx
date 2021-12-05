/* eslint-disable prettier/prettier */
import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TiAdjustBrightness } from 'react-icons/ti';
import { TiAdjustContrast } from 'react-icons/ti';

import { useTheme } from '../../context/theme';
import { Background, Container, MenuIcon, MenuBar } from './styles';

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);

  const { pathname } = useRouter();
  const { changeTheme, theme, lock } = useTheme();

  const handleOpen = useCallback(
    (close = false): void => {
      if (close) {
        setOpen(false);
        setTab(0);
        lock(false);
      } else {
        setOpen(!open);
        lock(true);
      }
    },
    [open, lock]
  );

  const handleNewTab = useCallback(
    (n: number): void => {
      setOpen(false);
      setTab(n);
      lock(false);
    },
    [lock]
  );

  useEffect(() => {
    if (pathname === '/contato') {
      handleNewTab(3);
    } else if (pathname === '/portfolio') {
      handleNewTab(2);
    } else {
      handleOpen(true);
    }
  }, [pathname]);

  return (
    <Background>
      <Container tab={tab} isOpen={open}>
        <Link href="/">
          <a>
            <p>
              <strong>Leandro</strong> Costa
            </p>
          </a>
        </Link>
        <MenuIcon onClick={(): void => handleOpen()} isOpen={open} tab={tab}>
          <MenuBar />
          <MenuBar />
          <MenuBar />
        </MenuIcon>
        <ul>
          {theme === 'dark' ? (
            <TiAdjustBrightness
              size={26}
              color="#FAFAFA"
              onClick={changeTheme}
            />
          ) : (
            <TiAdjustContrast size={26} color="#FAFAFA" onClick={changeTheme} />
          )}
          <li>
            <Link href="/portfolio">
              <a>portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <a>contato</a>
            </Link>
          </li>
        </ul>
      </Container>
    </Background>
  );
};

export default NavBar;

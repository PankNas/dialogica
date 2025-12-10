'use client';

import Image from 'next/image';
import LogoIcon from '@/shared/images/logo.svg';
import { CONTACTS_ANCHOR, FEEDBACK_ANCHOR, PRODUCTS_ANCHOR, TASKS_ANCHOR } from '@/shared/config';
import Link from 'next/link';
import { Container } from '@/shared/ui';
import { useEffect, useRef, useState } from 'react';
import { mergeClassNames } from '@/shared/lib';
import { ButtonLink } from '@/shared/ui/link';

const navigation = [
  {
    link: `/#${PRODUCTS_ANCHOR}`,
    name: 'Продукты',
  },
  {
    link: `/#${TASKS_ANCHOR}`,
    name: 'Задачи',
  },
  {
    link: `/#${CONTACTS_ANCHOR}`,
    name: 'Контакты',
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  // Обновляем высоту меню при открытии
  useEffect(() => {
    if (isMenuOpen && menuContentRef.current) {
      setMenuHeight(menuContentRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [isMenuOpen]);

  // Закрытие меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const header = headerRef.current;

      if (header && !header.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Закрытие меню при нажатии Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleClickBurgerButton = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 backdrop-blur-sm bg-foreground border-b border-gray-800"
    >
      <Container className="py-3 relative">
        <div>
          <div className="flex items-center justify-between gap-8">
            {/* Логотип */}
            <div className="lg:flex-1">
              <Link href="/" onClick={handleNavClick} replace className="flex-shrink-0 z-10">
                <Image src={LogoIcon} alt="logo" className="h-10 w-auto cursor-pointer" />
              </Link>
            </div>

            {/* Десктопная навигация */}
            <nav className="hidden md:flex gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  replace
                  className={mergeClassNames(
                    'text-white text-base font-semibold',
                    'hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <ButtonLink href={`/#${FEEDBACK_ANCHOR}`} animation={false}>
                Оставить заявку
              </ButtonLink>
            </div>

            {/* Бургер-меню для мобильных */}
            <div className="md:hidden z-10">
              <button
                ref={burgerButtonRef}
                onClick={handleClickBurgerButton}
                className={mergeClassNames(
                  `cursor-pointer flex flex-col items-center justify-center w-10 h-10 rounded-md transition-colors relative z-20 hover:bg-gray-800`,
                  { 'bg-gray-800': isMenuOpen }
                )}
                aria-label="Меню"
                aria-expanded={isMenuOpen}
              >
                <div className="w-6 h-5 relative">
                  <span
                    className={mergeClassNames(
                      `absolute top-0 left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 `,
                      { 'top-1/2 -translate-y-1/2 rotate-45': isMenuOpen }
                    )}
                  />
                  <span
                    className={mergeClassNames(
                      `absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300`,
                      { 'opacity-0': isMenuOpen }
                    )}
                  />
                  <span
                    className={mergeClassNames(
                      `absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300`,
                      { 'bottom-1/2 translate-y-1/2 -rotate-45': isMenuOpen }
                    )}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Мобильное выпадающее меню (под хедером) */}
          <div
            ref={menuRef}
            className={mergeClassNames(
              'md:hidden bg-foreground   border-b px-6 border-gray-800 absolute left-0 w-full pb-4  transition-all duration-300 ease-out overflow-hidden opacity-0 invisible',
              { 'opacity-100 visible': isMenuOpen }
            )}
            style={{
              height: isMenuOpen ? `${menuHeight}px` : '0px',
              marginTop: isMenuOpen ? '12px' : '0px',
            }}
          >
            <div ref={menuContentRef}>
              {/* Навигация */}
              <nav className="flex flex-col py-3" onClick={handleNavClick}>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    replace
                    className="block px-3 py-3 text-white text-base rounded-lg hover:bg-gray-800 transition-colors "
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="pb-4">
                <ButtonLink
                  href={`/#${FEEDBACK_ANCHOR}`}
                  onClick={handleNavClick}
                  animation={false}
                  className="w-full"
                >
                  Оставить заявку
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

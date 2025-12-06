'use client';

import Image from 'next/image';
import LogoIcon from '@/shared/images/logo.svg';
import { CONTACTS_ANCHOR, PRODUCTS_ANCHOR, TASKS_ANCHOR, WELCOME_ANCHOR } from '@/shared/config';
import Link from 'next/link';
import { Button, Container } from '@/shared/ui';
import { mergeClassNames } from '@/shared/lib';
import { useEffect, useRef, useState } from 'react';

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
  const headerRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById(WELCOME_ANCHOR);
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Если сенсор перестал быть видимым — header стал sticky
        console.log(entry, sentinel);
        setStuck(!entry.isIntersecting);
      },
      {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0,
      }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  console.log(stuck);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-foreground">
      <Container className="py-3">
        <div className="flex items-center gap-8 justify-between">
          <div className="flex-1">
            <Link href={`/#${WELCOME_ANCHOR}`} replace>
              <Image src={LogoIcon} alt="logo" className="h-10 w-auto cursor-pointer " />
            </Link>
          </div>

          <nav className="lg:flex items-center gap-8">
            {navigation.map((item) => {
              return (
                <Link key={item.name} href={item.link} replace className="text-white text-base">
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <Button>Оставить заявку</Button>
        </div>
      </Container>
    </header>
  );
};

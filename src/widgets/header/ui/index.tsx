'use client';

import { useState } from 'react';
import { ContactForm } from '@/features/contactForm/ContactForm';
import Image from 'next/image';
import LogoIcon from '@/shared/images/logo.svg';
import { CONTACTS_ANCHOR, PRODUCTS_ANCHOR, TASKS_ANCHOR } from '@/shared/config';
import Link from 'next/link';
import { Button, Container } from '@/shared/ui';

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
  const [isFormOpen, setIsFormOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-foreground">
        <Container className="py-4">
          <div className="flex items-center gap-8 justify-between">
            <div className="flex-1">
              <Image
                src={LogoIcon}
                alt="logo"
                className="h-14 w-auto cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>

            <nav className="lg:flex items-center gap-8">
              {navigation.map((item) => {
                return (
                  <Link
                    onClick={() => scrollToSection('products')}
                    key={item.name}
                    href={item.link}
                    replace
                    className="text-white text-base"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            <Button onClick={() => setIsFormOpen(true)}>Оставить заявку</Button>
          </div>
        </Container>
      </header>
      {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
    </>
  );
};

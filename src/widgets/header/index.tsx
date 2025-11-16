'use client';

import { useState } from 'react';
import { ContactForm } from '@/features/contactForm/ContactForm';
import Image from 'next/image';
import Logo from '@/shared/images/logo.svg';
import { PRODUCTS_ANCHOR } from '@/shared/config';
import Link from 'next/link';

const navigation = [
  {
    link: `/#${PRODUCTS_ANCHOR}`,
    name: 'Продукты',
  },
  {
    link: '',
    name: 'Задачи',
  },
  {
    link: '',
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
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Image
              src={Logo}
              alt="logo"
              className="h-14 w-auto cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />

            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => {
                return (
                  <Link key={item.name} href={item.link} replace className="text-white">
                    {item.name}
                  </Link>
                );
              })}

              <button
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Продукты
              </button>
              <button
                onClick={() => scrollToSection('tasks')}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Задачи
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Контакты
              </button>
            </nav>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </header>
      {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
    </>
  );
};

'use client';

import { useState } from 'react';
import { ContactForm } from '@/features/contactForm/ContactForm';

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
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Dialogica
            </div>
            <nav className="hidden lg:flex items-center gap-8">
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
      {isFormOpen && (
        <ContactForm onClose={() => setIsFormOpen(false)} />
      )}
    </>
  );
};


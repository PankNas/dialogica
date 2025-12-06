'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import CertificateIcon from '@/shared/images/certificate.jpg';

interface ContactFormProps {
  onClose: () => void;
}

export const ContactForm = ({ onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    question: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-8">
        <div className="w-full">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Имя *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Введите ваше имя"
          />
        </div>
        <div className="w-full">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Телефон *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="+7 (___) ___-__-__"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Компания
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          placeholder="Название вашей компании"
        />
      </div>
      <div>
        <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
          Вопрос / предложение
        </label>
        <textarea
          id="question"
          name="question"
          rows={3}
          value={formData.question}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-all"
          placeholder="Опишите ваш вопрос или предложение"
        />
      </div>

      <div className="flex gap-2 items-start">
        <input
          type="checkbox"
          id="privacy"
          name="company"
          required
          value={formData.company}
          onChange={handleChange}
          // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          // placeholder="Название вашей компании"
        />
        <label htmlFor="privacy" className="block text-sm font-medium text-gray-700">
          Нажимая кнопку я соглашаюсь с{' '}
          <a href="#" className="text-blue-600">
            Политикой конфиденциальности
          </a>{' '}
          и даю свое согласие на{' '}
          <a href="#" className="text-blue-600">
            Обработку моих персональных данных
          </a>
        </label>
      </div>
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Получить консультацию
        </button>
      </div>
    </form>
  );
};

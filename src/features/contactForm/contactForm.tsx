'use client';

import { FormEvent, useRef } from 'react';
import { FormItem, Label } from '@/features/contactForm';
import { Button, Input, Textarea } from '@/shared/ui';

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    console.log(formValues);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex gap-6">
        <FormItem name="name" label="Имя" required>
          <Input id="name" name="name" required placeholder="Введите ваше имя" />
        </FormItem>

        <FormItem name="phone" label="Телефон" required>
          <Input id="phone" name="phone" required placeholder="+7 (___) ___-__-__" />
        </FormItem>
      </div>

      <FormItem name="company" label="Компания">
        <Input id="company" name="company" required placeholder="Название вашей компании" />
      </FormItem>

      <FormItem name="question" label="Вопрос / предложение" required>
        <Textarea
          required
          placeholder="Опишите ваш вопрос или предложение"
          id="question"
          name="question"
          className="resize-none"
          rows={3}
        />
      </FormItem>

      <FormItem name="privacy" className="flex-row">
        <Input required id="privacy" name="privacy" type="checkbox" className="size-4" />
        <Label htmlFor="privacy" className="inline">
          Нажимая кнопку я соглашаюсь с{' '}
          <a href="#" className="text-blue-600">
            Политикой конфиденциальности
          </a>{' '}
          и даю свое согласие на{' '}
          <a href="#" className="text-blue-600">
            Обработку моих персональных данных
          </a>
        </Label>
      </FormItem>

      <Button type="submit" className="w-full">
        Получить консультацию
      </Button>
    </form>
  );
};

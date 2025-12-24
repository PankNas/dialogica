'use client';

import React, { FormEvent, useRef, useState } from 'react';
import { formatRussianPhone, FormItem, Label } from '@/widgets/contactForm';
import { Button, Checkbox, Input, Loader, OuterLink, Textarea } from '@/shared/ui';

const phonePattern = '8 (___) ___-__-__';

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '');

    // Настройка письма через settings
    formData.append('from_name', 'Dialogica');
    formData.append('subject', `Новая заявка c сайта ${process.env.NEXT_PUBLIC_DOMAIN}`);

    const phone = String(formData.get('phone')) || '';
    formData.set('phone', phone.replace(/[\s\-()]/g, ''));

    try {
      setLoading(true);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();

      console.log('Submit form message:', result.message);

      if (result.success) {
        formRef.current?.reset();
        alert('Ваша заявка отправлена');
      } else {
        alert('Не удалось отправить заявку. Повторите позже.');
      }
    } catch {
      alert('Не удалось отправить заявку. Повторите позже.');
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneInput = () => {
    if (!phoneRef.current) return;

    const value = phoneRef.current.value.replace(/\D/g, '');

    if (!value) {
      phoneRef.current.value = '';
      return;
    }

    phoneRef.current.value = formatRussianPhone(value, phonePattern);
  };

  const handlePastePhoneInput = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault(); // блокируем стандартную вставку

    if (phoneRef.current) {
      const pastedData = e.clipboardData.getData('text').replace(/^(\+7)/, '8');

      phoneRef.current.value = formatRussianPhone(pastedData, phonePattern);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex gap-6 flex-col md:flex-row">
        <FormItem name="name" label="Имя" required>
          <Input id="name" name="name" required placeholder="Введите ваше имя" />
        </FormItem>

        <FormItem name="phone" label="Телефон" required>
          <Input
            ref={phoneRef}
            inputMode="numeric"
            id="phone"
            name="phone"
            required
            placeholder={phonePattern}
            onInput={handlePhoneInput}
            onPaste={handlePastePhoneInput}
          />
        </FormItem>
      </div>

      <FormItem name="company" label="Компания">
        <Input id="company" name="company" placeholder="Название вашей компании" />
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

      <FormItem name="privacy" className="grid grid-cols-[auto_1fr]">
        <Checkbox required id="privacy" name="privacy" />
        <Label htmlFor="privacy" className="inline" required>
          <span>
            <span>Даю согласие на </span>
            <OuterLink href="/documents/Согласие_на_обработку_персональных_данных.pdf">
              обработку персональных данных
            </OuterLink>
          </span>
        </Label>
      </FormItem>

      <Button
        type="submit"
        className="w-full flex items-center gap-2 justify-center"
        disabled={loading}
      >
        {loading && <Loader className="size-4" />}
        Получить консультацию
      </Button>
    </form>
  );
};

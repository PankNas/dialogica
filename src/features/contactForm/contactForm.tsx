'use client';

import React, { FormEvent, useRef, useState } from 'react';
import { formatRussianPhone, FormItem, Label } from '@/features/contactForm';
import { Button, Checkbox, Input, Loader, Textarea } from '@/shared/ui';
import { DocumentModal } from '@/widgets/document';
import { useAlert } from '@/shared/ui/alert';

const phonePattern = '8 (___) ___-__-__';

type ContactFormParams = {
  name: string;
  phone: string;
  company: string;
  question: string;
  privacy: string;
};

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const alert = useAlert();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries()) as ContactFormParams;

    try {
      setLoading(true);
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: formValues.phone.replace(/[\s\-()]/g, ''),
          name: formValues.name,
          company: formValues.company,
          question: formValues.question,
        }),
      });

      const result = await res.json();

      if (result.ok) {
        alert.addAlert(`Сообщение отправлено! ${Date.now()}`);
        // formRef.current?.reset();
      } else {
        alert.addAlert('Ошибка отправки');
      }
    } catch {
      alert.addAlert('Ошибка отправки');
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
    <>
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
              <DocumentModal title="обработку персональных данных" variant="consentToProcessing" />
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
    </>
  );
};

'use client';

// import { Header } from '@/widgets/header';
// import { Footer } from '@/widgets/footer/Footer';
import { ProductCard } from '@/entities/product/ProductCard';
import { TaskCard } from '@/entities/task/TaskCard';
import { CONTACTS_ANCHOR, FEEDBACK_ANCHOR, PRODUCTS_ANCHOR, TASKS_ANCHOR } from '@/shared/config';
import RobotIcon from '@/shared/images/robot.png';
// import Robot2Icon from '@/shared/images/robot3.svg';
import Image from 'next/image';
import { Button, Container, Modal } from '@/shared/ui';
import ArrowLeftIcon from '@/shared/images/arrow-left.svg';

import PeopleIcon from '@/shared/images/robot2.svg';
import BusinessIcon from '@/shared/images/test.svg';

import MicroIcon from '@/shared/images/micro.svg';
import PaperPlaneIcon from '@/shared/images/paper-plane.svg';
import ChattingIcon from '@/shared/images/chatting.svg';
import MessageIcon from '@/shared/images/message.svg';
import AiWidgetIcon from '@/shared/images/ai-widget.svg';
import ChatPlatformIcon from '@/shared/images/chat-platform.svg';

import './index.css';
import { clsx } from 'clsx';
import { useState } from 'react';
import { ContactForm } from '@/features/contactForm';
import CertificateIcon from '@/shared/images/certificate-2.jpg';
import Certificate2Icon from '@/shared/images/certificate.jpg';
import { ButtonLink } from '@/shared/ui/link';
import { Tasks } from '@/app/tasks';

const products = [
  {
    title: 'Голосовой бот',
    description:
      'Автоматизация звонков и обработки входящих вызовов с помощью искусственного интеллекта',
    icon: MicroIcon,
  },
  {
    title: 'Чат-бот',
    description: 'Умный помощник для общения с клиентами в мессенджерах и на сайте',
    icon: ChattingIcon,
  },
  {
    title: 'Чат платформа',
    description: 'Омниканальная платформа для управления всеми каналами коммуникации',
    icon: ChatPlatformIcon,
  },
  {
    title: 'Рассылка сообщений',
    description: 'Автоматизация уведомлений и массовых рассылок клиентам',
    icon: PaperPlaneIcon,
  },
  {
    title: 'Виджет на сайт',
    description: 'Встроенный виджет для сайта с возможностью общения с клиентами',
    icon: MessageIcon,
  },
  {
    title: 'ИИ-виджет',
    description: 'Продвинутый виджет с искусственным интеллектом для интеллектуального общения',
    icon: AiWidgetIcon,
  },
];

const tasks = [
  {
    title: 'NPS - опрос о качестве обслуживания',
    description:
      'Звонки в удобное для клиентов время. Исключается человеческий фактор. Стоимость минуты разговора робота в 3-6 раз ниже.',
    type: 'listen',
    sector: 'Опросы',
  },
  {
    title: 'Предсервисный опрос.\n' + 'Напоминание о визите',
    description:
      'Звонки в удобное для клиентов время. Исключается человеческий фактор. Стоимость минуты разговора робота в 3-6 раз ниже.',
    type: 'listen',
    sector: 'Опросы',
  },
  {
    title: 'Бот AI-консультант по базе знаний',
    description:
      'Мгновенные ответы вместо долгого поиска по базе знаний. \n' +
      'Сокращение ошибок вследствие легкого и простого доступа к информации.\n' +
      'Единый источник истины',
    sector: 'Опросы',
    type: 'watch',
  },
  {
    title: 'Привлечение клиентов по холодной базе',
    description:
      'Быстрый обзвон сотен клиентов.\n' +
      'Автоматическое выявление горячих лидов по готовности к продолжению диалога.\n' +
      'Низкая стоимость лида.',
    type: 'listen',
    sector: 'Продажи',
  },
  {
    title: 'Обзвон по объявлениям о продаже с целью выкупа',
    description:
      'Сотрудники не тратят часы на «пустые» звонки, а концентрируются на работе с горячими клиентами. Сокращение затрат на обзвон в 3-6 раз.',
    type: 'listen',
    sector: 'Продажи',
  },
  {
    title: 'Обзвон по рекомендациям при последнем визите',
    description:
      '10-15% дополнительного трафика с высоким средним чеком. \n' +
      'Освобождение операторов от рутинных и непродуктивных звонков.',
    type: 'listen',
    sector: 'Продажи',
  },
  {
    title: 'Запись на обслуживание на сайте и в мессенджерах',
    description:
      'Ни одного потерянного клиента.  Прием заявок 24/7, даже в нерабочее время и выходные. Возможность записи - там, где клиент всегда онлайн, где ему удобнее.',
    sector: 'Клиентский сервис',
    type: 'watch',
  },
  {
    title: 'Приглашение на техническое обслуживании\n',
    description:
      'Проявление заботы о клиенте. Регулярное напоминание о ТО повышает удовлетворенность сервисом. Увеличение доли повторных визитов на сервис.',
    type: 'listen',
    sector: 'Клиентский сервис',
  },
  {
    title: 'Омниканальная чат-платформа для операторов',
    description:
      '«Единое окно» — общение с клиентами из панели оператора, независимо от их канала (Telegram, WhatsApp, Viber, email, SMS). Развитая аналитика.',
    sector: 'Клиентский сервис',
    type: 'watch',
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="bg-foreground">
        {/*<Container className="flex gap-20 justify-center align-bottom relative h-[600px]">*/}
        {/*  <Image*/}
        {/*    src={BusinessIcon}*/}
        {/*    alt=""*/}
        {/*    className="absolute opacity-35 top-1/2 -translate-y-1/2"*/}
        {/*  />*/}

        {/*  <div className="flex flex-col gap-5 z-10 text-center max-w-[1024px] pt-[130px] /!*pt-[80px]*!/">*/}
        {/*    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">*/}
        {/*      Интеллектуальные коммуникации для вашего бизнеса*/}
        {/*    </h1>*/}
        {/*    <p className="text-[22px] md:text-xl text-white/90 leading-relaxed mt-[40px]">*/}
        {/*      Проектируем, разрабатываем и внедряем AI голосовых роботов, чат-ботов и другие сервисы*/}
        {/*      коммуникаций, которые круглосуточно и эффективно работают на вашем сайте, в*/}
        {/*      мессенджерах и по телефону*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</Container>*/}

        {/*<Container className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center relative min-h-[600px] py-10 lg:py-0 lg:h-[600px]">*/}
        {/*  <div className="/!*order-2 lg:order-1*!/ order-1 flex flex-col gap-5 z-10 text-center lg:text-left max-w-[1024px]">*/}
        {/*    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">*/}
        {/*      Интеллектуальные коммуникации для вашего бизнеса*/}
        {/*    </h1>*/}
        {/*    <p className="text-lg sm:text-xl md:text-[22px] text-white/90 leading-relaxed mt-6 md:mt-[40px] lg:max-w-3/4">*/}
        {/*      Проектируем, разрабатываем и внедряем AI голосовых роботов, чат-ботов и другие сервисы*/}
        {/*      коммуникаций, которые круглосуточно и эффективно работают на вашем сайте, в*/}
        {/*      мессенджерах и по телефону*/}
        {/*    </p>*/}

        {/*    /!* Кнопка Связаться - видна только на мобильных *!/*/}
        {/*    <ButtonLink href={`/${FEEDBACK_ANCHOR}`} className="w-full lg:hidden">*/}
        {/*      Связаться*/}
        {/*    </ButtonLink>*/}
        {/*  </div>*/}

        {/*  /!* Картинка - на мобильных под текстом, на десктопе как было *!/*/}
        {/*  <div className="/!*order-1 *!/lg:order-2 w-full lg:w-auto flex justify-center sm:absolute md:static">*/}
        {/*    <Image*/}
        {/*      src={BusinessIcon}*/}
        {/*      alt=""*/}
        {/*      className="lg:absolute opacity-65 lg:opacity-35 lg:top-1/2 lg:-translate-y-1/2 max-w-[300px] sm:max-w-full lg:max-w-none"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</Container>*/}

        {/*<Container className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center relative min-h-screen lg:min-h-[600px] py-16 lg:py-0 lg:h-[600px]">*/}
        {/*  <div className="order-1 flex flex-col gap-8 z-10 text-center lg:text-left max-w-[1024px]">*/}
        {/*    /!* Заголовок с акцентом *!/*/}
        {/*    <div className="space-y-4">*/}
        {/*      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 mb-2">*/}
        {/*        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>*/}
        {/*        <span className="text-sm font-medium text-white/80">AI-коммуникации будущего</span>*/}
        {/*      </div>*/}

        {/*      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">*/}
        {/*        Интеллектуальные*/}
        {/*        <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">*/}
        {/*          коммуникации*/}
        {/*        </span>*/}
        {/*        для вашего бизнеса*/}
        {/*      </h1>*/}
        {/*    </div>*/}

        {/*    /!* Описание с иконками преимуществ *!/*/}
        {/*    <div className="space-y-6">*/}
        {/*      <p className="text-xl sm:text-2xl text-white/80 leading-relaxed font-light">*/}
        {/*        Проектируем, разрабатываем и внедряем AI голосовых роботов, чат-ботов и другие*/}
        {/*        сервисы коммуникаций, которые круглосуточно и эффективно работают на вашем сайте, в*/}
        {/*        мессенджерах и по телефону*/}
        {/*      </p>*/}

        {/*      /!* Блок преимуществ *!/*/}
        {/*      <div className="grid grid-cols-2 gap-4 mt-8">*/}
        {/*        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">*/}
        {/*          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">*/}
        {/*            <span className="text-lg">🤖</span>*/}
        {/*          </div>*/}
        {/*          <span className="text-sm font-medium text-white">AI-боты</span>*/}
        {/*        </div>*/}

        {/*        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">*/}
        {/*          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">*/}
        {/*            <span className="text-lg">🎯</span>*/}
        {/*          </div>*/}
        {/*          <span className="text-sm font-medium text-white">24/7 работа</span>*/}
        {/*        </div>*/}

        {/*        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">*/}
        {/*          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">*/}
        {/*            <span className="text-lg">⚡</span>*/}
        {/*          </div>*/}
        {/*          <span className="text-sm font-medium text-white">Быстрый запуск</span>*/}
        {/*        </div>*/}

        {/*        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">*/}
        {/*          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">*/}
        {/*            <span className="text-lg">📈</span>*/}
        {/*          </div>*/}
        {/*          <span className="text-sm font-medium text-white">Рост продаж</span>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    /!* Кнопки действий *!/*/}
        {/*    <div className="flex flex-col sm:flex-row gap-4 mt-8">*/}
        {/*      <ButtonLink*/}
        {/*        href={`/${FEEDBACK_ANCHOR}`}*/}
        {/*        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-lg shadow-blue-500/25"*/}
        {/*      >*/}
        {/*        <span className="flex items-center justify-center gap-2">*/}
        {/*          Бесплатная консультация*/}
        {/*          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
        {/*            <path*/}
        {/*              strokeLinecap="round"*/}
        {/*              strokeLinejoin="round"*/}
        {/*              strokeWidth="2"*/}
        {/*              d="M17 8l4 4m0 0l-4 4m4-4H3"*/}
        {/*            ></path>*/}
        {/*          </svg>*/}
        {/*        </span>*/}
        {/*      </ButtonLink>*/}

        {/*      <ButtonLink*/}
        {/*        href="#cases"*/}
        {/*        variant="outline"*/}
        {/*        className="w-full sm:w-auto px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"*/}
        {/*      >*/}
        {/*        Смотреть кейсы*/}
        {/*      </ButtonLink>*/}
        {/*    </div>*/}
        {/*  </div>*/}

        {/*  /!* Картинка - современный дизайн *!/*/}
        {/*  <div className="lg:order-2 w-full lg:w-auto flex justify-center mt-12 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0">*/}
        {/*    <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]">*/}
        {/*      /!* Декоративные элементы *!/*/}
        {/*      <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-blue-500/20 blur-xl"></div>*/}
        {/*      <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-purple-500/20 blur-xl"></div>*/}

        {/*      /!* Градиентная рамка *!/*/}
        {/*      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/30 via-transparent to-purple-500/30 p-[2px]">*/}
        {/*        <div className="w-full h-full rounded-3xl bg-gray-900/80 backdrop-blur-sm"></div>*/}
        {/*      </div>*/}

        {/*      /!* Картинка с эффектами *!/*/}
        {/*      <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">*/}
        {/*        <Image*/}
        {/*          src={BusinessIcon}*/}
        {/*          alt="AI коммуникации для бизнеса"*/}
        {/*          className="w-full h-auto opacity-90 lg:opacity-35 transform transition-transform duration-700 hover:scale-105"*/}
        {/*        />*/}

        {/*        /!* Наложение градиента *!/*/}
        {/*        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>*/}

        {/*        /!* Плавающие элементы поверх картинки *!/*/}
        {/*        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center border border-blue-400/30">*/}
        {/*          <span className="text-lg">🤖</span>*/}
        {/*        </div>*/}
        {/*        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center border border-purple-400/30">*/}
        {/*          <span className="text-lg">💬</span>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</Container>*/}

        {/*<Container className="relative">*/}
        {/*  <div className="flex flex-col lg:flex-row items-center lg:items-stretch min-h-screen lg:min-h-[700px] py-12 lg:py-20">*/}
        {/*    /!* Контент - слева на десктопе, сверху на мобильных *!/*/}
        {/*    <div className="flex-1 flex flex-col justify-center z-10 text-center lg:text-left max-w-6xl mx-auto lg:mx-0">*/}
        {/*      <div className="space-y-6 lg:space-y-8">*/}
        {/*        /!* Бейдж с тегом *!/*/}
        {/*        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10">*/}
        {/*          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>*/}
        {/*          <span className="text-sm font-medium text-white/80">*/}
        {/*            AI-коммуникации будущего*/}
        {/*          </span>*/}
        {/*        </div>*/}

        {/*        /!* Заголовок *!/*/}
        {/*        <div className="space-y-4 lg:space-y-6">*/}
        {/*          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">*/}
        {/*            Интеллектуальные*/}
        {/*            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-2 lg:mt-4">*/}
        {/*              коммуникации*/}
        {/*            </span>*/}
        {/*            для вашего бизнеса*/}
        {/*          </h1>*/}

        {/*          /!* Подзаголовок *!/*/}
        {/*          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white/80 leading-relaxed font-light max-w-3xl lg:max-w-2xl xl:max-w-3xl mx-auto lg:mx-0">*/}
        {/*            AI-решения для автоматизации общения с клиентами 24/7*/}
        {/*          </p>*/}
        {/*        </div>*/}

        {/*        /!* Основной текст *!/*/}
        {/*        <p className="text-lg sm:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl lg:max-w-2xl mx-auto lg:mx-0">*/}
        {/*          Проектируем, разрабатываем и внедряем AI голосовых роботов, чат-ботов и другие*/}
        {/*          сервисы коммуникаций, которые круглосуточно и эффективно работают на вашем сайте,*/}
        {/*          в мессенджерах и по телефону*/}
        {/*        </p>*/}

        {/*        /!* Преимущества - разные версии для разных устройств *!/*/}

        {/*        /!* Мобильная версия преимуществ (2x2) *!/*/}
        {/*        <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">*/}
        {/*          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">*/}
        {/*            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">*/}
        {/*              <span className="text-lg">🤖</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-sm font-medium text-white">AI-боты</span>*/}
        {/*          </div>*/}

        {/*          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">*/}
        {/*            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">*/}
        {/*              <span className="text-lg">🎯</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-sm font-medium text-white">24/7 работа</span>*/}
        {/*          </div>*/}

        {/*          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">*/}
        {/*            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">*/}
        {/*              <span className="text-lg">⚡</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-sm font-medium text-white">Быстрый запуск</span>*/}
        {/*          </div>*/}

        {/*          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">*/}
        {/*            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">*/}
        {/*              <span className="text-lg">📈</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-sm font-medium text-white">Рост продаж</span>*/}
        {/*          </div>*/}
        {/*        </div>*/}

        {/*        /!* Десктопная версия преимуществ (горизонтальная) *!/*/}
        {/*        <div className="hidden lg:grid lg:grid-cols-4 gap-4 mt-8 xl:mt-12">*/}
        {/*          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">*/}
        {/*            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">*/}
        {/*              <span className="text-2xl">🤖</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-lg font-semibold text-white mb-2">AI-боты</span>*/}
        {/*            <span className="text-sm text-white/60">Умные ассистенты</span>*/}
        {/*          </div>*/}

        {/*          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">*/}
        {/*            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-4">*/}
        {/*              <span className="text-2xl">🎯</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-lg font-semibold text-white mb-2">24/7 работа</span>*/}
        {/*            <span className="text-sm text-white/60">Круглосуточно</span>*/}
        {/*          </div>*/}

        {/*          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">*/}
        {/*            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4">*/}
        {/*              <span className="text-2xl">⚡</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-lg font-semibold text-white mb-2">Быстрый запуск</span>*/}
        {/*            <span className="text-sm text-white/60">От 2 недель</span>*/}
        {/*          </div>*/}

        {/*          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">*/}
        {/*            <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-4">*/}
        {/*              <span className="text-2xl">📈</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-lg font-semibold text-white mb-2">Рост продаж</span>*/}
        {/*            <span className="text-sm text-white/60">+30% в среднем</span>*/}
        {/*          </div>*/}
        {/*        </div>*/}

        {/*        /!* Кнопки действий *!/*/}
        {/*        <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-12 xl:mt-16">*/}
        {/*          <ButtonLink*/}
        {/*            href={`/${FEEDBACK_ANCHOR}`}*/}
        {/*            className="w-full sm:w-auto px-8 py-4 lg:px-12 lg:py-5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl lg:rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-lg shadow-blue-500/25 text-lg lg:text-xl"*/}
        {/*          >*/}
        {/*            <span className="flex items-center justify-center gap-3">*/}
        {/*              Бесплатная консультация*/}
        {/*              <svg*/}
        {/*                className="w-5 h-5 lg:w-6 lg:h-6"*/}
        {/*                fill="none"*/}
        {/*                stroke="currentColor"*/}
        {/*                viewBox="0 0 24 24"*/}
        {/*              >*/}
        {/*                <path*/}
        {/*                  strokeLinecap="round"*/}
        {/*                  strokeLinejoin="round"*/}
        {/*                  strokeWidth="2"*/}
        {/*                  d="M17 8l4 4m0 0l-4 4m4-4H3"*/}
        {/*                ></path>*/}
        {/*              </svg>*/}
        {/*            </span>*/}
        {/*          </ButtonLink>*/}

        {/*          <ButtonLink*/}
        {/*            href="#cases"*/}
        {/*            variant="outline"*/}
        {/*            className="w-full sm:w-auto px-8 py-4 lg:px-12 lg:py-5 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-xl lg:rounded-2xl backdrop-blur-sm transition-all duration-300 text-lg lg:text-xl"*/}
        {/*          >*/}
        {/*            <span className="flex items-center justify-center gap-3">*/}
        {/*              Смотреть кейсы*/}
        {/*              <svg*/}
        {/*                className="w-5 h-5 lg:w-6 lg:h-6"*/}
        {/*                fill="none"*/}
        {/*                stroke="currentColor"*/}
        {/*                viewBox="0 0 24 24"*/}
        {/*              >*/}
        {/*                <path*/}
        {/*                  strokeLinecap="round"*/}
        {/*                  strokeLinejoin="round"*/}
        {/*                  strokeWidth="2"*/}
        {/*                  d="M9 5l7 7-7 7"*/}
        {/*                ></path>*/}
        {/*              </svg>*/}
        {/*            </span>*/}
        {/*          </ButtonLink>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    /!* Картинка - справа на десктопе, под текстом на мобильных *!/*/}
        {/*    <div className="flex-1 flex items-center justify-center lg:justify-end mt-12 lg:mt-0 lg:pl-12 xl:pl-20">*/}
        {/*      <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-2xl">*/}
        {/*        /!* Декоративные элементы *!/*/}
        {/*        <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl"></div>*/}
        {/*        <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"></div>*/}

        {/*        /!* Основная картинка с эффектами *!/*/}
        {/*        <div className="relative rounded-3xl lg:rounded-4xl overflow-hidden border border-white/10 shadow-2xl lg:shadow-3xl">*/}
        {/*          <Image*/}
        {/*            src={BusinessIcon}*/}
        {/*            alt="AI коммуникации для бизнеса"*/}
        {/*            className="w-full h-auto opacity-90 lg:opacity-100"*/}
        {/*            priority*/}
        {/*          />*/}

        {/*          /!* Наложение градиента *!/*/}
        {/*          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/30 via-transparent to-transparent"></div>*/}

        {/*          /!* Плавающие элементы поверх картинки (только на десктопе) *!/*/}
        {/*          <div className="hidden lg:block absolute top-6 right-6 w-14 h-14 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center border border-blue-400/30 animate-float">*/}
        {/*            <span className="text-2xl">🤖</span>*/}
        {/*          </div>*/}
        {/*          <div*/}
        {/*            className="hidden lg:block absolute bottom-6 left-6 w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center border border-purple-400/30 animate-float"*/}
        {/*            style={{ animationDelay: '1s' }}*/}
        {/*          >*/}
        {/*            <span className="text-xl">💬</span>*/}
        {/*          </div>*/}
        {/*        </div>*/}

        {/*        /!* Дополнительные декоративные элементы *!/*/}
        {/*        <div className="hidden lg:block absolute -z-10 top-1/2 -translate-y-1/2 -right-10 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl"></div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</Container>*/}

        {/*<Container className="relative">*/}
        {/*  <div className="flex flex-col lg:flex-row items-center lg:items-stretch min-h-screen lg:min-h-[700px] py-12 lg:py-20">*/}
        {/*    /!* Контент - слева на десктопе, сверху на мобильных *!/*/}
        {/*    <div className="flex-1 flex flex-col justify-center z-10 text-center lg:text-left max-w-6xl mx-auto lg:mx-0">*/}
        {/*      <div className="space-y-6 lg:space-y-8">*/}
        {/*        /!* Бейдж с тегом *!/*/}
        {/*        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10">*/}
        {/*          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>*/}
        {/*          <span className="text-sm font-medium text-white/80">*/}
        {/*            AI-коммуникации будущего*/}
        {/*          </span>*/}
        {/*        </div>*/}

        {/*        /!* Заголовок *!/*/}
        {/*        <div className="space-y-4 lg:space-y-6">*/}
        {/*          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">*/}
        {/*            Интеллектуальные*/}
        {/*            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-2 lg:mt-4">*/}
        {/*              коммуникации*/}
        {/*            </span>*/}
        {/*            для вашего бизнеса*/}
        {/*          </h1>*/}

        {/*          /!* Подзаголовок *!/*/}
        {/*          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white/80 leading-relaxed font-light max-w-3xl lg:max-w-2xl xl:max-w-3xl mx-auto lg:mx-0">*/}
        {/*            AI-решения для автоматизации общения с клиентами 24/7*/}
        {/*          </p>*/}
        {/*        </div>*/}

        {/*        /!* Основной текст *!/*/}
        {/*        <p className="text-lg sm:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl lg:max-w-2xl mx-auto lg:mx-0">*/}
        {/*          Проектируем, разрабатываем и внедряем AI голосовых роботов, чат-ботов и другие*/}
        {/*          сервисы коммуникаций, которые круглосуточно и эффективно работают на вашем сайте,*/}
        {/*          в мессенджерах и по телефону*/}
        {/*        </p>*/}

        {/*        /!* Преимущества - разные версии для разных устройств *!/*/}
        {/*        /!* Мобильная версия преимуществ (2x2) *!/*/}
        {/*        <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">*/}
        {/*          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">*/}
        {/*            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">*/}
        {/*              <span className="text-lg">🤖</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-sm font-medium text-white">AI-боты</span>*/}
        {/*          </div>*/}

        {/*          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">*/}
        {/*            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">*/}
        {/*              <span className="text-lg">🎯</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-sm font-medium text-white">24/7 работа</span>*/}
        {/*          </div>*/}

        {/*          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">*/}
        {/*            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">*/}
        {/*              <span className="text-lg">⚡</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-sm font-medium text-white">Быстрый запуск</span>*/}
        {/*          </div>*/}

        {/*          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">*/}
        {/*            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">*/}
        {/*              <span className="text-lg">📈</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-sm font-medium text-white">Рост продаж</span>*/}
        {/*          </div>*/}
        {/*        </div>*/}

        {/*        /!* Десктопная версия преимуществ (горизонтальная) *!/*/}
        {/*        <div className="hidden lg:grid lg:grid-cols-4 gap-4 mt-8 xl:mt-12">*/}
        {/*          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">*/}
        {/*            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">*/}
        {/*              <span className="text-2xl">🤖</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-lg font-semibold text-white mb-2">AI-боты</span>*/}
        {/*            <span className="text-sm text-white/60">Умные ассистенты</span>*/}
        {/*          </div>*/}

        {/*          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">*/}
        {/*            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-4">*/}
        {/*              <span className="text-2xl">🎯</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-lg font-semibold text-white mb-2">24/7 работа</span>*/}
        {/*            <span className="text-sm text-white/60">Круглосуточно</span>*/}
        {/*          </div>*/}

        {/*          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">*/}
        {/*            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4">*/}
        {/*              <span className="text-2xl">⚡</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-lg font-semibold text-white mb-2">Быстрый запуск</span>*/}
        {/*            <span className="text-sm text-white/60">От 2 недель</span>*/}
        {/*          </div>*/}

        {/*          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">*/}
        {/*            <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-4">*/}
        {/*              <span className="text-2xl">📈</span>*/}
        {/*            </div>*/}
        {/*            <span className="text-lg font-semibold text-white mb-2">Рост продаж</span>*/}
        {/*            <span className="text-sm text-white/60">+30% в среднем</span>*/}
        {/*          </div>*/}
        {/*        </div>*/}

        {/*        /!* Кнопки действий *!/*/}
        {/*        <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-12 xl:mt-16">*/}
        {/*          <ButtonLink*/}
        {/*            href={`/${FEEDBACK_ANCHOR}`}*/}
        {/*            className="w-full sm:w-auto px-8 py-4 lg:px-12 lg:py-5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl lg:rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-lg shadow-blue-500/25 text-lg lg:text-xl"*/}
        {/*          >*/}
        {/*            <span className="flex items-center justify-center gap-3">*/}
        {/*              Бесплатная консультация*/}
        {/*              <svg*/}
        {/*                className="w-5 h-5 lg:w-6 lg:h-6"*/}
        {/*                fill="none"*/}
        {/*                stroke="currentColor"*/}
        {/*                viewBox="0 0 24 24"*/}
        {/*              >*/}
        {/*                <path*/}
        {/*                  strokeLinecap="round"*/}
        {/*                  strokeLinejoin="round"*/}
        {/*                  strokeWidth="2"*/}
        {/*                  d="M17 8l4 4m0 0l-4 4m4-4H3"*/}
        {/*                ></path>*/}
        {/*              </svg>*/}
        {/*            </span>*/}
        {/*          </ButtonLink>*/}

        {/*          <ButtonLink*/}
        {/*            href="#cases"*/}
        {/*            variant="outline"*/}
        {/*            className="w-full sm:w-auto px-8 py-4 lg:px-12 lg:py-5 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-xl lg:rounded-2xl backdrop-blur-sm transition-all duration-300 text-lg lg:text-xl"*/}
        {/*          >*/}
        {/*            <span className="flex items-center justify-center gap-3">*/}
        {/*              Смотреть кейсы*/}
        {/*              <svg*/}
        {/*                className="w-5 h-5 lg:w-6 lg:h-6"*/}
        {/*                fill="none"*/}
        {/*                stroke="currentColor"*/}
        {/*                viewBox="0 0 24 24"*/}
        {/*              >*/}
        {/*                <path*/}
        {/*                  strokeLinecap="round"*/}
        {/*                  strokeLinejoin="round"*/}
        {/*                  strokeWidth="2"*/}
        {/*                  d="M9 5l7 7-7 7"*/}
        {/*                ></path>*/}
        {/*              </svg>*/}
        {/*            </span>*/}
        {/*          </ButtonLink>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    /!* КАРТИНКА - исправленная версия с увеличенным размером для десктопа *!/*/}
        {/*    <div className="lg:order-2 w-full lg:w-auto flex justify-center sm:absolute md:static lg:relative mt-12 lg:mt-0">*/}
        {/*      <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-none">*/}
        {/*        /!* Декоративные эффекты (опционально) *!/*/}
        {/*        <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-blue-500/10 blur-xl lg:blur-2xl"></div>*/}
        {/*        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-purple-500/10 blur-xl lg:blur-2xl"></div>*/}

        {/*        /!* Картинка с увеличенным размером для десктопа *!/*/}
        {/*        <Image*/}
        {/*          src={BusinessIcon}*/}
        {/*          alt="AI коммуникации для бизнеса"*/}
        {/*          className="lg:absolute opacity-65 lg:opacity-35 lg:top-1/2 lg:-translate-y-1/2 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] w-full h-auto"*/}
        {/*          priority*/}
        {/*        />*/}

        {/*        /!* Добавляем градиентное наложение для лучшей читаемости *!/*/}
        {/*        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden"></div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</Container>*/}

        <Container className="relative overflow-hidden">
          {/* Фоновые декоративные элементы */}
          {/*<div className="absolute inset-0 z-0">*/}
          {/*  <div className="absolute top-20 -left-20 w-60 h-60 rounded-full bg-blue-500/10 blur-2xl"></div>*/}
          {/*  <div className="absolute bottom-20 -right-20 w-72 h-72 rounded-full bg-purple-500/10 blur-2xl"></div>*/}
          {/*</div>*/}

          <div className="relative z-10 flex items-center justify-center py-12 lg:py-16">
            <div className="max-w-4xl lg:max-w-5xl text-center mx-auto px-4 sm:px-6">
              <div className="space-y-6 lg:space-y-8">
                {/* Бейдж */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-white/10 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm font-medium text-white/90">
                    AI-коммуникации нового поколения
                  </span>
                </div>

                {/* Заголовок */}
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Интеллектуальные
                    <span className="block mt-1 lg:mt-2">
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        коммуникации
                      </span>
                      <span className="text-white"> для бизнеса</span>
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl lg:text-2xl text-white/80 font-light max-w-3xl mx-auto">
                    AI-решения для автоматизации общения с клиентами
                  </p>
                </div>

                {/* Основной текст */}
                <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto">
                  Проектируем, разрабатываем и внедряем AI голосовых роботов, чат-ботов и другие
                  сервисы коммуникаций, которые круглосуточно работают на вашем сайте, в
                  мессенджерах и по телефону
                </p>

                {/* Блок преимуществ - компактный */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 mt-8 lg:mt-10">
                  {[
                    { icon: '🤖', title: 'AI-боты', desc: 'Умные ассистенты' },
                    { icon: '⚡', title: 'Быстрый запуск', desc: 'От 2-х недель' },
                    { icon: '🎯', title: '24/7', desc: 'Круглосуточно' },
                    { icon: '📈', title: 'Рост продаж', desc: 'До +40%' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-3 mx-auto">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <h3 className="text-sm lg:text-base font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs lg:text-sm text-white/60">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* CTA блок */}
                <div className="mt-10 lg:mt-12 space-y-6">
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
                    <ButtonLink
                      href={`/${FEEDBACK_ANCHOR}`}
                      className="px-6 py-3.5 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-xl text-base lg:text-lg shadow-lg shadow-blue-500/20"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Бесплатная консультация
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          ></path>
                        </svg>
                      </span>
                    </ButtonLink>

                    <ButtonLink
                      href="#cases"
                      variant="outline"
                      className="px-6 py-3.5 lg:px-8 lg:py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-200 text-base lg:text-lg"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Примеры работ
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </span>
                    </ButtonLink>
                  </div>

                  {/* Мини статистика */}
                  {/*<div className="flex justify-center gap-6 lg:gap-8 pt-6 border-t border-white/10">*/}
                  {/*  <div className="text-center">*/}
                  {/*    <div className="text-lg lg:text-xl font-bold text-white">100+</div>*/}
                  {/*    <div className="text-xs lg:text-sm text-white/60">Проектов</div>*/}
                  {/*  </div>*/}
                  {/*  <div className="text-center">*/}
                  {/*    <div className="text-lg lg:text-xl font-bold text-white">24/7</div>*/}
                  {/*    <div className="text-xs lg:text-sm text-white/60">Поддержка</div>*/}
                  {/*  </div>*/}
                  {/*  <div className="text-center">*/}
                  {/*    <div className="text-lg lg:text-xl font-bold text-white">30%</div>*/}
                  {/*    <div className="text-xs lg:text-sm text-white/60">Рост</div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/*<section id={PRODUCTS_ANCHOR} className="py-20 bg-gray-50 scroll-mt-20">*/}
      {/*  <Container>*/}
      {/*    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Продукты</h2>*/}

      {/*    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">*/}
      {/*      {products.map((product, index) => (*/}
      {/*        <ProductCard*/}
      {/*          key={index}*/}
      {/*          title={product.title}*/}
      {/*          description={product.description}*/}
      {/*          icon={product.icon}*/}
      {/*        />*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </Container>*/}
      {/*</section>*/}

      <section
        id={PRODUCTS_ANCHOR}
        className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-20 relative overflow-hidden"
      >
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>

        <Container>
          {/* Заголовок с акцентом */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">Наши решения</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              AI-продукты для{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                вашего бизнеса
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Комплексные решения для автоматизации коммуникаций с клиентами
            </p>
          </div>

          {/* Сетка продуктов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                icon={product.icon}
                url={product.url}
              />
            ))}
          </div>

          {/* CTA под продуктами */}
          <div className="mt-16 lg:mt-20 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Нужно индивидуальное решение для вашего бизнеса?
            </p>
            <ButtonLink
              href={`/${FEEDBACK_ANCHOR}`}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-blue-500/20"
            >
              <span className="flex items-center justify-center gap-2">
                Обсудить проект
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </span>
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/*<section id={TASKS_ANCHOR} className="py-20 bg-white scroll-mt-20">*/}
      {/*  <Container className="flex flex-col gap-8">*/}
      {/*    <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Популярные задачи</h2>*/}
      {/*    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">*/}
      {/*      {tasks.map((task, index) => (*/}
      {/*        <TaskCard*/}
      {/*          key={index}*/}
      {/*          title={task.title}*/}
      {/*          description={task.description}*/}
      {/*          // className={clsx({ 'row-span-2': index === 0 })}*/}
      {/*          button*/}
      {/*          type={task.type as 'watch' | 'listen'}*/}
      {/*          sector={task.sector}*/}
      {/*          // video={index === 0}*/}
      {/*        />*/}
      {/*      ))}*/}
      {/*    </div>*/}

      {/*    <div className="bg-gray-50 flex gap-10 p-4 rounded-xl justify-between items-center">*/}
      {/*      <p>*/}
      {/*        Остались вопросы? Проконсультируем по внедрению интеллектуальных систем и поможем*/}
      {/*        выбрать лучшее решение для ваших задач*/}
      {/*      </p>*/}

      {/*      <Button>Связаться</Button>*/}
      {/*    </div>*/}
      {/*  </Container>*/}
      {/*</section>*/}

      <Tasks />

      {/* variant 1 */}
      {/*<section className="py-20 scroll-mt-20">*/}
      {/*  <Container className="flex flex-col gap-8">*/}
      {/*    <div>*/}
      {/*      <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">*/}
      {/*        Остались вопросы? Напишите нам*/}
      {/*      </h2>*/}
      {/*      <div>*/}
      {/*        <p className="text-gray-500 text-center text-xl">*/}
      {/*          Dialogica – бизнес-партнер и суббренд TWIN*/}
      {/*        </p>*/}
      {/*        <p className="text-gray-500 text-center text-xl">*/}
      {/*          Проконсультируем и поможем выбрать лучшие решения для ваших задач*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    /!* variant 1 *!/*/}
      {/*    <div className="grid grid-cols-2  bg-[#005CBF] rounded-xl /!*border border-gray-200*!/">*/}
      {/*      <div className="bg-white m-6 r-0 p-6 rounded-xl ">*/}
      {/*        <ContactForm />*/}
      {/*      </div>*/}
      {/*      <Image*/}
      {/*        src={CertificateIcon}*/}
      {/*        alt="Сертификат бизнес-партнера Twin"*/}
      {/*        className="rounded-r-lg size-full"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </Container>*/}
      {/*</section>*/}

      <section className="py-16 lg:py-20 scroll-mt-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"></div>

        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Заголовок */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700">Консультация</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Остались вопросы?{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Напишите нам
                </span>
              </h2>

              <div className="space-y-3 max-w-2xl mx-auto">
                <p className="text-lg lg:text-xl text-gray-600">
                  Dialogica – официальный бизнес-партнер TWIN
                </p>
                <p className="text-lg lg:text-xl text-gray-600">
                  Проконсультируем и поможем выбрать лучшие решения для ваших задач
                </p>
              </div>
            </div>

            {/* Контактный блок */}
            <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-purple-700">
              {/* Левая часть - форма */}
              <div className="p-8 lg:p-12 bg-white">
                <div className="space-y-2 mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Получите консультацию
                  </h3>
                  <p className="text-gray-600">Заполните форму и наш специалист свяжется с вами</p>
                </div>

                <div className="bg-white rounded-2xl">
                  <ContactForm />
                </div>

                {/* Дополнительная информация под формой */}
                {/*<div className="mt-8 pt-8 border-t border-gray-100">*/}
                {/*  <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">*/}
                {/*    /!*<div className="flex items-center gap-2">*!/*/}
                {/*    /!*  <svg*!/*/}
                {/*    /!*    className="w-4 h-4 text-blue-500"*!/*/}
                {/*    /!*    fill="none"*!/*/}
                {/*    /!*    stroke="currentColor"*!/*/}
                {/*    /!*    viewBox="0 0 24 24"*!/*/}
                {/*    /!*  >*!/*/}
                {/*    /!*    <path*!/*/}
                {/*    /!*      strokeLinecap="round"*!/*/}
                {/*    /!*      strokeLinejoin="round"*!/*/}
                {/*    /!*      strokeWidth="2"*!/*/}
                {/*    /!*      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"*!/*/}
                {/*    /!*    ></path>*!/*/}
                {/*    /!*  </svg>*!/*/}
                {/*    /!*  <span>Ответим в течение часа</span>*!/*/}
                {/*    /!*</div>*!/*/}
                {/*    <div className="flex items-center gap-2">*/}
                {/*      <svg*/}
                {/*        className="w-4 h-4 text-green-500"*/}
                {/*        fill="none"*/}
                {/*        stroke="currentColor"*/}
                {/*        viewBox="0 0 24 24"*/}
                {/*      >*/}
                {/*        <path*/}
                {/*          strokeLinecap="round"*/}
                {/*          strokeLinejoin="round"*/}
                {/*          strokeWidth="2"*/}
                {/*          d="M5 13l4 4L19 7"*/}
                {/*        ></path>*/}
                {/*      </svg>*/}
                {/*      <span>Консультация бесплатно</span>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>

              {/* Правая часть - только сертификат */}
              <div className="relative p-6 lg:p-8 flex flex-col items-center justify-center">
                {/* Градиентный фон */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/95 via-blue-700/90 to-purple-800/95"></div>

                {/* Контент */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                  {/* Заголовок над сертификатом */}
                  <div className="text-center mb-6 lg:mb-8">
                    <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">
                      Официальный партнер TWIN
                    </h4>
                    <p className="text-white/80 text-sm lg:text-base">
                      Сертифицированный бизнес-партнер с правом продажи и внедрения
                    </p>
                  </div>

                  {/* Сертификат в стилизованной рамке */}
                  <div className="relative w-full max-w-lg mx-auto">
                    {/* Декоративная рамка */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-2xl blur-xl opacity-50"></div>

                    {/* Основная рамка */}
                    <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                      {/* Эффект перспективы */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20"></div>

                      {/* Изображение сертификата */}
                      <div className="relative bg-white p-1">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                          <Image
                            src={CertificateIcon}
                            alt="Сертификат бизнес-партнера TWIN"
                            className="object-cover w-full h-full"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>

                      {/* Эффект отражения */}
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-600/40 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Печать/подпись */}
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center border-4 border-white shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  {/* Подпись под сертификатом */}
                  <div className="mt-8 text-center">
                    <div className="text-white/90 mb-2">
                      <div className="font-semibold">Лицензия № F16279/0925</div>
                      <div className="text-sm text-white/70">Действителен с 06.11.2025</div>
                    </div>
                    <p className="text-sm text-white/60 max-w-md">
                      ИП Коннов Юрий Сергеевич является официальным бизнес-партнёром TWIN с правом
                      продажи, внедрения и интеграции продуктов
                    </p>
                  </div>

                  {/* Логотип TWIN в углу */}
                  <div className="absolute bottom-6 right-6 opacity-30">
                    <div className="text-white/50 font-bold text-sm tracking-wider">TWIN</div>
                    <div className="text-white/30 text-xs">OFFICIAL PARTNER</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

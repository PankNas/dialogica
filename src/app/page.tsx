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
import { TasksSection } from '@/app/tasksSection';
import { FeedbackSection } from '@/app/feedbackSection';

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

const Line = () => (
  <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
);

export default function Home() {
  return (
    <main className="flex-1">
      <section className="bg-foreground">
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

      <Line />

      <section
        id={PRODUCTS_ANCHOR}
        className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-20 relative overflow-hidden"
      >
        {/* Декоративные элементы */}
        {/*<div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>*/}
        {/*<div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>*/}
        {/*<div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>*/}

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

      <TasksSection />

      <FeedbackSection />

      <Line />
    </main>
  );
}

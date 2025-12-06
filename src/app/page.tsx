'use client';

// import { Header } from '@/widgets/header';
// import { Footer } from '@/widgets/footer/Footer';
import { ProductCard } from '@/entities/product/ProductCard';
import { TaskCard } from '@/entities/task/TaskCard';
import { CONTACTS_ANCHOR, PRODUCTS_ANCHOR, TASKS_ANCHOR, WELCOME_ANCHOR } from '@/shared/config';
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
  const [open, setOpen] = useState(false);

  return (
    <main className="flex-1">
      <section id={WELCOME_ANCHOR} className="bg-foreground">
        <Container className="flex gap-20 justify-center align-bottom relative h-[600px] ">
          <Image src={BusinessIcon} alt="" className="absolute opacity-35 top-0" />

          <div className="flex flex-col gap-5 z-10 text-center max-w-[1024px] pt-[130px] {/*pt-[80px]*/}">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Интеллектуальные коммуникации для вашего бизнеса
            </h1>
            <p className="text-[22px] md:text-xl text-white/90 leading-relaxed mt-[40px]">
              Проектируем, разрабатываем и внедряем AI голосовых роботов, чат-ботов и другие сервисы
              коммуникаций, которые круглосуточно и эффективно работают на вашем сайте, в
              мессенджерах и по телефону
            </p>
          </div>
        </Container>
      </section>

      <section id={PRODUCTS_ANCHOR} className="py-20 bg-gray-50 scroll-mt-20">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Продукты</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                icon={product.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      <section id={TASKS_ANCHOR} className="py-20 bg-white scroll-mt-20">
        <Container className="flex flex-col gap-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Популярные задачи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task, index) => (
              <TaskCard
                key={index}
                title={task.title}
                description={task.description}
                // className={clsx({ 'row-span-2': index === 0 })}
                button
                type={task.type as 'watch' | 'listen'}
                sector={task.sector}
                // video={index === 0}
              />
            ))}
          </div>

          <div className="bg-gray-50 flex gap-10 p-4 rounded-xl justify-between items-center">
            <p>
              Остались вопросы? Проконсультируем по внедрению интеллектуальных систем и поможем
              выбрать лучшее решение для ваших задач
            </p>

            <Button>Связаться</Button>
          </div>
        </Container>
      </section>

      <section className="py-20 scroll-mt-20">
        <Container className="flex flex-col gap-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Остались вопросы? Напишите нам
            </h2>
            <p className="text-gray-500 text-center">Dialogica – бизнес-партнер и суббренд TWIN</p>
          </div>

          <div className="grid grid-cols-2  bg-[#005CBF] rounded-xl {/*border border-gray-200*/}">
            <div className="bg-white m-6 r-0 p-6 rounded-xl ">
              <ContactForm onClose={() => {}} />
            </div>
            <Image
              src={CertificateIcon}
              alt="Сертификат бизнес-партнера Twin"
              className="rounded-r-lg size-full"
            />
          </div>
          {/*<div className="relative grid grid-cols-2 gap-8 bg-white rounded-xl border border-gray-200">*/}
          {/*  <div className="absolute w-full h-full">*/}
          {/*    <Image*/}
          {/*      src={CertificateIcon}*/}
          {/*      alt="Сертификат бизнес-партнера Twin"*/}
          {/*      className="rounded-lg  h-full w-1/2"*/}
          {/*    />*/}
          {/*  </div>*/}

          {/*  <div className="p-6 pl-0 col-start-2 z-10">*/}
          {/*    <ContactForm onClose={() => {}} />*/}
          {/*  </div>*/}
          {/*</div>*/}
        </Container>
      </section>
    </main>
  );
}

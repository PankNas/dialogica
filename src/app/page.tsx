import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer/Footer';
import { ProductCard } from '@/entities/product/ProductCard';
import { TaskCard } from '@/entities/task/TaskCard';
import { CONTACTS_ANCHOR, PRODUCTS_ANCHOR, TASKS_ANCHOR } from '@/shared/config';
import RobotIcon from '@/shared/images/robot.png';
// import Robot2Icon from '@/shared/images/robot3.svg';
import Image from 'next/image';
import { Button, Container } from '@/shared/ui';
import ArrowLeftIcon from '@/shared/images/arrow-left.svg';

import PeopleIcon from '@/shared/images/robot2.svg';
import BusinessIcon from '@/shared/images/test.svg';

import MicroIcon from '@/shared/images/micro.svg';
import PaperPlaneIcon from '@/shared/images/paper-plane.svg';
import ChattingIcon from '@/shared/images/chatting.svg';
import MessageIcon from '@/shared/images/message.svg';

import './index.css';

const products = [
  {
    title: 'Голосовой бот',
    description:
      'Автоматизация звонков и обработки входящих вызовов с помощью искусственного интеллекта',
    icon: <Image src={MicroIcon} alt="Micro" />,
  },
  {
    title: 'Чат-бот',
    description: 'Умный помощник для общения с клиентами в мессенджерах и на сайте',
    icon: <Image src={ChattingIcon} alt="Chatting" />,
  },
  {
    title: 'Чат платформа',
    description: 'Омниканальная платформа для управления всеми каналами коммуникации',
    icon: '🌐',
  },
  {
    title: 'Рассылка сообщений',
    description: 'Автоматизация уведомлений и массовых рассылок клиентам',
    icon: <Image src={PaperPlaneIcon} alt="Paper plane" />,
  },
  {
    title: 'Виджет на сайт',
    description: 'Встроенный виджет для сайта с возможностью общения с клиентами',
    icon: <Image src={MessageIcon} alt="Message" />,
  },
  {
    title: 'ИИ-виджет',
    description: 'Продвинутый виджет с искусственным интеллектом для интеллектуального общения',
    icon: '🤖',
  },
];

const tasks = [
  {
    title: 'NPS - опрос о качестве обслуживания',
    description: 'Автоматический сбор обратной связи от клиентов о качестве обслуживания',
  },
  {
    title: 'Бот AI-консультант по базе знаний',
    description:
      'Интеллектуальный помощник, который отвечает на вопросы клиентов на основе вашей базы знаний',
  },
  {
    title: 'Привлечение клиентов по холодной базе',
    description: 'Автоматизация обзвона и привлечения потенциальных клиентов из холодной базы',
  },
  {
    title: '2 Привлечение клиентов по холодной базе',
    description: 'Автоматизация обзвона и привлечения потенциальных клиентов из холодной базы',
  },
  {
    title: '3 Привлечение клиентов по холодной базе',
    description: 'Автоматизация обзвона и привлечения потенциальных клиентов из холодной базы',
  },
  {
    title: '4 Привлечение клиентов по холодной базе',
    description: 'Автоматизация обзвона и привлечения потенциальных клиентов из холодной базы',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-foreground ">
          <Container className="flex gap-20 justify-center align-bottom relative h-[600px]">
            <Image src={BusinessIcon} alt="" className="absolute opacity-35 top-0" />

            <div className="flex flex-col gap-5 z-10 text-center max-w-[1024px] pt-[130px]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Интеллектуальные коммуникации для вашего бизнеса
              </h1>
              <p className="text-[22px] md:text-xl text-white/90 leading-relaxed mt-[40px]">
                Проектируем, разрабатываем и внедряем AI голосовых роботов, чат-ботов и другие
                сервисы коммуникаций, которые круглосуточно и эффективно работают на вашем сайте, в
                мессенджерах и по телефону
              </p>
              {/*<Button className="mt-auto text-lg flex gap-2 items-center py-4 px-7">*/}
              {/*  Связаться*/}
              {/*  <Image*/}
              {/*    src={ArrowLeftIcon}*/}
              {/*    alt="arrow"*/}
              {/*    className="arrow size-[22px] rotate-180 text-red-600"*/}
              {/*  />*/}
              {/*</Button>*/}
            </div>

            {/*<Image src={PeopleIcon} alt="robot" className="" />*/}
          </Container>

          {/*<Container className="flex gap-20 justify-between align-bottom">*/}
          {/*  <div className="flex flex-col gap-5">*/}
          {/*    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">*/}
          {/*      Интеллектуальные коммуникации для вашего бизнеса*/}
          {/*    </h1>*/}
          {/*    <p className="text-lg md:text-xl text-white/70 leading-relaxed">*/}
          {/*      Проектируем, разрабатываем и внедряем AI голосовых роботов, чат-ботов и другие*/}
          {/*      сервисы коммуникаций, которые круглосуточно и эффективно работают на вашем сайте, в*/}
          {/*      мессенджерах и по телефону*/}
          {/*    </p>*/}
          {/*    <Button className="mt-auto text-lg flex gap-2 items-center py-4 px-7">*/}
          {/*      Связаться*/}
          {/*      <Image*/}
          {/*        src={ArrowLeftIcon}*/}
          {/*        alt="arrow"*/}
          {/*        className="arrow size-[22px] rotate-180 text-red-600"*/}
          {/*      />*/}
          {/*    </Button>*/}
          {/*  </div>*/}

          {/*  <Image src={RobotIcon} alt="robot" className="right-0 bottom-0 w-[500px]" />*/}
          {/*</Container>*/}
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
          <Container>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Популярные задачи
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
              {tasks.map((task, index) => (
                <TaskCard key={index} title={task.title} description={task.description} />
              ))}
            </div>
          </Container>
        </section>

        <section id={CONTACTS_ANCHOR} className="py-20 bg-gray-50 scroll-mt-20">
          <Container>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Контакты</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-gray-600 mb-6">
                Свяжитесь с нами для обсуждения вашего проекта
              </p>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> info@dialogica.ru
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Телефон:</span> +7 (495) 123-45-67
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

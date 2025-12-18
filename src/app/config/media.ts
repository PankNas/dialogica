import { TaskCardProps } from '@/widgets/card';

type Media = {
  url: string;
  title: string;
  description: string;
};

type TaskCard = {
  title: string;
  description: string;
  sector: string;
  audios?: TaskCardProps['audios'];
  videos?: TaskCardProps['videos'];
};

export const mainVideo: { sources: string[]; title: string; description?: string } = {
  sources: ['/tasks/chatPlatform/Омниканальная_чат-платформа.mp4'],
  title: 'Демонстрация работы чат-платформы в реальном времени',
  description: 'Посмотрите, как устроена чат-платформа для операторов',
};

export const mainAudio: Media[] = [
  {
    url: '/tasks/attractingClients/Привлечение_клиентов_массаж_и_оздоровление.mp3',
    title: 'Привлечение клиентов на массаж и оздоровление',
    description: '',
  },
  {
    url: '/tasks/callingByRecommendations/Обзвон_по_рекомендациям_автосервис1.mp3',
    title: 'Обзвон по рекомендациям из автосервиса',
    description: '',
  },
  {
    url: '/tasks/signUpForService/Запись_стоматология.mp3',
    title: 'Запись в стоматологию',
    description: '',
  },
  {
    url: '/tasks/invitationToMaintenance/Приглашение_мероприятие.mp3',
    title: 'Приглашение на мероприятие',
    description: '',
  },
];

export const taskCards: TaskCard[] = [
  {
    title: 'NPS - опрос о качестве обслуживания',
    description:
      'Звонки в удобное для клиентов время. Исключается человеческий фактор. Стоимость минуты разговора робота в 3-6 раз ниже.',
    sector: 'Опросы',
    audios: [
      {
        title: 'NPS-опрос автосервис',
        sources: '/tasks/nps/NPS-опрос_автосервис.wav',
      },
      { title: 'NPS-опрос недвижимость', sources: '/tasks/nps/NPS-опрос_недвижимость.mp3' },
      { title: 'NPS-опроc салон красоты', sources: '/tasks/nps/NPS-опроc_салон_красоты.mp3' },
    ],
  },
  {
    title: 'Предсервисный опрос. Напоминание о визите',
    description:
      'Рост выручки на 4-7% за счет замещения клиентов, отказавшихся от визита.\n' +
      'Сокращение числа непринятых звонков за счет освобождения операторов от рутины обзвона.',
    sector: 'Опросы',
    audios: [
      {
        title: 'Напоминание о вебинаре',
        sources: '/tasks/preServiceSurvey/Напоминание_вебинар.mp3',
      },
      {
        title: 'Предсервисный опрос автосервис',
        sources: '/tasks/preServiceSurvey/Предсервисный_опрос_автосервис.mp3',
      },
      {
        title: 'Предсервисный опрос автосервис автоответчик',
        sources: '/tasks/preServiceSurvey/Предсервисный_опрос_автосервис_автоответчик.mp3',
      },
      {
        title: 'Предсервисный опрос стоматология',
        sources: '/tasks/preServiceSurvey/Предсервисный_опрос_стоматология.mp3',
      },
      {
        title: 'Предсервисный отказ',
        sources: '/tasks/preServiceSurvey/Предсервисный_отказ.wav',
      },
    ],
  },
  {
    title: 'Бот AI-консультант по базе знаний',
    description:
      'Мгновенные ответы вместо долгого поиска по базе знаний. \n' +
      'Сокращение ошибок вследствие легкого и простого доступа к информации.\n' +
      'Единый источник истины',
    sector: 'Опросы',
    videos: [
      {
        sources: ['/tasks/aiConsultant/ai-consultant.mp4'],
        title: 'Демонстрация работы AI-бота в реальном времени',
        description: 'Посмотрите, как AI-бот обрабатывает запросы клиентов и решает их проблемы',
      },
    ],
  },
  {
    title: 'Привлечение клиентов по холодной базе',
    description:
      'Быстрый обзвон сотен клиентов.\n' +
      'Автоматическое выявление горячих лидов по готовности к продолжению диалога.\n' +
      'Низкая стоимость лида.',
    sector: 'Продажи',
    audios: [
      {
        title: 'Привлечение клиентов в барбершоп',
        sources: '/tasks/attractingClients/Привлечение_клиентов_барбершоп.mp3',
      },
      {
        title: 'Привлечение клиентов возьмите нас на работу',
        sources: '/tasks/attractingClients/Привлечение_клиентов_возьмите_нас_на_работу.mp3',
      },
      {
        title: 'Привлечение клиентов массаж и оздоровление',
        sources: '/tasks/attractingClients/Привлечение_клиентов_массаж_и_оздоровление.mp3',
      },
      {
        title: 'Привлечение клиентов офисная недвижимость',
        sources: '/tasks/attractingClients/Привлечение_клиентов_офисная_недвижимость.mp3',
      },
      {
        title: 'Привлечение клиентов салон красоты',
        sources: '/tasks/attractingClients/Привлечение_клиентов_салон_красоты.wav',
      },
      {
        title: 'Привлечение клиентов финансы',
        sources: '/tasks/attractingClients/Привлечение_клиентов_финансы.mp3',
      },
      {
        title: 'Привлечение клиентов фитнес центр',
        sources: '/tasks/attractingClients/Привлечение_клиентов_фитнес_центр.mp3',
      },
      {
        title: 'Привлечение клиентов языковая школа',
        sources: '/tasks/attractingClients/Привлечение_клиентов_языковая_школа.mp3',
      },
    ],
  },
  {
    title: 'Обзвон по объявлениям о продаже с целью выкупа',
    description:
      'Сотрудники не тратят часы на «пустые» звонки, а концентрируются на работе с горячими клиентами. Сокращение затрат на обзвон в 3-6 раз.',
    sector: 'Продажи',
  },
  {
    title: 'Обзвон по рекомендациям при последнем визите',
    description:
      '10-15% дополнительного трафика с высоким средним чеком. \n' +
      'Освобождение операторов от рутинных и непродуктивных звонков.',
    sector: 'Продажи',
    audios: [
      {
        title: 'Обзвон по рекомендациям автосервис 1',
        sources: '/tasks/callingByRecommendations/Обзвон_по_рекомендациям_автосервис1.mp3',
      },
      {
        title: 'Обзвон по рекомендациям автосервис 2',
        sources: '/tasks/callingByRecommendations/Обзвон_по_рекомендациям_автосервис2.mp3',
      },
    ],
  },
  {
    title: 'Запись на обслуживание на сайте и в мессенджерах',
    description:
      'Ни одного потерянного клиента.  Прием заявок 24/7, даже в нерабочее время и выходные. Возможность записи - там, где клиент всегда онлайн, где ему удобнее.',
    sector: 'Клиентский сервис',
    audios: [
      {
        sources: '/tasks/signUpForService/Запись_стоматология.mp3',
        title: 'Запись в стоматологию',
      },
      {
        sources: '/tasks/signUpForService/Консультирование_окна.mp3',
        title: 'Консультирование на тему окон',
      },
    ],
    videos: [
      {
        title: 'Запись в автосервис (виджет)',
        sources: ['/tasks/signUpForService/Запись_автосервис_виджет.mp4'],
      },
    ],
  },
  {
    title: 'Приглашение на техническое обслуживании\n',
    description:
      'Проявление заботы о клиенте. Регулярное напоминание о ТО повышает удовлетворенность сервисом. Увеличение доли повторных визитов на сервис.',
    sector: 'Клиентский сервис',
    audios: [
      {
        sources: '/tasks/invitationToMaintenance/Напоминание_ОСАГО.mp3',
        title: 'Напоминание ОСАГО',
      },
      {
        sources: '/tasks/invitationToMaintenance/Приглашение_мероприятие.mp3',
        title: 'Приглашение мероприятие',
      },
      {
        sources: '/tasks/invitationToMaintenance/Приглашение_на_акцию_СПА-центр.mp3',
        title: 'Приглашение на акцию СПА-центр',
      },
      {
        sources: '/tasks/invitationToMaintenance/Приглашение_театр.mp3',
        title: 'Приглашение театр',
      },
    ],
  },
  {
    title: 'Омниканальная чат-платформа для операторов',
    description:
      '«Единое окно» — общение с клиентами из панели оператора, независимо от их канала (Telegram, WhatsApp, Viber, email, SMS). Развитая аналитика.',
    sector: 'Клиентский сервис',
    videos: [mainVideo],
  },
];

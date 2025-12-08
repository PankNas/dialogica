import { TaskCard } from '@/entities/task/TaskCard';
import { Container } from '@/shared/ui';
import { FEEDBACK_ANCHOR, TASKS_ANCHOR } from '@/shared/config';
import { ButtonLink } from '@/shared/ui/link';
import AudioPlayer from '@/features/audio/audioPlayer';

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

export const Tasks = () => {
  return (
    <section
      id={TASKS_ANCHOR}
      className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50/50 scroll-mt-20 relative overflow-hidden"
    >
      {/* Декоративные элементы */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>

      <Container>
        {/* Заголовок */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Решения</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Популярные{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              задачи
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Готовые решения для автоматизации коммуникаций в вашем бизнесе
          </p>
        </div>

        {/* Предпросмотр медиа-контента */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Примеры работы</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Видео-пример (самый главный) */}
            {/*<div className="lg:col-span-2">*/}
            {/*  <div className="group relative rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-gray-50 to-white">*/}
            {/*    <div className="p-6 pb-4">*/}
            {/*      <div className="flex items-center gap-2 mb-4">*/}
            {/*        <div className="w-3 h-3 rounded-full bg-red-500"></div>*/}
            {/*        <span className="text-sm font-medium text-gray-700">Видео-пример</span>*/}
            {/*      </div>*/}
            {/*      <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">*/}
            {/*        Пример работы AI-бота в реальном времени*/}
            {/*      </h4>*/}
            {/*      <p className="text-gray-600 text-sm lg:text-base">*/}
            {/*        Посмотрите, как AI-бот обрабатывает запросы клиентов и решает их проблемы*/}
            {/*      </p>*/}
            {/*    </div>*/}

            {/*    <div className="relative aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10">*/}
            {/*      /!*<div className="absolute inset-0 flex items-center justify-center">*!/*/}
            {/*      /!*  <button*!/*/}
            {/*      /!*    className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group/play"*!/*/}
            {/*      /!*    onClick={() => {*!/*/}
            {/*      /!*      *!/*/}
            {/*      /!*    }}*!/*/}
            {/*      /!*  >*!/*/}
            {/*      /!*    <svg*!/*/}
            {/*      /!*      className="w-8 h-8 text-white ml-1"*!/*/}
            {/*      /!*      fill="none"*!/*/}
            {/*      /!*      stroke="currentColor"*!/*/}
            {/*      /!*      viewBox="0 0 24 24"*!/*/}
            {/*      /!*    >*!/*/}
            {/*      /!*      <path*!/*/}
            {/*      /!*        strokeLinecap="round"*!/*/}
            {/*      /!*        strokeLinejoin="round"*!/*/}
            {/*      /!*        strokeWidth="2"*!/*/}
            {/*      /!*        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"*!/*/}
            {/*      /!*      ></path>*!/*/}
            {/*      /!*      <path*!/*/}
            {/*      /!*        strokeLinecap="round"*!/*/}
            {/*      /!*        strokeLinejoin="round"*!/*/}
            {/*      /!*        strokeWidth="2"*!/*/}
            {/*      /!*        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"*!/*/}
            {/*      /!*      ></path>*!/*/}
            {/*      /!*    </svg>*!/*/}
            {/*      /!*  </button>*!/*/}
            {/*      /!*</div>*!/*/}
            {/*      */}
            {/*      */}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="lg:col-span-2">
              <div className="group relative rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-gray-50 to-white">
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-sm font-medium text-gray-700">Видео-пример</span>
                  </div>
                  <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Пример работы AI-бота в реальном времени
                  </h4>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Посмотрите, как AI-бот обрабатывает запросы клиентов и решает их проблемы
                  </p>
                </div>

                <div className="relative aspect-video bg-black overflow-hidden rounded-b-2xl">
                  {/* Основное видео */}
                  <video
                    className="w-full h-full object-cover"
                    controls
                    // poster="/thumbnails/ai-bot-preview.jpg"
                    preload="metadata"
                    playsInline
                  >
                    <source src="/videos/ai-consultant.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                </div>
              </div>
            </div>

            {/* Аудио-примеры */}
            <div className="space-y-6">
              <AudioPlayer
                audioUrl={'/audio/attracting-clients-for-massage-and-wellness.mp3'}
                title={'test'}
                description={'test'}
              />
            </div>
          </div>
        </div>

        {/* Карточки задач */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              description={task.description}
              type={task.type as 'watch' | 'listen'}
              sector={task.sector}
              index={index}
            />
          ))}
        </div>

        {/* CTA блок */}
        <div className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-blue-500/10 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                Нужно индивидуальное решение?
              </h3>
              <p className="text-gray-600 lg:text-lg">
                Остались вопросы? Проконсультируем по внедрению интеллектуальных систем и поможем
                выбрать лучшее решение для ваших задач
              </p>
            </div>

            <ButtonLink
              href={`/${FEEDBACK_ANCHOR}`}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-blue-500/20 whitespace-nowrap"
            >
              <span className="flex items-center gap-2">
                Связаться с экспертом
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              </span>
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
};

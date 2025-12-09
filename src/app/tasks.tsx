import { TaskCard } from '@/widgets/card';
import { Container, GradientText, ButtonLink, TitleSection } from '@/shared/ui';
import { FEEDBACK_ANCHOR, TASKS_ANCHOR } from '@/shared/config';
import { mainAudio } from '@/app/config';
import { VideoPlayer } from '@/features/video';
import { AudioCard } from '@/features/audio';

const tasks = [
  {
    title: 'NPS - опрос о качестве обслуживания',
    description:
      'Звонки в удобное для клиентов время. Исключается человеческий фактор. Стоимость минуты разговора робота в 3-6 раз ниже.',
    type: 'listen',
    sector: 'Опросы',
    videos: [],
    audios: [],
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
      <Container>
        {/* Заголовок */}
        <TitleSection
          title={
            <>
              Популярные <GradientText>задачи</GradientText>
            </>
          }
          description="Готовые примеры автоматизации, проверенные на практике"
          label="Наши решения"
        />

        {/* Предпросмотр медиа-контента */}
        <div>
          <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6">
            {/* Видео-пример (самый главный) */}
            <div className="2xl:col-span-2">
              <VideoPlayer
                title="Пример работы AI-бота в реальном времени"
                description="Посмотрите, как AI-бот обрабатывает запросы клиентов и решает их проблемы"
                sources={['/videos/ai-consultant.mp4']}
              />
            </div>

            {/* Аудио-примеры */}
            <div className="grid sm:grid-cols-2 2xl:grid-cols-1 gap-[inherit]">
              {mainAudio.map((item) => {
                return (
                  <AudioCard
                    key={item.title}
                    audioUrl={item.url}
                    title={item.title}
                    description={item.description}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Карточки задач */}
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 lg:gap-8">
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              description={task.description}
              sector={task.sector}
              videos={task.videos}
              audios={task.audios}
            />
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-blue-500/10 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                Нужно индивидуальное решение?
              </h3>
              <p className="text-gray-600 lg:text-lg">
                Проконсультируем по внедрению интеллектуальных систем и поможем выбрать лучшее
                решение для ваших задач
              </p>
            </div>

            <ButtonLink href={`/#${FEEDBACK_ANCHOR}`} gradient className="px-8 py-3.5">
              Связаться с экспертом
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
};

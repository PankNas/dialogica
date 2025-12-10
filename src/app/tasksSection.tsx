import { TaskCard } from '@/widgets/card';
import { Container, GradientText, ButtonLink, TitleSection } from '@/shared/ui';
import { FEEDBACK_ANCHOR, TASKS_ANCHOR } from '@/shared/config';
import { mainAudio, mainVideo, taskCards } from '@/app/config';
import { VideoPlayer } from '@/features/video';
import { AudioCard } from '@/features/audio';

export const TasksSection = () => {
  return (
    <section
      id={TASKS_ANCHOR}
      className="py-10 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50/50 scroll-mt-20 relative overflow-hidden"
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
                title={mainVideo.title}
                description={mainVideo.description}
                sources={mainVideo.sources}
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
          {taskCards.map((task, index) => (
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

import { VideoPlayer } from '@/features/video';
import { AudioCard } from '@/features/audio';
import { ButtonLink, Modal } from '@/shared/ui';
import { FEEDBACK_ANCHOR } from '@/shared/config';
import { TaskCardProps } from '@/widgets/card';

type MediaModalProps = {
  title: string;
  description: string;
  videos?: TaskCardProps['videos'];
  audios?: TaskCardProps['audios'];
  sector?: string;
  open: boolean;
  onClose: () => void;
};

export const MediaModal = (props: MediaModalProps) => {
  const hasMedia =
    (props.videos && props.videos.length > 0) || (props.audios && props.audios.length > 0);

  return (
    <Modal
      open={props.open}
      onCloseAction={props.onClose}
      title={
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-left">{props.title}</h2>
          {props.sector && (
            <div className="flex items-center gap-2 mt-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                #{props.sector}
              </span>
            </div>
          )}
        </div>
      }
    >
      <div className="">
        <div className="mb-8">
          <p className="text-lg text-gray-600 border-l-4 border-blue-500 pl-4 py-2">
            {props.description}
          </p>
        </div>

        {!hasMedia ? (
          // Сообщение, если нет медиа
          <div className="py-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 mb-6">
              <svg
                className="w-10 h-10 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Скоро будет новый пример</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Мы готовим новые кейсы и примеры работы наших решений. А пока можете ознакомиться с
              другими нашими работами.
            </p>
            <button
              onClick={props.onClose}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              Вернуться к примерам
            </button>
          </div>
        ) : (
          // Контент с медиа
          <div className="space-y-8">
            {/* Аудио-секция */}
            {props.audios && props.audios.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <h3 className="text-lg font-semibold text-gray-900">Аудио-примеры</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {props.audios.map((audio) => (
                    <AudioCard key={audio.title} audioUrl={audio.sources} title={audio.title} />
                  ))}
                </div>
              </div>
            )}

            {/* Видео-секция */}
            {props.videos && props.videos.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <h3 className="text-lg font-semibold text-gray-900">Видео-демонстрация</h3>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {props.videos.map((video, index) => (
                    <VideoPlayer key={index} title={video.title} sources={video.sources} />
                  ))}
                </div>
              </div>
            )}

            {/* Информационный блок */}
            <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Как это работает?</h4>
                  <p className="text-gray-600 text-sm">
                    Это реальные примеры работы наших AI-решений. Видео показывает интерфейс и
                    взаимодействие, а аудио демонстрирует качество голосового общения с
                    искусственным интеллектом.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA блок */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                Заинтересовало решение? Хотите обсудить внедрение для вашего бизнеса?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={props.onClose}
                  className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  Вернуться к примерам
                </button>
                <ButtonLink
                  href={`/#${FEEDBACK_ANCHOR}`}
                  gradient
                  animation={false}
                  onClick={() => {
                    props.onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3"
                >
                  Обсудить проект
                </ButtonLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

import { FEEDBACK_ANCHOR, TASKS_ANCHOR } from '@/shared/config';
import { Container } from '@/shared/ui';
import './index.css';
import { ButtonLink } from '@/shared/ui/link';
import { TasksSection } from '@/app/tasksSection';
import { FeedbackSection } from '@/app/feedbackSection';
import { ProductsSection } from '@/app/productsSection';

const Line = () => (
  <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
);

export default function Home() {
  return (
    <main className="flex-1">
      <section className="bg-foreground relative">
        {/* Фоновые декоративные элементы */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-0 w-60 h-60 rounded-full bg-blue-500/10 blur-2xl -translate-x-1/2" />
          <div className="absolute bottom-20 right-0 w-72 h-72 rounded-full bg-purple-500/10 blur-2xl translate-x-1/2" />
        </div>

        <Container className="relative overflow-hidden">
          <div className="relative z-10 flex items-center justify-center py-12 lg:py-16">
            <div className="max-w-4xl lg:max-w-5xl text-center mx-auto px-4 sm:px-6">
              <div className="space-y-6 lg:space-y-8">
                {/* Бейдж */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-white/10 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
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
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-8 lg:mt-10">
                  {[
                    { icon: '🤖', title: 'AI-боты', desc: 'Умные ассистенты' },
                    { icon: '⚡', title: 'Быстрый запуск', desc: 'От 2-х недель' },
                    { icon: '🎯', title: '24/7', desc: 'Круглосуточно' },
                    { icon: '📈', title: 'Рост продаж', desc: 'До +40%' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
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
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-center justify-center">
                    <ButtonLink
                      href={`/#${FEEDBACK_ANCHOR}`}
                      gradient
                      className="px-6 py-3.5 lg:px-8 lg:py-4 font-semibold rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-xl text-base lg:text-lg shadow-lg shadow-blue-500/20"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Бесплатная консультация
                      </span>
                    </ButtonLink>

                    <ButtonLink
                      href={`/#${TASKS_ANCHOR}`}
                      className="px-6 py-3.5 lg:px-8 lg:py-4 font-semibold backdrop-blur-sm transition-all duration-200 text-base lg:text-lg"
                    >
                      <span className="flex items-center justify-center gap-2">Примеры работ</span>
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Line />

      <ProductsSection />

      <TasksSection />

      <FeedbackSection />

      <Line />
    </main>
  );
}

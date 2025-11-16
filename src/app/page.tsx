import { Header } from '@/widgets/header/Header';
import { Footer } from '@/widgets/footer/Footer';
import { ProductCard } from '@/entities/product/ProductCard';
import { TaskCard } from '@/entities/task/TaskCard';

const products = [
  {
    title: 'Голосовой бот',
    description:
      'Автоматизация звонков и обработки входящих вызовов с помощью искусственного интеллекта',
    icon: '📞',
  },
  {
    title: 'Чат-бот',
    description: 'Умный помощник для общения с клиентами в мессенджерах и на сайте',
    icon: '💬',
  },
  {
    title: 'Чат платформа',
    description: 'Омниканальная платформа для управления всеми каналами коммуникации',
    icon: '🌐',
  },
  {
    title: 'Рассылка сообщений',
    description: 'Автоматизация уведомлений и массовых рассылок клиентам',
    icon: '📧',
  },
  {
    title: 'Виджет на сайт',
    description: 'Встроенный виджет для сайта с возможностью общения с клиентами',
    icon: '🔗',
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
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-white py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Интеллектуальные коммуникации для вашего бизнеса
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Проектируем, разрабатываем и внедряем AI голосовых ботов, чат-ботов и другие сервисы
                коммуникаций, которые круглосуточно и эффективно работают на сайтах, в мессенджерах
                и по телефону
              </p>
            </div>
          </div>
        </section>

        <section id="products" className="py-20 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Продукты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  description={product.description}
                  icon={product.icon}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="tasks" className="py-20 bg-white scroll-mt-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Популярные задачи
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {tasks.map((task, index) => (
                <TaskCard key={index} title={task.title} description={task.description} />
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto px-6">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

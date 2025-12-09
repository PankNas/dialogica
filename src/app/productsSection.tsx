import { PRODUCTS_ANCHOR } from '@/shared/config';
import { Container, GradientText, TitleSection } from '@/shared/ui';
import MicroIcon from '@/shared/images/micro.svg';
import ChattingIcon from '@/shared/images/chatting.svg';
import ChatPlatformIcon from '@/shared/images/chat-platform.svg';
import PaperPlaneIcon from '@/shared/images/paper-plane.svg';
import MessageIcon from '@/shared/images/message.svg';
import AiWidgetIcon from '@/shared/images/ai-widget.svg';
import { ProductCard } from '@/widgets/card';

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

export const ProductsSection = () => {
  return (
    <section
      id={PRODUCTS_ANCHOR}
      className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-20 relative overflow-hidden"
    >
      <Container>
        {/* Заголовок с акцентом */}
        <TitleSection
          title={
            <>
              AI-продукты для <GradientText>вашего бизнеса</GradientText>
            </>
          }
          description="Комплексные решения для автоматизации коммуникаций с клиентами"
          label="Продукты"
        />

        {/* Сетка продуктов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto">
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
  );
};

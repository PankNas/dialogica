import { Container, GradientText, Title, TitleSection } from '@/shared/ui';
import { ContactForm } from '@/widgets/contactForm';
import Image from 'next/image';
import CertificateIcon from '@/shared/images/certificate.jpg';
import { FEEDBACK_ANCHOR } from '@/shared/config';

export const FeedbackSection = () => {
  return (
    <section
      id={FEEDBACK_ANCHOR}
      className="py-10 md:py-16 lg:py-20 scroll-mt-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden"
    >
      <Container>
        <TitleSection
          title={
            <>
              Остались вопросы? <GradientText>Напишите нам</GradientText>
            </>
          }
          label="Консультация"
        />

        {/* Контактный блок */}
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="relative p-6 lg:p-8 flex flex-col items-center justify-center">
            {/* Градиентный фон */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/95 via-blue-700/90 to-purple-800/95"></div>

            {/* Контент */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
              {/* Заголовок над сертификатом */}
              <div className="text-center mb-6 lg:mb-8">
                <Title variant="h3" className="text-xl lg:text-2xl text-white mb-2">
                  Официальный партнер TWIN
                </Title>

                <p className="text-white/80 text-sm lg:text-base">
                  Сертифицированный бизнес-партнер с правом продажи и внедрения
                </p>
              </div>

              {/* Сертификат в стилизованной рамке */}
              <div className="relative w-full max-w-lg mx-auto">
                {/* Декоративная рамка */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-2xl blur-xl opacity-50"></div>

                {/* Основная рамка */}
                <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                  {/* Эффект перспективы */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20"></div>

                  {/* Изображение сертификата */}
                  <div className="relative bg-white p-1">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={CertificateIcon}
                        alt="Сертификат бизнес-партнера TWIN"
                        className="object-cover w-full h-full"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        width={800}
                        height={600}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Эффект отражения */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-600/40 to-transparent pointer-events-none"></div>
                </div>

                {/* Печать/подпись */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center border-4 border-white shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Подпись под сертификатом */}
              <div className="mt-8 text-center">
                <div className="text-white/90 mb-2">
                  <div className="font-semibold">Лицензия № F16279/0925</div>
                  <div className="text-sm text-white/70">Действителен с 06.11.2025</div>
                </div>
                <p className="text-sm text-white/60 max-w-md">
                  ИП Коннов Юрий Сергеевич является официальным бизнес-партнёром TWIN с правом
                  продажи, внедрения и интеграции продуктов
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12 bg-white">
            <div className="space-y-2 mb-8">
              <Title variant="h3" className="text-2xl lg:text-3xl">
                Получите консультацию
              </Title>

              <p className="text-gray-600">Заполните форму и наш специалист свяжется с вами</p>
            </div>

            <div className="bg-white rounded-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

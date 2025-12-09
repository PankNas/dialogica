import TwinIcon from '@/shared/images/logo-twin.svg';
import LogoIcon from '@/shared/images/logo.svg';
import Image from 'next/image';
import { CONTACTS_ANCHOR } from '@/shared/config';
import { Container } from '@/shared/ui';

export const Footer = () => {
  return (
    <footer id={CONTACTS_ANCHOR} className="bg-foreground text-gray-300">
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <Container className="mx-auto px-4 grid grid-cols-1 py-10 md:grid-cols-3 gap-10">
        {/* Left block — logos */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Image src={LogoIcon} alt="Логотип компании" className="h-12 w-auto" />
          <a href="https://twin24.ai/" target="_blank">
            <Image src={TwinIcon} alt="Логотип партнёра" className="h-10 w-auto" />
          </a>
        </div>

        {/* Center block — contacts */}
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h3 className="text-lg font-semibold text-white">Контакты</h3>
          <a href="mailto:info@dialogica24.ru" className="hover:text-white transition-colors">
            {/*info@dialogica24.ru*/}
            {process.env.NEXT_PUBLIC_SMTP_USER}
          </a>
          <a href="tel:89951318910" className="hover:text-white transition-colors">
            +7 (995) 131-89-10
          </a>
        </div>

        <div className="flex flex-col gap-3 text-sm text-gray-500 relative items-center md:items-start">
          <p className="mt-auto">
            <span className="text-white/80">Dialogica</span> является официальным партнёром и
            суббрендом <span className="text-white/80">Twin</span>.
          </p>
          <p>ИП Коннов Ю.С. ИНН: 632122918848</p>
        </div>
      </Container>
    </footer>
  );
};

import TwinIcon from '@/shared/images/logo-twin.svg';
import LogoIcon from '@/shared/images/logo.svg';
import Image from 'next/image';
import { CONTACTS_ANCHOR } from '@/shared/config';
import { Container } from '@/shared/ui';

export const Footer = () => {
  return (
    <footer id={CONTACTS_ANCHOR} className="w-full bg-foreground text-gray-300 py-10">
      <Container className="mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left block — logos */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Image src={LogoIcon} alt="Логотип компании" className="h-12 w-auto" />
            <a href="https://twin24.ai/" target="_blank">
              <Image src={TwinIcon} alt="Логотип партнёра" className="h-10 w-auto opacity-80" />
            </a>
          </div>
          {/*<p className="text-sm text-gray-500 mt-auto">ИП Коннов Ю.С. ИНН: 632122918848</p>*/}
        </div>

        {/* Center block — contacts */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-white">Контакты</h3>
          <a href="mailto:info@dialogica24.ru" className="hover:text-white transition-colors">
            info@dialogica24.ru
          </a>
          <a href="tel:89951318910" className="hover:text-white transition-colors">
            +7 995 131-89-10
          </a>
        </div>

        {/* Right block — legal info */}
        <div className="flex flex-col gap-3 text-sm text-sm text-gray-500 mt-auto">
          <p>
            <span className="text-white/80">Dialogica</span> является официальным партнёром и
            суббрендом <span className="text-white/80">Twin</span>.
          </p>
          <p>ИП Коннов Ю.С. ИНН: 632122918848</p>
        </div>
      </Container>
    </footer>
  );
};

import React from 'react';
import { Title } from '@/shared/ui';

// ----------------- Утилитарные компоненты -----------------
const TextBold: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold">{children}</span>
);

const PolicyLink: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className="text-blue-500 hover:text-blue-600 font-semibold inline cursor-pointer"
    onKeyDown={(e) => e.key === 'Enter' && onClick()}
  >
    Политике конфиденциальности персональных данных
  </button>
);

// ----------------- Контент согласия -----------------
const ConsentContent: React.FC<{ onPolicyClick: () => void }> = ({ onPolicyClick }) => (
  <div className="space-y-4 text-gray-700 leading-relaxed">
    <p>
      Я, субъект персональных данных, настоящим свободно, своей волей и в своем интересе даю
      согласие индивидуальному предпринимателю <TextBold>Коннову Юрию Сергеевичу</TextBold> (
      <TextBold>ИНН: 632122918848</TextBold>,{' '}
      <TextBold>адрес: г. Тольятти, ул. Мира 99-45</TextBold>) на обработку моих персональных
      данных.
    </p>

    <div className="space-y-2">
      <TextBold>Цель обработки: </TextBold>
      <span>
        установление контакта, предоставление консультаций, подготовка коммерческих предложений, а
        также иное использование в рамках оказания услуг по разработке голосовых ботов и
        автоматизации коммуникаций.
      </span>
    </div>

    <div>
      <TextBold>Состав данных: </TextBold>
      <span>имя, контактный телефон, наименование компании.</span>
    </div>

    <div className="space-y-2">
      <TextBold>Перечень действий с данными: </TextBold>
      <span>
        сбор, запись, систематизация, накопление, хранение, уточнение, извлечение, использование,
        передача (потенциальным подрядчикам и в CRM-системы), обезличивание, блокирование, удаление,
        уничтожение.
      </span>
    </div>

    <p>
      Я подтверждаю, что ознакомлен(а) с{' '}
      <TextBold>Политикой обработки персональных данных ИП Коннова Ю.С.</TextBold> и понимаю свои
      права, в том числе право отозвать согласие.
    </p>

    <p>
      ИП Коннов Ю.С гарантирует защиту персональных данных на условиях, изложенных в{' '}
      <PolicyLink onClick={onPolicyClick} />.
    </p>

    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <TextBold>
        Согласие действует 5 лет или до момента его отзыва мной. Последствия отзыва согласия мне
        разъяснены.
      </TextBold>
    </div>
  </div>
);

// ----------------- Контент политики -----------------
const policySections: { title: string; content: React.ReactNode }[] = [
  {
    title: '1. Общие положения',
    content: (
      <p>
        Настоящая Политика определяет порядок обработки персональных данных и меры по обеспечению их
        безопасности у <TextBold>ИП Коннова Ю.С.</TextBold> в соответствии с ФЗ №152.
      </p>
    ),
  },
  {
    title: '2. Основные понятия',
    content: <p>Используемые термины применяются в значениях, определенных в ст. 3 ФЗ № 152-ФЗ.</p>,
  },
  {
    title: '3. Правовые основания и цели обработки',
    content: (
      <p>
        Обработка осуществляется на основании согласия субъекта. Цели: установление контакта,
        консультации, подготовка предложений, исполнение договоров, ведение клиентской базы.
      </p>
    ),
  },
  {
    title: '4. Состав обрабатываемых данных',
    content: (
      <p>
        Имя, телефон, email, наименование компании/роль, а также иные данные для исполнения
        договорных обязательств.
      </p>
    ),
  },
  {
    title: '5. Принципы и условия обработки',
    content: (
      <p>
        Обработка законна, добросовестна и ограничена конкретными целями. Оператор принимает меры
        для защиты данных. Срок хранения определяется согласием субъекта или законом.
      </p>
    ),
  },
  {
    title: '6. Права субъекта персональных данных',
    content: (
      <>
        <p>Субъект имеет право:</p>
        <ol className="list-disc ml-8">
          <li>на доступ к своим данным;</li>
          <li>на уточнение, блокирование или уничтожение данных;</li>
          <li>на отзыв согласия путем письменного запроса.</li>
        </ol>
      </>
    ),
  },
  {
    title: '7. Контактная информация Оператора',
    content: (
      <div className="space-y-2">
        <TextBold>ИП Коннов Юрий Сергеевич</TextBold>
        <p>
          <TextBold>ИНН:</TextBold> 632122918848
        </p>
        <p>
          <TextBold>Адрес:</TextBold> г. Тольятти, ул. Мира 99, кв. 45
        </p>
        <p>
          <TextBold>E-mail:</TextBold> Konnovyuri@gmail.com
        </p>
        <p>
          <TextBold>Дата публикации:</TextBold> 10.12.2025
        </p>
      </div>
    ),
  },
];

const DataProtectionContent: React.FC = () => (
  <div className="space-y-4 text-gray-700 leading-relaxed">
    <div className="text-center">
      <Title variant="h2" className="mb-2 text-xl!">
        Политика в отношении обработки персональных данных
      </Title>
      <p className="text-lg font-medium text-gray-800">
        Индивидуального предпринимателя Коннова Юрия Сергеевича
      </p>
    </div>

    <ul className="space-y-4">
      {policySections.map((sec, idx) => (
        <li key={idx} className="space-y-2">
          <TextBold>{sec.title}</TextBold>
          {sec.content}
        </li>
      ))}
    </ul>
  </div>
);

// ----------------- Типизация документов -----------------
interface DocumentSection {
  title: string;
  content: React.ReactNode;
}

interface Documents {
  consentToProcessing: DocumentSection;
  dataProtectionPolicy: DocumentSection;
}

// ----------------- Главная функция -----------------
export const createDocuments = (onPolicyClick: () => void): Documents => ({
  consentToProcessing: {
    title: 'Согласие на обработку персональных данных',
    content: <ConsentContent onPolicyClick={onPolicyClick} />,
  },
  dataProtectionPolicy: {
    title: '',
    content: <DataProtectionContent />,
  },
});

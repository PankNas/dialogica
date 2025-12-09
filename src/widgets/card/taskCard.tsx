import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Title } from '@/shared/ui';
import { VideoIcon } from '@/features/video';
import { AudioIcon } from '@/features/audio';

interface TaskCardProps {
  title: string;
  description: string;
  className?: string;
  videos?: string[];
  audios?: string[];
  type?: 'watch' | 'listen';
  sector?: string;
  onMediaClick?: () => void;
}

export const TaskCard = (props: TaskCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (props.onMediaClick) {
      props.onMediaClick();
    }
  };

  return (
    <div
      className={twMerge(
        clsx(
          'group relative bg-white rounded-2xl p-6 lg:p-8 flex flex-col gap-4 lg:gap-6 border border-gray-200',
          'hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2',
          'hover:bg-gradient-to-br from-white to-blue-50/30 cursor-pointer',
          props.className
        )
      )}
      onClick={handleClick}
    >
      <div className="flex justify-between gap-3 items-start">
        {props.sector && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            {props.sector}
          </span>
        )}

        <div className="flex gap-3">
          {props.videos && <VideoIcon />}
          {props.audios && <AudioIcon />}
        </div>
      </div>

      <Title variant="h3" className="text-xl lg:text-2xl">
        {props.title}
      </Title>

      <p className="text-gray-600 leading-relaxed text-sm lg:text-base flex-grow">
        {props.description}
      </p>

      {/* Кнопка */}
      <div className="flex items-center gap-2 text-blue-600 font-medium mt-2 group/link">
        <span className="group-hover/link:translate-x-1 transition-transform duration-200">
          {props.type === 'watch' ? 'Посмотреть пример' : 'Послушать пример'}
        </span>
        <svg
          className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </div>
    </div>
  );
};

// import { clsx } from 'clsx';
// import { twMerge } from 'tailwind-merge';
// import Image from 'next/image';
// import ArrowIcon from '@/icons/arrow.svg';
//
// interface TaskCardProps {
//   title: string;
//   description: string;
//   className?: string;
//   button?: boolean;
//   type?: 'watch' | 'listen';
//   sector?: string;
//   index?: number;
//   video?: boolean;
// }
//
// export const TaskCard = ({
//   title,
//   description,
//   className,
//   button,
//   type,
//   sector,
//   index = 0,
//   video,
// }: TaskCardProps) => {
//   const handleClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     // Здесь будет логика открытия модалки с медиа-контентом
//     // В зависимости от type открываем видео или аудио
//   };
//
//   return (
//     <div
//       className={twMerge(
//         clsx(
//           'group relative bg-white rounded-2xl p-6 lg:p-8 flex flex-col gap-4 lg:gap-6 border border-gray-200',
//           'hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2',
//           'hover:bg-gradient-to-br from-white to-blue-50/30 cursor-pointer',
//           className
//         )
//       )}
//       onClick={handleClick}
//     >
//       {/* Иконка типа контента */}
//       {type && (
//         <div
//           className={clsx(
//             'absolute top-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center',
//             type === 'watch'
//               ? 'bg-gradient-to-br from-red-500/10 to-red-600/20 text-red-600'
//               : 'bg-gradient-to-br from-blue-500/10 to-purple-500/20 text-blue-600'
//           )}
//         >
//           {type === 'watch' ? (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
//               ></path>
//             </svg>
//           ) : (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
//               ></path>
//             </svg>
//           )}
//         </div>
//       )}
//
//       {/* Сектор */}
//       {sector && (
//         <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium w-fit">
//           <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
//           {sector}
//         </span>
//       )}
//
//       {/* Заголовок */}
//       <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors pr-12">
//         {title}
//       </h3>
//
//       {/* Описание */}
//       <p className="text-gray-600 leading-relaxed text-sm lg:text-base flex-grow">{description}</p>
//
//       {/* Кнопка */}
//       {button && (
//         <div className="flex items-center gap-2 text-blue-600 font-medium mt-2 group/link">
//           <span className="group-hover/link:translate-x-1 transition-transform duration-200">
//             Посмотреть пример
//           </span>
//           <svg
//             className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform duration-200"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M14 5l7 7m0 0l-7 7m7-7H3"
//             ></path>
//           </svg>
//         </div>
//       )}
//
//       {/* Номер карточки (для визуального акцента) */}
//       <div className="absolute -bottom-2 -left-2 text-8xl font-bold text-gray-100/50 -z-10">
//         {index + 1}
//       </div>
//     </div>
//   );
// };

// import { twMerge } from 'tailwind-merge';
// import { clsx } from 'clsx';
// import ArrowIcon from '@/shared/images/arrow-left.svg';
// import HeadPhoneIcon from '@/shared/images/headphones1.png';
// import Image from 'next/image';
// import '../../app/index.css';
//
// interface TaskCardProps {
//   title: string;
//   description: string;
//   className?: string;
//   button?: boolean;
//   type?: 'listen' | 'watch';
//   sector?: string;
//   video?: boolean;
// }
//
// export const TaskCard = ({
//   title,
//   description,
//   className,
//   button,
//   type,
//   sector,
//   video,
// }: TaskCardProps) => {
//   return (
//     <a href="#" className={twMerge(clsx(className))} target="_blank" /*rel="noopener noreferrer"*/>
//       <div
//         className={twMerge(
//           clsx(
//             'relative bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-md transition-all duration-200 h-full flex flex-col gap-4'
//           )
//         )}
//       >
//         {/*<div className="flex justify-between gap-4">*/}
//         {/*  {sector && <span className="text-sm text-gray-600">#{sector}</span>}*/}
//         {/*  <div className=" border-cian rounded-full border-2 size-[60px] p-2 items-center flex">*/}
//         {/*    <Image src={HeadPhoneIcon} alt="arrow" className="rotate-45 size-[40px]" />*/}
//         {/*  </div>*/}
//         {/*</div>*/}
//
//         {/*<div className="absolute right-8 border-cian rounded-full border-3 size-[60px] p-2 items-center flex">*/}
//         {/*  <Image src={HeadPhoneIcon} alt="arrow" className="rotate-45 size-[40px]" />*/}
//         {/*</div>*/}
//
//         {sector && <span className="text-sm text-gray-600">#{sector}</span>}
//         <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
//         <p className="text-gray-600 leading-relaxed">{description}</p>
//
//         {button && type && (
//           <div className="w-max ml-auto text-cian flex gap-2 mt-auto">
//             Подробнее
//             <Image src={ArrowIcon} alt="arrow" className="duration-200 arrow rotate-180" />
//           </div>
//         )}
//       </div>
//     </a>
//   );
// };

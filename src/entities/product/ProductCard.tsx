import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  icon?: any;
  className?: string;
  url?: string;
}

export const ProductCard = ({ title, description, icon, className, url }: ProductCardProps) => {
  return (
    <div
      className={twMerge(
        clsx(
          'group relative bg-white rounded-2xl p-6 lg:p-8 flex flex-col gap-4 lg:gap-6 border border-gray-100',
          'shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2',
          'hover:border-blue-100 hover:bg-gradient-to-br from-white to-blue-50/30',
          'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-blue-500/5 before:to-purple-500/5 before:op-0 before:group-hover:op-100 before:transition-opacity before:duration-300',
          'after:absolute after:inset-0 after:rounded-2xl after:border-2 after:border-transparent after:group-hover:border-blue-200/30 after:transition-all after:duration-300',
          className
        )
      )}
    >
      {/* Декоративный уголок */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 transform rotate-45 -translate-y-4 translate-x-4"></div>
      </div>

      {icon && (
        <div className="relative z-10 size-14 lg:size-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
          <div className="absolute inset-0 rounded-2xl bg-white/50 backdrop-blur-sm"></div>
          <span className="relative">
            <Image
              src={icon}
              alt={title}
              width={32}
              height={32}
              className="w-8 h-8 lg:w-9 lg:h-9"
            />
          </span>
        </div>
      )}

      <h3 className="relative z-10 text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
        {title}
      </h3>

      <p className="relative z-10 text-gray-600 leading-relaxed flex-grow text-sm lg:text-base">
        {description}
      </p>

      {url && (
        <div className="relative z-10 mt-2">
          <a
            href={url}
            className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm lg:text-base group/link hover:text-blue-700 transition-colors duration-200"
          >
            Подробнее
            <svg
              className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover/link:translate-x-1 transition-transform duration-200"
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
          </a>
        </div>
      )}
    </div>
  );
};

// import clsx from 'clsx';
// import { twMerge } from 'tailwind-merge';
// import Image from 'next/image';
//
// interface ProductCardProps {
//   title: string;
//   description: string;
//   icon?: string;
//   className?: string;
//   url?: string;
// }
//
// export const ProductCard = ({ title, description, icon, className, url }: ProductCardProps) => {
//   return (
//     <div
//       className={twMerge(
//         clsx(
//           'bg-white border border-gray-200 rounded-xl p-8 flex flex-col gap-3',
//           {
//             ['hover:border-blue-300 hover:shadow-md transition-all duration-200']: url,
//           },
//           className
//         )
//       )}
//     >
//       {icon && (
//         <div className="size-18 rounded-full border border-[3px] border-cian flex items-center justify-center p-3">
//           <span className="">
//             <Image src={icon} alt="" />
//           </span>
//         </div>
//       )}
//       <h3 className="text-xl font-semibold text-gray-900 ">{title}</h3>
//       <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
//     </div>
//   );
// };

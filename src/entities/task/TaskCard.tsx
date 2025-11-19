import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import ArrowIcon from '@/shared/images/arrow-left.svg';
import HeadPhoneIcon from '@/shared/images/headphones1.png';
import Image from 'next/image';
import '../../app/index.css';

interface TaskCardProps {
  title: string;
  description: string;
  className?: string;
  button?: boolean;
  type?: 'listen' | 'watch';
  sector?: string;
  video?: boolean;
}

export const TaskCard = ({
  title,
  description,
  className,
  button,
  type,
  sector,
  video,
}: TaskCardProps) => {
  return (
    <a href="#" className={twMerge(clsx(className))} target="_blank" /*rel="noopener noreferrer"*/>
      <div
        className={twMerge(
          clsx(
            'relative bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-md transition-all duration-200 h-full flex flex-col gap-4'
          )
        )}
      >
        {/*<div className="flex justify-between gap-4">*/}
        {/*  {sector && <span className="text-sm text-gray-600">#{sector}</span>}*/}
        {/*  <div className=" border-cian rounded-full border-2 size-[60px] p-2 items-center flex">*/}
        {/*    <Image src={HeadPhoneIcon} alt="arrow" className="rotate-45 size-[40px]" />*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div className="absolute right-8 border-cian rounded-full border-3 size-[60px] p-2 items-center flex">*/}
        {/*  <Image src={HeadPhoneIcon} alt="arrow" className="rotate-45 size-[40px]" />*/}
        {/*</div>*/}

        {sector && <span className="text-sm text-gray-600">#{sector}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>

        {button && type && (
          <div className="w-max ml-auto text-cian flex gap-2 mt-auto">
            {type === 'listen' ? 'Слушать' : 'Смотреть'}
            <Image src={ArrowIcon} alt="arrow" className="duration-200 arrow rotate-180" />
          </div>
        )}
      </div>
    </a>
  );
};

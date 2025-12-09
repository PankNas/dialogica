import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { Title } from '@/shared/ui';

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div
      className={twMerge(
        clsx(
          'relative bg-white rounded-2xl p-6 lg:p-8 flex flex-col gap-4 lg:gap-6 border border-gray-100',
          'shadow-sm transition-all duration-300',
          'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-blue-500/5 before:to-purple-500/5 before:op-0 before:group-hover:op-100 before:transition-opacity before:duration-300',
          'after:absolute after:inset-0 after:rounded-2xl after:border-2 after:border-transparent after:transition-all after:duration-300',
          props.className
        )
      )}
    >
      <div className="relative z-10 size-14 lg:size-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center p-3">
        <div className="absolute inset-0 rounded-2xl bg-white/40 backdrop-blur-sm" />
        <span className="relative">
          <Image
            src={props.icon}
            alt={props.title}
            width={32}
            height={32}
            className="w-8 h-8 lg:w-9 lg:h-9"
          />
        </span>
      </div>

      <Title variant="h3">{props.title}</Title>

      <p className="relative z-10 text-gray-600 leading-relaxed flex-grow text-sm lg:text-base">
        {props.description}
      </p>
    </div>
  );
};

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ProductCardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
  url?: string;
}

export const ProductCard = ({ title, description, icon, className, url }: ProductCardProps) => {
  return (
    <div
      className={twMerge(
        clsx(
          'bg-white border border-gray-200 rounded-xl p-8 flex flex-col gap-3',
          {
            ['hover:border-blue-300 hover:shadow-md transition-all duration-200']: url,
          },
          className
        )
      )}
    >
      {icon && (
        <div className="size-18 rounded-full border border-[3px] border-cian flex items-center justify-center p-3">
          <span className="">{icon}</span>
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 ">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

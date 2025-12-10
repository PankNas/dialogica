'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Title } from '@/shared/ui';
import { VideoIcon } from '@/features/video';
import { AudioIcon } from '@/features/audio';
import Image from 'next/image';
import ArrowLeftIcon from '@/shared/images/arrow-left.svg';
import { useState } from 'react';
import { MediaModal } from '@/widgets/card';

export interface TaskCardProps {
  title: string;
  description: string;
  className?: string;
  videos?: { title: string; sources: string[]; description?: string }[];
  audios?: { title: string; sources: string; description?: string }[];
  sector?: string;
}

export const TaskCard = (props: TaskCardProps) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={twMerge(
          clsx(
            'group relative bg-white rounded-2xl p-6 lg:p-8 border border-gray-200',
            'hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2',
            'hover:bg-gradient-to-br from-white to-blue-50/30 cursor-pointer',
            'grid grid-rows-subgrid row-span-4 gap-4 lg:gap-6',
            'focus:ring-2 focus:ring-blue-500',
            props.className
          )
        )}
      >
        <div className="flex justify-between gap-3 items-start">
          {props.sector && (
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
              #{props.sector}
            </span>
          )}

          <div className="flex gap-3">
            {props.audios && <AudioIcon />}
            {props.videos && <VideoIcon />}
          </div>
        </div>

        <Title variant="h3" className="text-xl lg:text-2xl text-left">
          {props.title}
        </Title>

        <p className="text-gray-600 leading-relaxed text-left text-sm lg:text-base">
          {props.description}
        </p>

        <div className="flex items-center ml-auto gap-2 text-blue-600 font-medium mt-2 group-hover:translate-x-1 transition-transform duration-200">
          Подробнее
          <Image src={ArrowLeftIcon} alt="Стрелка" className="size-5" />
        </div>
      </button>

      <MediaModal
        title={props.title}
        description={props.description}
        open={openModal}
        onClose={handleClose}
        videos={props.videos}
        audios={props.audios}
        sector={props.sector}
      />
    </>
  );
};

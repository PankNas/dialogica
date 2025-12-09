'use client';

import { ReactNode, useEffect, useLayoutEffect, useRef } from 'react';
import { mergeClassNames } from '@/shared/lib';

type ModalProps = {
  children: ReactNode;
  open: boolean;
  onCloseAction?: () => void;
};

export const Modal = (props: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const showModal = props.open;

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showModal]);

  useLayoutEffect(() => {
    if (dialogRef.current?.open && !showModal) {
      dialogRef.current.close();
    } else if (!dialogRef.current?.open && showModal) {
      dialogRef.current?.showModal();
    }
  }, [showModal]);

  return (
    <dialog
      ref={dialogRef}
      onClose={props.onCloseAction}
      className={mergeClassNames(
        'fixed inset-0 z-50 m-auto border-none bg-transparent rounded-lg backdrop:bg-black/50 backdrop:backdrop-blur-sm focus:outline-none'
      )}
    >
      <div className="bg-white rounded-lg p-6 max-w-lg flex items-center justify-center w-full">
        {props.children}
      </div>
    </dialog>
  );
};

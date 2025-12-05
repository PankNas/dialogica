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
    <>
      {showModal && (
        <dialog
          ref={dialogRef}
          onClose={props.onCloseAction}
          className={mergeClassNames(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-none bg-transparent rounded-lg focus-visible:outline-blue-200 focus-visible:outline-1  backdrop:bg-black/50 z-20'
          )}
        >
          <div className="bg-white rounded-lg p-6 max-w-lg flex items-center justify-center w-full">
            {props.children}
          </div>
        </dialog>
      )}
    </>
  );
};

'use client';

import React, { MouseEvent, useState } from 'react';
import { Modal } from '@/shared/ui';
import { createDocuments } from './config';
import { mergeClassNames } from '@/shared/lib';

type DocumentModalProps = {
  title: string;
  variant: 'consentToProcessing' | 'dataProtectionPolicy';
  className?: string;
};

export const DocumentModal = (props: DocumentModalProps) => {
  const [openMainModal, setOpenMainModal] = useState<boolean>(false);
  const [openPolicyModal, setOpenPolicyModal] = useState<boolean>(false);

  const handleClickDocument = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenMainModal(true);
  };

  // Создаем документы с обработчиком для открытия политики
  const documents = createDocuments(() => setOpenPolicyModal(true));

  const data = documents[props.variant];

  return (
    <>
      <button
        onClick={handleClickDocument}
        className={mergeClassNames('text-blue-500 hover:text-blue-600 inline', props.className)}
      >
        {props.title}
      </button>

      {/* Основная модалка */}
      <Modal
        open={openMainModal}
        onCloseAction={() => setOpenMainModal(false)}
        title={data.title}
        size="lg"
      >
        {data.content}
      </Modal>

      {/* Модалка с политикой конфиденциальности (если она еще не открыта) */}
      {props.variant === 'consentToProcessing' && (
        <Modal
          open={openPolicyModal}
          onCloseAction={() => setOpenPolicyModal(false)}
          title={documents.dataProtectionPolicy.title}
          size="lg"
        >
          {documents.dataProtectionPolicy.content}
        </Modal>
      )}
    </>
  );
};

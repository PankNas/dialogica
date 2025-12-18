'use client';

import React, { MouseEvent, useState } from 'react';
import { Button, Modal } from '@/shared/ui';
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

  const handleCloseMainModal = () => {
    setOpenMainModal(false);
  };

  const handleClosePolicyModal = () => {
    setOpenPolicyModal(false);
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
      <Modal open={openMainModal} onCloseAction={handleCloseMainModal} title={data.title} size="lg">
        <div className="flex flex-col gap-5">
          {data.content}
          <Button onClick={handleCloseMainModal} variant="secondary" className="mx-auto">
            Назад
          </Button>
        </div>
      </Modal>

      {/* Модалка с политикой конфиденциальности (если она еще не открыта) */}
      {props.variant === 'consentToProcessing' && (
        <Modal
          open={openPolicyModal}
          onCloseAction={handleClosePolicyModal}
          title={documents.dataProtectionPolicy.title}
          size="lg"
        >
          <div className="flex flex-col gap-5">
            {documents.dataProtectionPolicy.content}
            <Button onClick={handleClosePolicyModal} variant="secondary" className="mx-auto">
              Назад
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

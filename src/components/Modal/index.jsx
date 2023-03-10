import React from 'react';

import {
  Modal as ModalContainer,
  ModalOverlay,
  Spinner,
} from '@chakra-ui/react';

import { useModal } from '../../hooks';

export default function Modal() {
  const { key, content, isOpen, closeModal } = useModal();

  const ModalContent = React.lazy(() => import(`./ModalContents/${key}`));

  return (
    isOpen && (
      <React.Suspense
        fallback={<Spinner position="fixed" top="50%" right="50%" size="xl" />}>
        <ModalContainer
          size="2xl"
          isCentered
          isOpen={isOpen}
          onClose={closeModal}>
          <ModalOverlay />
          <ModalContent content={content} />
        </ModalContainer>
      </React.Suspense>
    )
  );
}

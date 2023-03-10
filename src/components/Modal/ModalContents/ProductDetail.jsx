import { useCallback } from 'react';

import {
  Badge,
  Box,
  Button,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from '@chakra-ui/react';

import { useProduct } from '../../../hooks';

export default function ProductDetail({ content }) {
  const {
    idx,
    name,
    price,
    mainImage,
    isReserved,
    description,
    spaceCategory,
    maximumPurchases,
    registrationDate,
  } = content;

  const [, { makeReservation, cancelReservation }] = useProduct();

  const onClickReserve = useCallback(
    () => makeReservation(idx),
    [idx, makeReservation],
  );

  const onClickCancel = useCallback(
    () => cancelReservation(idx),
    [idx, cancelReservation],
  );

  return (
    <ModalContent size="2xl">
      <ModalHeader fontSize="2xl">{`#${idx} ${name}`}</ModalHeader>
      <ModalCloseButton size="lg" />
      <ModalBody display="flex" gap="20px">
        <Image src={mainImage} />
        <Box display="flex" flexDir="column">
          <Box>
            <Badge colorScheme="blue" flexGrow="0">
              {`@${spaceCategory}`}
            </Badge>
          </Box>
          <Text flexGrow="1">{description}</Text>
          <Box>
            <Text textAlign="end">
              최대 구매 가능 갯수: {maximumPurchases}개
            </Text>
            <Text fontSize="lg" fontWeight="bold" textAlign="end">
              {`${price.toLocaleString()}원`}
            </Text>
          </Box>
        </Box>
      </ModalBody>

      <ModalFooter display="flex" justifyContent="space-between">
        <Text>상품 등록일: {registrationDate}</Text>
        {isReserved ? (
          <Button colorScheme="red" onClick={onClickCancel}>
            취소
          </Button>
        ) : (
          <Button colorScheme="green" onClick={onClickReserve}>
            예약
          </Button>
        )}
      </ModalFooter>
    </ModalContent>
  );
}

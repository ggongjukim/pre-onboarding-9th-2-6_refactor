import {
  CheckIcon,
  DeleteIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Text,
  Center,
  Image,
} from '@chakra-ui/react';

export default function ReservedProductList({ reservedProducts }) {
  return (
    <Box p={8}>
      <chakra.h1
        fontSize="33px"
        mt={10}
        pb={20}
        borderBottom="3px solid #ff7373"
        mb={15}>
        Check your Pay List
      </chakra.h1>
      <Table variant="striped" colorScheme="gray.200" w="100%">
        <colgroup>
          <col width="10%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="10%" />
        </colgroup>
        <Thead borderBottom="3px solid #ff7373">
          <tr>
            <Th />
            <Th />
            <Th>상품</Th>
            <Th>판매 가격</Th>
            <Th pl="38px">수량</Th>
            <Th pl="38px">결제 금액</Th>
            <Th />
          </tr>
        </Thead>
        <Tbody fontSize="xs">
          {reservedProducts.map((product) => (
            <Tr key={product.idx}>
              <Td>
                <Box as="span" mr={2}>
                  <CheckIcon color="green.500" />
                </Box>
              </Td>
              <Td>
                <Box width="60px">
                  <Image
                    src={product.mainImage}
                    alt={product.name}
                    rounded="lg"
                  />
                </Box>
              </Td>
              <Td>{product.name}</Td>
              <Td>₩{product.price.toLocaleString()}</Td>
              <Td>
                <Box display="flex">
                  <Button size="sm" mr={2}>
                    <ChevronDownIcon />
                  </Button>
                  <Center fontSize="xs">1</Center>
                  <Button size="sm" ml={2}>
                    <ChevronUpIcon />
                  </Button>
                </Box>
              </Td>

              <Td>
                <Box as="span" mr={2} cursor="pointer">
                  <DeleteIcon color="red.500" />
                </Box>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box
        borderTop="4px solid gray"
        borderBottom="4px solid gray"
        p={4}
        mt={10}
        display="flex"
        justifyContent="center"
        alignItems="flex-end">
        <Text fontSize="18px" mr={2}>
          Total payment amount:
        </Text>
        <chakra.p fontSize="22px">₩ 3</chakra.p>
      </Box>
      <Box display="flex" justifyContent="center" mt={10}>
        <Button variant="solid" colorScheme="blue" size="lg">
          make a payment
        </Button>
      </Box>
    </Box>
  );
}

/*
const ReservationsPage = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  const content = useSelector((state) => state.contents);

  return (
    <>
      <Link to="/main">메인으로</Link>
      <S.TableContainer margin="200px">
        <S.Table variant="striped" colorScheme="blue">
          <S.TableCaption placement="top">예약 내역 조회</S.TableCaption>
          <S.Thead>
            <S.Tr>
              <S.Th>상품 번호</S.Th>
              <S.Th>상품 이름</S.Th>
              <S.Th>수량</S.Th>
              <S.Th>금액</S.Th>
              <S.Th>삭제</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {reservations?.map((item) => (
              <S.Tr key={item.id}>
                <S.Td>{item.id}</S.Td>
                <S.Td>{content[item.id].name}</S.Td>
                <S.Td>
                  <S.NumberInput
                    size="sm"
                    maxW={20}
                    value={item.currentPurchases}
                    min={1}
                    max={content[item.id].maximumPurchases}
                  >
                    <S.NumberInputField readOnly />
                    <S.NumberInputStepper>
                      <S.NumberIncrementStepper
                        onClick={() => {
                          dispatch(
                            addcurrentPurchases({
                              id: item.id,
                              max: content[item.id].maximumPurchases,
                            })
                          );
                        }}
                      />
                      <S.NumberDecrementStepper
                        onClick={() => {
                          dispatch(subtractcurrentPurchases(item.id));
                        }}
                      />
                    </S.NumberInputStepper>
                  </S.NumberInput>
                </S.Td>
                <S.Td>{content[item.id].price}</S.Td>
                <S.Td>
                  <S.Button
                    onClick={() => {
                      dispatch(deleteReservationsList(item.id));
                      console.log(reservations);
                    }}
                  >
                    삭제
                  </S.Button>
                </S.Td>
              </S.Tr>
            ))}
          </S.Tbody>
          <S.Tfoot>
            <S.Tr>
              <S.Th>{''}</S.Th>
              <S.Th>{''}</S.Th>
              <S.Th>{''}</S.Th>
              <S.Th>총 금액</S.Th>
              <S.Th>{''}</S.Th>
            </S.Tr>
          </S.Tfoot>
        </S.Table>
      </S.TableContainer>
    </>
  );
}; */

import { Box, Table, Thead, Tbody, Th, Center, Text } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

import ReservedProduct from './ReservedProduct';

export default function ReservedProductList({ reservedProducts }) {
  return (
    <Box p={8}>
      <Center
        fontSize="33px"
        pb={15}
        borderBottom="3px solid #ff7373"
        display="flex">
        <FiShoppingCart />
        <Text ml={2}>장바구니</Text>
      </Center>
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
            <Th>상품</Th>
            <Th>판매 가격</Th>
            <Th>수량</Th>
            <Th>결제 금액</Th>
            <Th />
          </tr>
        </Thead>
        <Tbody fontSize="xs">
          {reservedProducts.map((product) => (
            <ReservedProduct product={product} />
          ))}
        </Tbody>
      </Table>
      {/* <Box
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
      </Box> */}
    </Box>
  );
}

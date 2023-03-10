import { useNavigate } from 'react-router-dom';

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Icon,
  Text,
} from '@chakra-ui/react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

export default function Nav() {
  const navigate = useNavigate();
  // toggleColorMode는 colorMode를 dark나 light로 변경해줌
  const { colorMode, toggleColorMode } = useColorMode();
  // useColorModeValue(lightModeValue, darkModeValue)
  const bg = useColorModeValue('gray.200', 'gray.900');
  return (
    <div>
      <Box bg={bg} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box cursor="pointer">Like A Local</Box>

          <Flex alignItems="center">
            <Stack direction="row" spacing={7}>
              <Button bg={bg} onClick={toggleColorMode}>
                {colorMode === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
              </Button>
              <Center>
                <Icon
                  onClick={() => navigate('/reservations')}
                  cursor="pointer"
                  as={FiShoppingCart}
                  h={5}
                  w={5}
                  alignSelf="center"
                />
                <Box position="absolute" top="15px" right="10px">
                  <Text
                    color="white"
                    fontSize="8px"
                    bg="blue.500"
                    w={3}
                    h={3}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    15
                  </Text>
                </Box>
              </Center>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}

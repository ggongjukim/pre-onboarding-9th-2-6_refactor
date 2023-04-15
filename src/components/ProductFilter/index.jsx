import {
  Box,
  Flex,
  Text,
  Button,
  Checkbox,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Spacer,
  HStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import {
  priceReset,
  priceUpdate,
  spaceRest,
  spaceUpdate,
} from '../../store/slices/categorySlice';

export default function ProductFilter() {
  const dispatch = useDispatch();

  const defaultSpace = useSelector((state) => state.categories.defaultSpace);
  const defaultPrice = useSelector((state) => state.categories.defaultPrice);

  const spaceCategories = useSelector(
    (state) => state.categories.spaceCategories,
  );
  const priceCategories = useSelector(
    (state) => state.categories.priceCategories,
  );

  function resetSpace() {
    dispatch(spaceRest());
  }

  function resetPrice() {
    dispatch(priceReset());
  }

  function updateSpace(category) {
    dispatch(spaceUpdate({ category }));
  }

  function updatePrice(range) {
    dispatch(priceUpdate({ range }));
  }

  return (
    <Box marginTop="10px">
      <Flex justifyContent="center">
        <Box px={8} py={4} minW="400px">
          <Flex mb={4} justifyContent="space-between" alignItems="center">
            <Text fontSize="lg" as="b">
              지역 설정
            </Text>
            <Button onClick={resetSpace}>초기화</Button>
          </Flex>
          <Flex>
            {defaultSpace.map((category) => (
              <Checkbox
                colorScheme="teal"
                pr={4}
                key={category}
                name={category}
                isChecked={spaceCategories.includes(category)}
                onChange={() => {
                  updateSpace(category);
                }}>
                {category}
              </Checkbox>
            ))}
          </Flex>
        </Box>
        <Box px={8} py={4} minW="400px">
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="lg" as="b">
              가격 설정
            </Text>
            <Button onClick={resetPrice}>초기화</Button>
          </Flex>
          <RangeSlider
            min={defaultPrice[0]}
            max={defaultPrice[1]}
            step={1000}
            value={priceCategories}
            onChange={(range) => updatePrice(range)}>
            <RangeSliderTrack bg="teal.100">
              <RangeSliderFilledTrack bg="teal" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={3} index={0} bg="teal" />
            <RangeSliderThumb boxSize={3} index={1} bg="teal" />
          </RangeSlider>
          <Flex>
            <Text>{priceCategories[0]}원</Text>
            <Spacer />
            <Text>{priceCategories[1]}원</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

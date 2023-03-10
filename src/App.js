import { ChakraProvider } from '@chakra-ui/react';

import Router from './router';

//* 여행 상품 정보 리스트 렌더
//*  여행 상품 카드 컴포넌트 구현
//* 리스트에서 노출해야 하는 정보: idx, name, mainImage, price, spaceCategory
//*  상품 리스트 컴포넌트 구현
export default function App() {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}

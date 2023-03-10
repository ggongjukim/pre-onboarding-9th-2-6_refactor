import { useDispatch, useSelector } from 'react-redux';

import { fetchProductData } from '../store/slices/productSlice';

export default function useProduct() {
  const { products } = useSelector((state) => state?.products || []);
  const dispatch = useDispatch();

  function initProducts(data) {
    dispatch(fetchProductData({ products: data }));
  }

  return [products, { initProducts }];
}

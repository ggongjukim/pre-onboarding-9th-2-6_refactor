import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ProductList from '../components/ProductList';
import { fetchProductData } from '../store/slices/productSlice';

export default function MainPage() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('./product_list.json');
      const data = await response.json();
      dispatch(fetchProductData(data));
    }
    fetchData();
    if (!products.length) fetchData();
  }, []);

  return <ProductList products={products}></ProductList>;
}

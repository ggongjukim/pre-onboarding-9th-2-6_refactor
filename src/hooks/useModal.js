import { useDispatch, useSelector } from 'react-redux';

import { open, close } from '../store/slices/modalSlice';

export default function useModal() {
  const { key, content, isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  function openModal(modalKey, modalContent) {
    dispatch(open({ modalKey, modalContent }));
  }

  function closeModal() {
    dispatch(close());
  }

  return { key, content, isOpen, openModal, closeModal };
}

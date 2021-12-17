import React, { useEffect } from 'react';
import { useModal } from 'react-modal-hook/dist/useModal';
import { ModalProps } from './use-my-modal';

interface MyModalprops extends ModalProps {
  title: string;
}

export const MyModal = ({ hideModal }: MyModalprops) => {
  return (
    <div>
      Modal! {open} <button onClick={hideModal}>close</button>
    </div>
  );
};

export const useMyModalComponent = (title: string) => {
  return useModal((props) => <MyModal title={title} {...props} />, []);
};

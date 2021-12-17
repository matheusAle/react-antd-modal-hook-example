import React, { useEffect } from 'react';
import { ModalProps, useMyModal } from './use-my-modal';

interface MyModalprops extends ModalProps {
  title: string;
}

export const ExampleModal = ({ hideModal, title }: MyModalprops) => {
  return (
    <div>
      Modal! {title} <br />
      <button onClick={hideModal}>close</button>
    </div>
  );
};

export const useExampleModal = (title: string) => {
  return useMyModal(
    (props) => <ExampleModal title={title} {...props} />,
    [title]
  );
};

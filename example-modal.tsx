import React, { useEffect } from 'react';
import { uselazyModal } from './lazy-modal';
import { ModalProps, useMyModal } from './use-my-modal';

interface MyModalprops extends ModalProps {
  title: string;
}

export const ExampleModal = ({ hideModal, title }: MyModalprops) => {
  const toggleLazyModal = uselazyModal();

  return (
    <div>
      Modal! {title} <br />
      <button onClick={hideModal}>close</button>
      <button onClick={() => toggleLazyModal(true)}>open lazy</button>
    </div>
  );
};

export const useExampleModal = (title: string) => {
  return useMyModal(
    (props) => <ExampleModal title={title} {...props} />,
    [title]
  );
};

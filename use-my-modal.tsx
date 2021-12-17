import React from 'react';

import { useModal } from 'react-modal-hook';

import { Modal } from 'antd';
import 'antd/dist/antd.css';

export interface ModalProps {
  hideModal(): void;
}

export const useMyModal: typeof useModal = (Component, inputs) => {
  const [showModal, hideModal] = useModal(
    () => (
      <Modal visible={true} onCancel={hideModal} onOk={hideModal}>
        <Component hideModal={hideModal} />
      </Modal>
    ),
    inputs
  );

  return [showModal, hideModal];
};

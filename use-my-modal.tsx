import React, { useState } from 'react';

import { useModal, ModalType } from 'react-modal-hook';

import { Modal } from 'antd';
import 'antd/dist/antd.css';

export interface ModalProps<T extends any = any> {
  hideModal(): void;
  value?: T;
}

export const useMyModal = <T extends any>(
  Component: ModalType,
  inputs: any[] = []
) => {
  const [value, setValue] = useState<T | boolean | undefined>();

  const [showModal, hideModal] = useModal(() => {
    const close = () => {
      setValue(undefined);
      hideModal();
    };

    return (
      <Modal visible={true} onCancel={close} onOk={close}>
        <Component hideModal={hideModal} value={value} />
      </Modal>
    );
  }, inputs);

  const setModal = (val: T | boolean | undefined) => {
    setValue(val);
    if (!!val) {
      showModal();
    } else {
      hideModal();
    }
  };

  return setModal;
};

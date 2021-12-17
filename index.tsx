import React, { Component } from 'react';
import { render } from 'react-dom';
import { MyModal } from './my-modal';
import './style.css';
import { ModalProvider } from 'react-modal-hook';
import { useMyModal } from './use-my-modal';

const AwesomeComponent = () => {
  const [showModal, hideModal] = useMyModal(MyModal);

  return (
    <div>
      <button onClick={() => showModal()}>open</button>
    </div>
  );
};

const App = () => {
  return (
    <ModalProvider>
      <AwesomeComponent />
    </ModalProvider>
  );
};

render(<App />, document.getElementById('root'));

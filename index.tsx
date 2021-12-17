import React, { useState } from 'react';
import { render } from 'react-dom';
import { ModalProvider } from 'react-modal-hook';
import { useExampleModal } from './example-modal';
import { uselazyModal } from './lazy-modal';

import './style.css';

const AwesomeComponent = () => {
  const [title, setTitle] = useState('');
  const toggleExampleModal = useExampleModal(title);
  const toggleLazyModal = uselazyModal();

  return (
    <div>
      example:
      <input value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
      <button onClick={() => toggleExampleModal(true)}>
        open example modal
      </button>
      <br />
      <br />
      lazy:
      <button onClick={() => toggleLazyModal(true)}>open lazy modal</button>
      <br />
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

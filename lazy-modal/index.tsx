import React, { Suspense } from 'react';
import { useMyModal } from '../use-my-modal';

const LazyModal = React.lazy(() =>
  import('./lazy-modal').then(
    (m) => new Promise((r) => setTimeout(() => r(m), 3000))
  )
);

export const uselazyModal = () => {
  return useMyModal(
    () => (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyModal />
        </Suspense>
      </div>
    ),
    []
  );
};

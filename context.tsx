import React, {
  createContext,
  FC,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

export interface ModalProps {
  isVisible: boolean;
  toggleVisisble(b: boolean): void;
}

export type Modal<P extends ModalProps = any> = (props: P) => Element;

interface ontext {
  create<P extends ModalProps>(
    component: Modal<P>
  ): { _remove(): void } & ModalProps;
}

const context = createContext<ontext>({} as ontext);

export const useModal = (el: any): ModalProps => {
  const ref = useRef<ModalProps>(null);
  const { create } = useContext(context);

  useEffect(() => {
    ref.current = create(el);

    console.log(ref.current, el);

    return () => (ref.current as any)._remove();
  }, []);

  return {
    isVisible: ref.current?.isVisible,
    toggleVisisble: ref.current?.toggleVisisble,
  };
};

export const ModalProvider: FC = ({ children }) => {
  const [state, setState] = useState<Record<string, any>>({});
  const [components, setComponents] = useState<any[]>([]);

  const create = useCallback((Component: any) => {
    const key = Date.now().toString();

    setState((current) => {
      return { ...current, [key]: { isVisible: false } };
    });

    const Wapper = () => {
      // const [isVisible, toggleVisisble] = useState(false);

      // useEffect(() => {
      //   toggleVisisble(state[key].isVisible);
      // }, [state[key]]);

      // useEffect(() => {
      //   state[key].isVisible = isVisible;
      // }, [isVisible]);

      return <Component {...{ isVisible: true, toggleVisisble: () => {} }} />;
    };

    const _remove = () => {
      // const index = components.indexOf(Wapper);
      // if (index != -1) {
      //   setComponents((current) => {
      //     current.splice(index, 1);
      //     return [...current];
      //   });
      //   setState((current) => {
      //     delete current[key];
      //     return { ...current };
      //   });
      // }
    };

    setComponents((current) => current.concat(Wapper));

    return Object.create(
      {},
      {
        isVisible: {
          get: () => state[key].isVisible,
        },
        _remove: { value: _remove },
        toggleVisisble: { value: (value) => (state[key].isVisible = value) },
      }
    );
  }, []);

  return (
    <context.Provider value={{ create }}>
      {children}
      {components.map((C, k) => (
        <C key={k} />
      ))}
    </context.Provider>
  );
};

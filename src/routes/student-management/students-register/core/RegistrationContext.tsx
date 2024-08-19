import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from "react";

type RegistrationContextProps = {
  screen: boolean;
  setScreen: Dispatch<SetStateAction<boolean>>;
  phoneCheckModal: boolean;
  setPhoneCheckModal: Dispatch<SetStateAction<boolean>>;
  groupModal: boolean;
  setGroupModal: Dispatch<SetStateAction<boolean>>;
};

export const RegistrationContext = createContext<RegistrationContextProps>({
  screen: false,
  setScreen: (a) => a,
  phoneCheckModal: false,
  setPhoneCheckModal: (a) => a,
  groupModal: false,
  setGroupModal: () => {},
});
export function RegistrationContextProvider({
  children,
}: {
  children: ReactElement<any>;
}) {
  // request => start the first screen

  const [groupModal, setGroupModal] = useState<boolean>(false);
  const [screen, setScreen] = useState(false);
  const [phoneCheckModal, setPhoneCheckModal] = useState(false);

  return (
    <RegistrationContext.Provider
      value={{
        screen,
        setScreen,
        phoneCheckModal,
        setPhoneCheckModal,
        groupModal,
        setGroupModal,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}

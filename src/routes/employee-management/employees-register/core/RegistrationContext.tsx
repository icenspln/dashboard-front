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
  };
  
  export const RegistrationContext = createContext<RegistrationContextProps>({
    screen: false,
    setScreen: (a) => a,
  });
  export function RegistrationContextProvider({
    children,
  }: {
    children: ReactElement<any>;
  }) {
    // request => start the first screen
  
    const [screen, setScreen] = useState(false);
  
    return (
      <RegistrationContext.Provider
        value={{ screen, setScreen, }}
      >
        {children}
      </RegistrationContext.Provider>
    );
  }
  
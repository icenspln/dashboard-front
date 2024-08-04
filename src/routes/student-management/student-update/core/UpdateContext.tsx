import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from "react";

type UpdateContextProps = {};

export const UpdateContext = createContext<UpdateContextProps>({});

export function UpdateContextProvider({
  children,
}: {
  children: ReactElement<any>;
}) {
  // const [screen, setScreen] = useState(false);

  return <UpdateContext.Provider value={{}}>{children}</UpdateContext.Provider>;
}

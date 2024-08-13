import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getAppNameAndLogo,
  checkPassword,
  updatePassword,
  updateAppName,
  updateLogo,
  backupDatabase,
  restoreDatabase,
} from "./_requests"; // Adjust the import path accordingly

interface SettingsContextProps {
  appName: string;
  logoUrl: string;
  checkPassword: (password: string) => Promise<boolean>;
  updatePassword: (oldPassword: string, newPassword: string) => Promise<void>;
  updateAppName: (name: string) => Promise<void>;
  updateLogo: (file: File) => Promise<void>;
  backupDatabase: () => Promise<void>;
  restoreDatabase: (file: File) => Promise<void>;
  setAppName: React.Dispatch<React.SetStateAction<string>>;
  setLogoUrl: React.Dispatch<React.SetStateAction<string>>;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [appName, setAppName] = useState<string>("");
  const [logoUrl, setLogoUrl] = useState<string>("");

  useEffect(() => {
    const fetchSettings = async () => {
      const { appName, logo } = await getAppNameAndLogo();
      setAppName(appName);
      setLogoUrl(logo);
    };
    fetchSettings();
  }, []);

  const contextValue: SettingsContextProps = {
    appName,
    logoUrl,
    checkPassword,
    updatePassword,
    updateAppName,
    updateLogo,
    backupDatabase,
    restoreDatabase,
    setAppName,
    setLogoUrl,
  };

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

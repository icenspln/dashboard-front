import { useState, useEffect } from "react";
import { useSettings } from "../routes/settings//core/SettingsContext";

//interface LoadingScreenProps {
//  children: React.ReactNode;
//}

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const { logoUrl } = useSettings();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="animate-spinLeftRight">
          <img src={logoUrl} alt="" className="w-30 h-30" />
        </div>
      </div>
    );
  }
}

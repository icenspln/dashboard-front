import Logo from "../assets/icons/TemporaryLogo.png"

import React, { useState, useEffect } from 'react';

//interface LoadingScreenProps {
//  children: React.ReactNode;
//}

export default function LoadingScreen () {
  const [isLoading, setIsLoading] = useState(true);

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
          <img src={Logo} alt="" className="w-30 h-30" />
        </div>
      </div>
    );
  }

  
};





import React, { useState } from 'react';
import ShowPasswordSvg from '../../../../../../../assets/icons/ShowPasswordSvg';

const PasswordInput: React.FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="كلمة المرور"
      />
      <button
        type="button"
        onClick={toggleShowPassword}
        className="absolute inset-y-0 left-0 flex items-center px-4 text-gray-600 focus:outline-none"
      >
        {showPassword ? (
          <ShowPasswordSvg/>
        ) : (
         <ShowPasswordSvg/>
        )}
      </button>
    </div>
  );
};

export default PasswordInput;

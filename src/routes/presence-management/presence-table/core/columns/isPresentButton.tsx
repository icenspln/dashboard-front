import { useState } from 'react';
import HandCursorSvg from '../../../../../assets/icons/HandCursorSvg';

const PresentButton = () => {
  const [isPresent, setIsPresent] = useState(true);

  const handleClick = () => {
    setIsPresent(!isPresent);
  };

  return (
    <button
      onClick={handleClick}
      className={
        `${ 
            isPresent ? 'bg-green-100 text-green-500' : 'bg-orange-100 text-orange-500'
        } 
        text-white py-2 px-2 rounded-full cursor-pointer flex justify-between items-center max-w-full w-1/2 min-w-36`
    }
    >
        <span className='flex-1 text-right'> {isPresent  ? 'حاضر' : 'غائب'}</span>
     
      <span className='ml-15'><HandCursorSvg/></span>
    </button>
  );
};

export default PresentButton;

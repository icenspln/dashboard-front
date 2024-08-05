import { useState } from 'react';
import HandCursorSvg from '../assets/icons/HandCursorSvg';

const StudentPresentButton = () => {
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
         py-2 px-2 rounded-full cursor-pointer flex justify-between items-center max-w-full w-[180px] h-[26px]`
    }
    >
        <span className='flex-1 text-right'> {isPresent  ? 'حاضر' : 'غائب'}</span>
     
      <span className='ml-15'><HandCursorSvg/></span>
    </button>
  );
};

const TeacherPresentButton = () =>{
  return(
    <button
     className=" bg-red-100 text-red-500 py-2 px-2 rounded-full flex justify-between items-center max-w-full w-[180px] h-[26px]"
    >
        أستاذ غائب
     
      
    </button>
  )
}
export  {StudentPresentButton, TeacherPresentButton};


import React from 'react';
import { Overlay } from '../../../../../../components/Overlay';
import ConfirmButton from './confirmButton';

interface RegistredStudentsOverlayProps {
  onClose: () => void;
}

const RegistredStudentsOverlay: React.FC<RegistredStudentsOverlayProps> = ({ onClose }) => {
  return (
    <Overlay onClose={onClose}>
      <>
      <div className=' w-[553px] min-h-[324px] flex flex-col items-center gap-[15px]'>
        <h1 className="text-2xl">قائمة المسجلين</h1>
        <p>الرياضيات|السنة الأولى|علي رياد|الأحد-15:00</p>
        </div>
        <span className='flex justify-center gap-[12px]'>
        <ConfirmButton text='تسجيل التغييرات' color='bg-blue' textColor='text-white'/>
        <ConfirmButton text='إضافة طالب جديد' color='bg-grayBlue' textColor='text-blue'/>
        </span>
      </>
    </Overlay>
  );
};

export default RegistredStudentsOverlay;

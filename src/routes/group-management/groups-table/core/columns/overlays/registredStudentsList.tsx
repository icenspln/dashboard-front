
import React from 'react';
import { Overlay } from '../../../../../../components/Overlay';
import ConfirmButton from '../../../../../../components/confirmButton';
import SelectGroup from './Popup-menu-component/PresentStudentsList'; // responsible for showing the registred students in the group
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
        
        <span className='flex flex-col gap-[12px]'>
          <SelectGroup id={1} label='أسماء عبادي |12/09/2010'/>
          <SelectGroup id={1} label='أسماء عبادي |12/09/2010'/>
          <SelectGroup id={1} label='أسماء عبادي |12/09/2010'/>
          <SelectGroup id={1} label='أسماء عبادي |12/09/2010'/>
        </span>
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

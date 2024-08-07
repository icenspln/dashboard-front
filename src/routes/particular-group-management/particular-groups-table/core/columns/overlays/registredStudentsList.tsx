
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
          <SelectGroup id={2} label='أسماء عبادي |12/09/2010'/>
          <SelectGroup id={3} label='أسماء عبادي |12/09/2010'/>
          <SelectGroup id={4} label='أسماء عبادي |12/09/2010'/>
        </span>
        <div className='flex gap-[12px]'>
          <select
           className='w-[419px] h-[32px] border-2 rounded-md'
          
           
          >
            </select> 
            <input 
            className='w-[86px] h-[32px] border-2 rounded-md text-center'
            placeholder='2000 دج'
            type="text"
             />
         
        </div>
        </div>
        
        <span className='flex justify-center gap-[12px]'>
        <ConfirmButton text='تسجيل التغييرات'  className='text-white bg-blue hover:bg-grayBlue hover:text-blue border hover:border-blue '/>
        <ConfirmButton text='إضافة طالب جديد'  className='text-blue bg-grayBlue hover:bg-blue hover:text-white border'/>
        </span>
        
      </>
    </Overlay>
  );
};

export default RegistredStudentsOverlay;

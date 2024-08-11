
import React from 'react';
import { Overlay } from '../../../../../../components/Overlay';
import ConfirmButton from '../../../../../../components/confirmButton';

interface AddNewSessionOverlayProps {
  onClose: () => void;
}

const AddNewSessionOverlay: React.FC<AddNewSessionOverlayProps> = ({ onClose }) => {
  return (
    <Overlay onClose={onClose}>
      <>

      <div className=' flex flex-col  items-center w-[339] h-[192px] gap-[15px]  '>
        <h1 className="text-2xl">إضافة حصة للفوج</h1>
        <p>يرجى اختيار اليوم و الوقت لإضافة الحصة</p>

        <span className='flex justify-between gap-[12px]'>
        <input type="date"  />
        <input type="time" />
        </span>
        <span className='flex justify-center'>
          <ConfirmButton text="تسجيل التغييرات"  className='text-white'/>
        </span>
        </div>
      </>
    </Overlay>
  );
};

export default AddNewSessionOverlay;


import React from 'react';
import { Overlay } from '../../../../../../components/Overlay';
import ConfirmButton from '../../../../../../components/confirmButton';

interface DeleteParticularGroupOverlayProps {
  onClose: () => void;
}

const DeleteParticularGroupOverlay: React.FC<DeleteParticularGroupOverlayProps> = ({ onClose }) => {
  return (
    <Overlay onClose={onClose}>
      <>
      <div className=" bg-white w-[460px] h-[188px] rounded gap-[10px]  flex flex-col items-center justify-evenly text-center">
        <h1 className="text-xl font-bold"> هل أنت متأكد من أنك تريد حذف هذا الفوج </h1>
        <p className='text-gray-400'>لا يمكنك استعادة الفوج بعد الحذف، ستختفي بيانات دفع الفوج للأستاذ و بيانات دفع التلاميذ المسجلين فيه</p>
        <span className='flex justify-center  '>
            <ConfirmButton text="تأكيد الحذف"  className='text-white bg-red-400' />
        </span>
        </div>
        
      </>
    </Overlay>
  );
};

export default DeleteParticularGroupOverlay;

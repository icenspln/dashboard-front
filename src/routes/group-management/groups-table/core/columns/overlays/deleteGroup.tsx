
import React from 'react';
import { Overlay } from '../../../../../../components/Overlay';
import ConfirmButton from './confirmButton';

interface DeleteGroupOverlayProps {
  onClose: () => void;
}

const DeleteGroupOverlay: React.FC<DeleteGroupOverlayProps> = ({ onClose }) => {
  return (
    <Overlay onClose={onClose}>
      <>
      <div className='className="relative bg-white w-[460px] h-[188px] rounded-[10px] p-[20px] pl-[16px] pr-[16px] top-[256px] left-[410px] gap-[10px] mx-auto mt-12 flex flex-col items-center" '>
        <h1 className="text-2xl"> هل أنت متأكد من أنك تريد حذف هذا الفوج </h1>
        <p>لا يمكنك استعادة الفوج بعد الحذف، وبهذا الحذف ستختفي بيانات دفع الفوج للأستاذ و بيانات دفع التلاميذ المسجلين فيه</p>
        <span className='flex justify-center '>
            <ConfirmButton text="تأكيد الحذف" color="bg-red-400" />
        </span>
        </div>
        
      </>
    </Overlay>
  );
};

export default DeleteGroupOverlay;

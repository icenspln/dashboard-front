
import React from 'react';
import { Overlay } from '../../../../../../components/Overlay';
import ConfirmButton from './Popup-menu-component/confirmButton';

interface DeleteGroupOverlayProps {
  onClose: () => void;
}

const DeleteGroupOverlay: React.FC<DeleteGroupOverlayProps> = ({ onClose }) => {
  return (
    <Overlay onClose={onClose}>
      <>
      <div className=" bg-white w-[460px] h-[188px] rounded gap-[10px]  flex flex-col items-center justify-evenly">
        <h1 className="text-2xl"> هل أنت متأكد من أنك تريد حذف هذا الفوج </h1>
        <p>لا يمكنك استعادة الفوج بعد الحذف، وبهذا الحذف ستختفي بيانات دفع الفوج للأستاذ و بيانات دفع التلاميذ المسجلين فيه</p>
        <span className='flex justify-center  '>
            <ConfirmButton text="تأكيد الحذف" color="bg-red-400" textColor='text-white' />
        </span>
        </div>
        
      </>
    </Overlay>
  );
};

export default DeleteGroupOverlay;

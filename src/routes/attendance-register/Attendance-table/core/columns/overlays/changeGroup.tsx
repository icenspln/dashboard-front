
import React from 'react';
import { Overlay } from '../../../../../../components/Overlay';
import ConfirmButton from './Popup-menu-component/confirmButton';
import Checklist from '../../../../../../components/CheckList';

interface ChangeGroupOverlayProps {
  onClose: () => void;
}

const ChangeGroupOverlay: React.FC<ChangeGroupOverlayProps> = ({ onClose }) => {
  
  const checklistItems = [
    { id: 1, label: 'الريضايات | السنة الأولى إبتادئي | علي رياد | الأحد-15:00' },
    { id: 2, label: 'التاريخ | السنة الأولى ثانوي | جمال رياد | الأحد-15:00'  },
    { id: 3, label: 'الفيزياء | السنة الثانية إبتادئي | العالي بلحنش | الأحد-15:00'  },
  ];
  return (
    <Overlay onClose={onClose}>
      <>

      <div className=' flex flex-col  items-center w-[517px] min-h-[206px] gap-[15px] '>
        <h1 className="text-2xl">تغيير فوج الطالب أمين مازوزي</h1>
        <p>يرجى اختيار الفوج الذي تريد التغيير إليه   </p>

        <span className='flex flex-col justify-between gap-[12px]'>
        <Checklist items={checklistItems} />
        <Checklist items={checklistItems} />
        </span>
        <span className='flex justify-center'>
          <ConfirmButton text="تسجيل التغييرات" color='bg-blue' textColor='text-white'/>
        </span>
        </div>
      </>
    </Overlay>
  );
};

export default ChangeGroupOverlay;

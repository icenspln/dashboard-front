
import React, {useState} from 'react';
import { Overlay } from '../../../../../../components/Overlay';
import ConfirmButton from './Popup-menu-component/confirmButton';
import PasswordInput from './Popup-menu-component/passwordInputField';
import Checklist from '../../../../../../components/CheckList';
import { useNavigate } from 'react-router-dom';
import GetMonthYear from '../../../../../../components/GetMonths';

const chooseMonthOption = GetMonthYear(2022)

interface DownloadReceiptOverlayProps {
  onClose: () => void;
}

const DownloadReceiptOverlay: React.FC<DownloadReceiptOverlayProps> = ({ onClose }) => {
  const [currentView, setCurrentView] = useState<'checklist' | 'password'>('checklist');
  const navigate = useNavigate()
  const handleConfirmClick = () => {
    if (currentView === 'checklist') {
      setCurrentView('password');
    } else if (currentView === 'password'){
      navigate("/paymentmanagement")
    }
  };

  return (
    <Overlay onClose={onClose}>
    <>
      <div className='w-[511px] flex flex-col items-center gap-[15px]'>
        {currentView === 'checklist' ? (
          <>
            <h1 className="text-2xl">تحميل قسيمة الدفع للشهر</h1>
            <p>يرجى اختيار شهر الدفع من أجل تحميل قسيمة الدفع لهذا الأستاذ</p>
            <div className='flex w-full justify-between items-center gap-[12px]'>
              <div className='flex-1'>
                <Checklist items={chooseMonthOption} />
              </div>
              <ConfirmButton
                text='التالي'
                color='bg-blue'
                textColor='text-white'
                onClick={handleConfirmClick}
              />
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl">أدخل كلمة المرور</h1>
            <p>يرجى إدخال كلمة المرور قبل تحميل قسيمة الدفع</p>
            <div className='flex w-full justify-between items-center gap-[12px]'>
              <div className='flex-1'>
                <PasswordInput />
              </div>
              <ConfirmButton
                text='التالي'
                color='bg-blue'
                textColor='text-white'
                onClick={handleConfirmClick}
              />
            </div>
          </>
        )}
      </div>
    </>
  </Overlay>
  );
};


export default DownloadReceiptOverlay;

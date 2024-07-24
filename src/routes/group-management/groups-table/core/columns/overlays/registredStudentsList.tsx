
import React from 'react';
import { Overlay } from '../../../../../../components/Overlay';

interface RegistredStudentsOverlayProps {
  onClose: () => void;
}

const RegistredStudentsOverlay: React.FC<RegistredStudentsOverlayProps> = ({ onClose }) => {
  return (
    <Overlay onClose={onClose}>
      <>
        <h1 className="text-2xl">حذف من القائمة</h1>
        <p>This is the delete from list overlay content.</p>
      </>
    </Overlay>
  );
};

export default RegistredStudentsOverlay;

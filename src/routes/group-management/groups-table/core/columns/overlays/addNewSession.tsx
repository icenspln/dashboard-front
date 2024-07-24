
import React from 'react';
import { Overlay } from '../../../../../../components/Overlay';

interface AddNewSessionOverlayProps {
  onClose: () => void;
}

const AddNewSessionOverlay: React.FC<AddNewSessionOverlayProps> = ({ onClose }) => {
  return (
    <Overlay onClose={onClose}>
      <>
        <h1 className="text-2xl">إضافة حصة للفوج</h1>
        <p></p>
      </>
    </Overlay>
  );
};

export default AddNewSessionOverlay;

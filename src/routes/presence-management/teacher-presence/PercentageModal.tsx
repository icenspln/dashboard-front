import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (percentage: number) => void;
}

export const PercentageModal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [percentage, setPercentage] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    if (percentage !== null && percentage >= 0 && percentage <= 100) {
      onSubmit(percentage);
      onClose();
    } else {
      setError('الرجاء إدخال نسبة صحيحة بين 0 و 100');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">الرجاء إدخال النسبة</h2>
        <input
          type="number"
          value={percentage ?? ''}
          onChange={(e) => setPercentage(Number(e.target.value))}
          className="border p-2 mb-4 w-full"
          placeholder="النسبة"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-500 text-white p-2 rounded">إلغاء</button>
          <button onClick={handleSubmit} className="bg-blue text-white p-2 rounded">تأكيد</button>
        </div>
      </div>
    </div>
  );
};
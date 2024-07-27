import React, { useState, useRef, useEffect } from 'react';
import { Overlay } from '../../../../components/Overlay';
import StudentsList from './studentList';
import { useNavigate } from 'react-router-dom';

interface SelectStudentProps {
  onClose: () => void;
}

const SelectStudent: React.FC<SelectStudentProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate()

  const checklistItems = [
    { id: 1, label: 'أمين مازوزي' },
    { id: 2, label: 'علي رياد' },
    { id: 3, label: 'جمال رياد' },
    { id: 4, label: 'وليد بنسعيد' },
  ];

  const filteredItems = checklistItems.filter(item =>
    item.label.includes(searchTerm)
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsDropdownVisible(true);
  };

  const handleItemClick = (item: { id: number; label: string }) => {
    console.log(`Selected student: ${item.label}`);
    setIsDropdownVisible(false);
    navigate(`/test`)
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Overlay onClose={onClose}>
      <div className='flex flex-col items-center w-[517px] min-h-[206px] gap-[15px]'>
        <h1 className="text-xl font-bold">ابحث عن الطالب الذي تريده</h1>
        <p className='text-base text-gray-500'>
          يرجى ادخال الاسم الكامل للطالب الذي تبحث عنه واختياره
        </p>

        <div className="relative w-full text-base">
          <input
            type="text"
            placeholder="يرجى ادخال الاسم الكامل"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setIsDropdownVisible(true)}
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />

          {isDropdownVisible && (
            <div ref={dropdownRef} className=" absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-40 overflow-y-auto z-10">
              <StudentsList
                items={filteredItems}
                onItemClick={handleItemClick}
              />
            </div>
          )}
        </div>
      </div>
    </Overlay>
  );
};
export default SelectStudent;

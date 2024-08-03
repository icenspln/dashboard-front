import React, { useState } from 'react';
import ChevronDownSvg from '../assets/icons/ChevronDownSvg';
//this component is for e.g  checking the students into groups
interface ChecklistItem {
  id: number;
  label: string;
}

interface ChecklistProps {
  items: ChecklistItem[];
  onSelectionChange?: (selectedItem: ChecklistItem) => void;
}

const Checklist: React.FC<ChecklistProps> = ({ items, onSelectionChange }) => {
  const [selectedItem, setSelectedItem] = useState<ChecklistItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item: ChecklistItem) => {
    setSelectedItem(item);
    setIsOpen(false);
    if (onSelectionChange) {
      onSelectionChange(item);
    }
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-[376px]">
        
      <button
        onClick={toggleOpen}
        className="flex items-center justify-between text-right w-[376px] py-2 px-4 rounded-md border border-gray-300  hover:bg-gray-200"
      >
        {selectedItem ? selectedItem.label : ""}
        <ChevronDownSvg/>
      </button>
      
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white rounded border border-gray-300 shadow-lg z-10 max-h-[250px] overflow-y-scroll">
          {items.map((item) => (
            <label
              key={item.id}
              className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-base "
            >
                <span>{item.label}</span>
              <input
                type="checkbox"
                checked={selectedItem?.id === item.id}
                onChange={() => handleItemClick(item)}
                className="mr-2"
              />
              
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Checklist;

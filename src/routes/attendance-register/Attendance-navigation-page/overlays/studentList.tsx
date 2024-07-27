interface StudentsListProps {
    items: { id: number; label: string }[];
    onItemClick: (item: { id: number; label: string }) => void;
  }
  
  const StudentsList: React.FC<StudentsListProps> = ({ items, onItemClick }) => {
    return (
        <ul className="border border-gray-300 rounded w-full bg-white">
        {items.map(item => (
          <li
            key={item.id}
            onClick={() => onItemClick(item)}
            className="cursor-pointer hover:bg-gray-200 p-2"
          >
            {item.label}
          </li>
        ))}
      </ul>
    );
  };
  
  export default StudentsList;
  
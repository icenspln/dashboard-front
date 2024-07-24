
export default function SearchBar() {
  return (
    <div className="flex items-center rounded border-2 border-gray  min-w-[241px] min-h-[40px]">
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="البحث في القائمة"
      />
      
    </div>
  );
};



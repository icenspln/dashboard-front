import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function SettingsCell() {
  const options = [
    { label: "تعديل المعلومات", action: () => {} },
    { label: "حذف من القائمة", action: () => {} },
    { label: "رؤية الأفواج الحالية", action: () => {} },
    { label: "تغيير الفوج", action: () => {} },
  ];
  return (
    <div>
      <Popup
        trigger={
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        }
        arrow={false}
        position="bottom center"
      >
        <div className="grid gap-1">
          {options.map((option, index) => (
            <button
              key={index}
              className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
              onClick={option.action}
            >
              {option.label}
            </button>
          ))}
        </div>
      </Popup>
    </div>
  );
}

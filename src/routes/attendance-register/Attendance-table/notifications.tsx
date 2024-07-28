import React, { useState } from "react";
import SendMessageSvg from "../../../assets/icons/SendMessageSvg";

interface Notification {
  id: number;
  message: string;
  timestamp: string;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim() === "") return;

    const newNotification: Notification = {
      id: Date.now(),
      message: inputValue,
      timestamp: new Date().toLocaleString(),
    };

    setNotifications([...notifications, newNotification]);
    setInputValue("");

    
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="w-[387px] h-[618px] border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-2 overflow-y-auto h-[530px] ">
        {notifications.map((notification) => (
          <div key={notification.id}>
            <div className="text-sm text-center text-gray-300">{notification.timestamp}</div>
              <div  className="bg-blue text-white p-2 rounded-lg">
                <div>{notification.message}</div>
              </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-2">
        <input
          type="text"
          placeholder="اكتب ملاحضتك هنا"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="outline-none rounded-full w-[332px] h-[41px] p-2 border border-gray-300"
        />
        <button onClick={handleSend}>
          <SendMessageSvg />
        </button>
      </div>
    </div>
  );
}

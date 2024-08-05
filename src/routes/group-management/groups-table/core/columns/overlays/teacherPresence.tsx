import { Overlay } from "../../../../../../components/Overlay"
import ConfirmButton from "./Popup-menu-component/confirmButton"
import PresentButton from "./Popup-menu-component/isPresentButton"

interface TeacherPresenceProps {
    onClose : () => void
}

export default function TeacherPresence({onClose}:TeacherPresenceProps){
    const groups = [
        {label :"الأحد  2024 / 10 / 23 - 03:00"},
        {label :"الأحد  2024 / 10 / 23 - 03:00"},
        {label :"الأحد  2024 / 10 / 23 - 03:00"}
    ]
    return(
        <Overlay onClose={onClose}>
        <>
          <div className="w-[553px] min-h-[378px] ">
            <div className="flex flex-col text-center gap-[8px]">
              <h1 className="font-bold">حضور / غياب الأستاذ</h1>
              <span className="text-gray-400">
                الرياضيات | السنة الأولى إبتدائي | علي رياد | الأحد - 03:00
              </span>
            </div>
      
            <div className="">
              <ul className="mt-3">
                {groups.map((group, index) => (
                  <li
                    key={index}
                    className=" w-fill px-5 py-3 flex justify-between  border-b last:border-none"
                  >
                    
                      <span className="">{group.label} </span>
                      <span>
                        <PresentButton />
                      </span>
                    
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <span className="flex justify-center">
              <ConfirmButton
                text="تسجيل التغييرات"
                textColor="text-white"
                color="bg-blue"
              />
          </span>
        </>
      </Overlay>
      

    )
}
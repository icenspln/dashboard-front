import { NavLink, Outlet } from "react-router-dom";
import {
  Book,
  Bookmark,
  Gear,
  Prof,
  Signal,
  Student,
} from "../../assets/icons";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import { BLUE, DISABLEDGRAY } from "../../GLOBALS";
import "./root.css";
import TempoLogo from "../../assets/icons/TemporaryLogo.png";

export default function Root() {
  return (
    <>
      <div className="">
        <main className="navbar flex">
          <section className="navbar--section fixed w-[240px] top-0 right-0 h-screen   min-h-dvh max-w-md  min-w-md flex flex-col justify-start  p-3 ">
            <div className="w-[40px] h-[40px] mt-3 mr-4">
              <img src={TempoLogo} alt="" />
            </div>
            <ul className="navbar--ul flex flex-col gap-3 mt-[56px] ">
              <li>
                <NavLink to={`/studentmanagement`}>
                  {({ isActive }) => (
                    <>
                      <ButtonSecondary
                        text="تسيير المسجلين"
                        isActive={isActive}
                      >
                        <Student fill={isActive ? BLUE : DISABLEDGRAY} />
                      </ButtonSecondary>
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to={`/teachermanagement`}>
                  {({ isActive }) => (
                    <>
                      <ButtonSecondary
                        text="تسيير الأساتذة"
                        isActive={isActive}
                      >
                        <Prof fill={isActive ? BLUE : DISABLEDGRAY} />
                      </ButtonSecondary>
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to={`/groupmanagement`}>
                  {({ isActive }) => (
                    <>
                      <ButtonSecondary text="تسيير الأفواج" isActive={isActive}>
                        <Book fill={isActive ? BLUE : DISABLEDGRAY} />
                      </ButtonSecondary>
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to={`/particulargroupmanagement`}>
                  {({ isActive }) => (
                    <>
                      <ButtonSecondary
                        text="تسيير الأفواج الخاصة"
                        isActive={isActive}
                      >
                        <Bookmark fill={isActive ? BLUE : DISABLEDGRAY} />
                      </ButtonSecondary>
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to={`/settings`}>
                  {({ isActive }) => (
                    <>
                      <ButtonSecondary text="الإعدادات" isActive={isActive}>
                        <Gear fill={isActive ? BLUE : DISABLEDGRAY} />
                      </ButtonSecondary>
                    </>
                  )}
                </NavLink>
              </li>
            </ul>
            <NavLink className={`mt-auto`} to={`/attendancemanagement`}>
              <ButtonPrimary text="تسجيل الحضور" active>
                <Signal />
              </ButtonPrimary>
            </NavLink>
          </section>
          <section className="mr-[240px] outlet">
            <Outlet />
          </section>
        </main>
      </div>
    </>
  );
}

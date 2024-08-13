import { NavLink, Outlet } from "react-router-dom";
import {
  Book,
  Bookmark,
  Gear,
  Prof,
  Signal,
  Student,
} from "../../assets/icons";
import BriefCase from "../../assets/icons/BriefCaseSvg";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import { BLUE, DISABLEDGRAY } from "../../GLOBALS";
import "./root.css";
import TempoLogo from "../../assets/icons/TemporaryLogo.png";
import {
  SettingsProvider,
  useSettings,
} from "../settings/core/SettingsContext";

export default function Root() {
  const { logoUrl } = useSettings();
  console.log(logoUrl);
  return (
      <>
        <div>
          <main className="navbar flex">
            <div className="fixed">
              <div className="w-[42px] h-[42px] mt-3 mr-5">
                <img src={logoUrl} alt="" />
              </div>
              <section className="navbar--section fixed w-[240px] top-0 right-0 h-screen   min-h-dvh max-w-md  min-w-md flex flex-col justify-between  p-3 ">
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
                          <ButtonSecondary
                            text="تسيير الأفواج"
                            isActive={isActive}
                          >
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
                    <NavLink to={`/employeemanagement`}>
                      {({ isActive }) => (
                        <>
                          <ButtonSecondary
                            text="تسيير حضور العمال"
                            isActive={isActive}
                          >
                            <BriefCase fill={isActive ? BLUE : DISABLEDGRAY} />
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

                <NavLink to={`/attendancemanagement`}>
                  <ButtonPrimary text="تسجيل الحضور" active>
                    <Signal />
                  </ButtonPrimary>
                </NavLink>
              </section>
            </div>
            <section className="mr-[240px] outlet">
              <Outlet />
            </section>
          </main>
        </div>
      </>
  );
}

import { NavLink, Outlet } from "react-router-dom";
import { Book, Bookmark, Gear, Prof, Signal, Student } from "../assets/icons";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import { BLUE, DISABLEDGRAY } from "../GLOBALS";
import "./root.css";

export default function Root() {
  return (
    <>
      <div className="">
        <main className="navbar flex flex-row ">
          <section className="navbar--section basis-1/6 min-h-dvh max-w-md  min-w-md flex flex-col justify-between  p-4 ">
            <ul className="navbar--ul flex flex-col gap-3 my-11">
              <li>
                <NavLink to={`/`}>
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
                <NavLink to={`/profmanagement`}>
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
                <NavLink to={`/groups`}>
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
                <NavLink to={`/specialgroups`}>
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
            <ButtonPrimary text="تسجيل الحضور" active>
              <Signal />
            </ButtonPrimary>
          </section>
          <Outlet />
        </main>
      </div>
    </>
  );
}

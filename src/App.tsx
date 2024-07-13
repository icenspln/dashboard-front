import "./App.css";
import ButtonPrimary from "./components/ButtonPrimary";
import { ButtonSecondary } from "./components/ButtonSecondary";
import {
  Book,
  Bookmark,
  Gear,
  Prof,
  Signal,
  Student,
} from "./assets/icons/index";
import { DISABLEDGRAY } from "./GLOBALS";

function App() {
  return (
    <div className="">
      <main className="flex flex-row ">
        <section className="basis-1/6 min-h-dvh max-w-md  min-w-md flex flex-col justify-between  p-4 ">
          <ul className="flex flex-col gap-3 my-11">
            <li>
              <ButtonSecondary text="تسيير المسجلين" state="active">
                <Student />
              </ButtonSecondary>
            </li>
            <li>
              <ButtonSecondary text="تسيير الأساتذة" state="clear">
                <Prof fill={DISABLEDGRAY} />
              </ButtonSecondary>
            </li>
            <li>
              <ButtonSecondary text="تسيير الأفواج" state="clear">
                <Book fill={DISABLEDGRAY} />
              </ButtonSecondary>
            </li>
            <li>
              <ButtonSecondary text="تسيير الأفواج الخاصة" state="clear">
                <Bookmark fill={DISABLEDGRAY} />
              </ButtonSecondary>
            </li>
            <li>
              <ButtonSecondary text="الإعدادات" state="clear">
                <Gear fill={DISABLEDGRAY} />
              </ButtonSecondary>
            </li>{" "}
          </ul>
          <ButtonPrimary text="تسجيل الحضور" active>
            <Signal />
          </ButtonPrimary>
        </section>

        <section>table</section>
      </main>
    </div>
  );
}

export default App;

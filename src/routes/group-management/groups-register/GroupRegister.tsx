import { RegistrationContextProvider } from "./core/RegistrationContext";
import GroupCard from "./group-card/GroupCard";
import GroupRegisterForm from "./group-register-form/GroupRegisterForm";

export default function GroupRegister() {
  return (
    <RegistrationContextProvider>
      <section className="w-full min-h-screen p-4 bg-mainBg">
        <div className="  mb-6">
          <h1 className="text-2xl font-medium">تسجيل جديد | تعديل المعلومات</h1>
        </div>
        <div>
          {/* form */}
          <GroupRegisterForm />
          <GroupCard />
          {/* <Overlay>
          <Card
            textHeader="تسجيل البطاقة الذكية"
            textParagraph="يرجى تمرير البطاقة الذكية على الآلة لإنهاء تسجيل التلميذ"
            textButtonSecondary="تخطي هذه المرحلة و التسجيل بدون بطاقة"
          />

          <Card
            textHeader="تم تسجيل الطالب بنجاح"
            textParagraph="يمكن الآن للطالب الدخول للمؤسسة "
            textButtonPrimary="العودة إلى قائمة المسجلين"
          >
            <>
              <Check />
            </>
          </Card>
        </Overlay> */}
        </div>
      </section>
    </RegistrationContextProvider>
  );
}

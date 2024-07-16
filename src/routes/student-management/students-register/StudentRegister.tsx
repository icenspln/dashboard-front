import { Check } from "../../../assets/icons/Check";
import { Card } from "../../../components/Card";
import { Overlay } from "../../../components/Overlay";
import StudentRegisterForm from "./student-register-form/StudentRegisterForm";

export default function StudentRegister() {
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
      <div className="  mb-6">
        <h1 className="text-2xl font-medium">تسجيل جديد | تعديل المعلومات</h1>
      </div>
      <div>
        {/* form */}
        <StudentRegisterForm />
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
  );
}

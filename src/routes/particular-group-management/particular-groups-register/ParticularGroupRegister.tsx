import ParticularGroupRegisterForm from "./particular-group-register-form/ParticularGroupRegisterForm";

export default function ParticularGroupRegister() {
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
      <div className="  mb-6">
        <h1 className="text-2xl font-medium">تسجيل جديد | تعديل المعلومات</h1>
      </div>
      <div>
        {/* form */}
        <ParticularGroupRegisterForm />
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

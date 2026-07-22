import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-service")({
  component: Terms,
  head: () => ({
    meta: [
      { title: "شروط الخدمة | وايت مياه 6 طن بالرياض" },
      { name: "description", content: "شروط خدمة توصيل وايت مياه 6 طن بالرياض: مناطق التغطية، تقدير الأسعار، وشروط الاستخدام." },
      { property: "og:title", content: "شروط الخدمة | وايت مياه 6 طن بالرياض" },
      { property: "og:description", content: "شروط استخدام موقع وايت مياه 6 طن بالرياض وخدمة التوصيل." },
      { property: "og:url", content: "/terms-of-service" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
});

function Terms() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-14">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-sky-100">
        <Link to="/" className="text-sm text-[#0369A1] hover:underline">← الرجوع للرئيسية</Link>
        <h1 className="mt-4 text-3xl text-[#0369A1]">شروط الخدمة</h1>
        <p className="mt-2 text-sm text-slate-500">آخر تحديث: 2026</p>
        <section className="prose mt-6 max-w-none text-slate-700 leading-loose">
          <h2 className="text-xl">قبول الشروط</h2>
          <p>باستخدامك موقع "وايت مياه 6 طن بالرياض" وطلب خدمة التوصيل، فإنك توافق على الشروط الموضحة أدناه.</p>
          <h2 className="mt-6 text-xl">وصف الخدمة</h2>
          <p>نقدم خدمة توصيل مياه عذبة صالحة للشرب، مياه للمباني والإنشاءات، وتعبئة المسابح والاستراحات داخل مدينة الرياض عبر صهاريج 6 طن.</p>
          <h2 className="mt-6 text-xl">مناطق التغطية</h2>
          <p>تشمل الخدمة جميع أحياء الرياض. قد تختلف مدة الوصول حسب الحي وحركة السير.</p>
          <h2 className="mt-6 text-xl">الأسعار</h2>
          <p>الأسعار المذكورة تقديرية وقابلة للتغير حسب الحي، بُعد المسافة، وطبيعة التفريغ. يُعتمد السعر النهائي عند التواصل المباشر مع خدمة العملاء.</p>
          <h2 className="mt-6 text-xl">مسؤولية العميل</h2>
          <p>يلتزم العميل بتوفير مكان مناسب لتفريغ المياه وتقديم عنوان دقيق. لا نتحمل مسؤولية أي أضرار ناتجة عن معلومات غير صحيحة.</p>
          <h2 className="mt-6 text-xl">الإلغاء</h2>
          <p>يمكن إلغاء الطلب مجاناً قبل انطلاق الوايت. بعد الانطلاق قد تُطبق رسوم انتقال.</p>
          <h2 className="mt-6 text-xl">التعديلات</h2>
          <p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت. استمرارك في استخدام الموقع يعني موافقتك على التعديلات.</p>
          <h2 className="mt-6 text-xl">التواصل</h2>
          <p>لأي استفسار: هاتف <span className="font-digits">0506079716</span> — الرياض، المملكة العربية السعودية.</p>
        </section>
      </article>
    </div>
  );
}
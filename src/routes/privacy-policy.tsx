import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "سياسة الخصوصية | وايت مياه 6 طن بالرياض" },
      { name: "description", content: "سياسة الخصوصية لموقع وايت مياه 6 طن بالرياض: كيفية جمع البيانات، استخدام النماذج، وسياسة ملفات تعريف الارتباط." },
      { property: "og:title", content: "سياسة الخصوصية | وايت مياه 6 طن بالرياض" },
      { property: "og:description", content: "سياسة الخصوصية وحماية بيانات المستخدمين لموقع وايت مياه 6 طن بالرياض." },
      { property: "og:url", content: "/privacy-policy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

function Privacy() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-14">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-sky-100">
        <Link to="/" className="text-sm text-[#0369A1] hover:underline">← الرجوع للرئيسية</Link>
        <h1 className="mt-4 text-3xl text-[#0369A1]">سياسة الخصوصية</h1>
        <p className="mt-2 text-sm text-slate-500">آخر تحديث: 2026</p>

        <section className="prose mt-6 max-w-none text-slate-700 leading-loose">
          <h2 className="text-xl">مقدمة</h2>
          <p>نحن في "وايت مياه 6 طن بالرياض" نلتزم بحماية خصوصية زوار موقعنا وعملائنا. توضح هذه السياسة كيفية جمع البيانات واستخدامها.</p>

          <h2 className="mt-6 text-xl">البيانات التي نجمعها</h2>
          <p>عند تعبئة نموذج الطلب نقوم بجمع: الاسم، رقم الجوال، الحي، ونوع الخدمة المطلوبة. تُستخدم هذه البيانات فقط لتقديم خدمة التوصيل والتواصل معك.</p>

          <h2 className="mt-6 text-xl">ملفات تعريف الارتباط (Cookies)</h2>
          <p>قد يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة التصفح وقياس أداء الإعلانات. يمكنك تعطيلها من إعدادات المتصفح.</p>

          <h2 className="mt-6 text-xl">مشاركة البيانات</h2>
          <p>لا نشارك بيانات العملاء مع أي طرف ثالث لأغراض تسويقية. قد نستخدم بيانات مجهولة لأغراض تحليلية عبر Google Analytics وGoogle Ads.</p>

          <h2 className="mt-6 text-xl">أمان البيانات</h2>
          <p>نتخذ إجراءات أمنية معقولة لحماية بياناتك من الوصول غير المصرح به.</p>

          <h2 className="mt-6 text-xl">حقوقك</h2>
          <p>يحق لك طلب حذف أو تعديل بياناتك في أي وقت عبر التواصل معنا على الرقم 0506079716.</p>

          <h2 className="mt-6 text-xl">تواصل معنا</h2>
          <p>لأي استفسار حول الخصوصية: هاتف <span className="font-digits">0506079716</span> — الرياض، المملكة العربية السعودية.</p>
        </section>
      </article>
    </div>
  );
}
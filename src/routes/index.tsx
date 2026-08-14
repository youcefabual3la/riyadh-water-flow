import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import truckHero from "@/assets/truck-hero.jpg";

const PHONE = "0506079716";
const WA = "https://wa.me/966506079716";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "وايت مياه 6 طن بالرياض | توصيل مياه عذبة نقية" },
      { name: "description", content: "وايت مياه 6 طن بالرياض لتوصيل المياه العذبة للشرب والمباني والمسابح والاستراحات على مدار 24 ساعة. اتصل الآن 0506079716." },
      { property: "og:title", content: "وايت مياه 6 طن بالرياض | توصيل مياه عذبة نقية" },
      { property: "og:description", content: "وايت مياه 6 طن بالرياض لتوصيل المياه العذبة للشرب والمباني والمسابح والاستراحات على مدار 24 ساعة. اتصل الآن 0506079716." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "وايت مياه 6 طن بالرياض",
        telephone: "+966506079716",
        areaServed: "الرياض",
        address: { "@type": "PostalAddress", addressLocality: "الرياض", addressCountry: "SA" },
        openingHours: "Mo-Su 00:00-23:59",
      }),
    }],
  }),
});

function Home() {
  const [form, setForm] = useState({ name: "", phone: "", district: "", type: "مياه عذبة للشرب" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `طلب وايت مياه:\nالاسم: ${form.name}\nالجوال: ${form.phone}\nالحي: ${form.district}\nنوع المياه: ${form.type}`;
    window.open(`${WA}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-24 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-sky-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src="/logo.png" alt="وايت مياه 6 طن" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <div className="text-lg font-bold text-[#0369A1]" style={{ fontFamily: "Cairo" }}>وايت مياه 6 طن</div>
              <div className="text-xs text-slate-500">توصيل مياه نقية بالرياض</div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex" style={{ fontFamily: "Cairo" }}>
            <a href="#top" className="hover:text-[#0369A1]">الرئيسية</a>
            <a href="#services" className="hover:text-[#0369A1]">خدماتنا</a>
            <a href="#areas" className="hover:text-[#0369A1]">أحياء الرياض</a>
            <a href="#faq" className="hover:text-[#0369A1]">الأسئلة الشائعة</a>
            <a href="#contact" className="hover:text-[#0369A1]">اتصل بنا</a>
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <a id="call-btn" href={`tel:${PHONE}`} className="call-btn inline-flex items-center gap-2 rounded-xl bg-[#0369A1] px-5 py-3 font-semibold text-white shadow-lg hover:bg-[#075985]" style={{ fontFamily: "Cairo" }}>
              📞 اتصل الآن: <span className="font-digits">{PHONE}</span>
            </a>
            <a href="#order" className="rounded-xl border border-[#0369A1] px-4 py-3 text-sm font-semibold text-[#0369A1] hover:bg-sky-50" style={{ fontFamily: "Cairo" }}>طلب وايت</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-sky-50 via-white to-cyan-50" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-[#0369A1]" style={{ fontFamily: "Cairo" }}>
              خدمة 24 ساعة · جميع أحياء الرياض
            </span>
            <h1 className="mt-4 text-3xl leading-tight text-slate-900 md:text-5xl">
              وايت مياه 6 طن بالرياض — توصيل مياه <span className="text-[#0369A1]">صالحة للشرب</span> 24/7
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              توصيل مياه للشرب، المنازل، المباني والإنشاءات، والمسابح بكافة أحياء الرياض بأسرع وقت.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a id="call-btn" href={`tel:${PHONE}`} className="call-btn inline-flex items-center gap-2 rounded-xl bg-[#0369A1] px-6 py-4 font-semibold text-white shadow-lg hover:bg-[#075985]" style={{ fontFamily: "Cairo" }}>
                📞 اتصل الآن: <span className="font-digits">{PHONE}</span>
              </a>
              <a id="whatsapp-btn" href={WA} target="_blank" rel="noopener" className="whatsapp-btn inline-flex items-center gap-2 rounded-xl bg-[#06B6D4] px-6 py-4 font-semibold text-white shadow-lg hover:bg-[#0891B2]" style={{ fontFamily: "Cairo" }}>
                💬 واتساب مباشر
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-700 md:grid-cols-4">
              {["مياه نقية عذبة","وصول سريع","خدمة 24 ساعة","تغطية جميع أحياء الرياض"].map(t => (
                <li key={t} className="flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2 shadow-sm ring-1 ring-sky-100">
                  <span className="text-[#06B6D4]">✓</span>{t}
                </li>
              ))}
            </ul>
          </div>

          {/* Order Form */}
          <form id="order" onSubmit={submit} className="rounded-2xl border border-sky-100 bg-white p-6 shadow-xl shadow-sky-900/5">
            <h2 className="text-xl text-[#0369A1]">اطلب وايت مياه الآن</h2>
            <p className="mt-1 text-sm text-slate-500">املأ النموذج وسنتواصل معك خلال دقائق.</p>
            <div className="mt-4 space-y-3">
              <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} maxLength={80} placeholder="الاسم" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus:border-[#0369A1] focus:outline-none" />
              <input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} maxLength={20} inputMode="tel" placeholder="رقم الجوال" className="font-digits w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus:border-[#0369A1] focus:outline-none" />
              <input required value={form.district} onChange={e=>setForm({...form,district:e.target.value})} maxLength={80} placeholder="الحي بالرياض" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus:border-[#0369A1] focus:outline-none" />
              <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus:border-[#0369A1] focus:outline-none">
                <option>مياه عذبة للشرب</option>
                <option>مياه مباني وإعمار</option>
                <option>مسابح واستراحات</option>
              </select>
              <button type="submit" className="w-full rounded-xl bg-[#0369A1] py-4 font-semibold text-white shadow-lg hover:bg-[#075985]" style={{ fontFamily: "Cairo" }}>
                اطلب وايت مياه الآن
              </button>
            </div>
          </form>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-12">
          <div className="relative">
            <img src={truckHero} alt="وايت مياه 6 طن بالرياض - صهريج مياه صالحة للشرب" width={1600} height={1000} className="w-full rounded-2xl object-cover shadow-xl" loading="lazy" />
            <img src="/logo.png" alt="شعار وايت مياه" className="absolute top-4 right-4 h-20 w-20 md:h-28 md:w-28 rounded-full bg-white/90 p-2 shadow-lg" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl text-slate-900">خدماتنا في توصيل المياه</h2>
        <p className="mt-2 text-slate-600">وايت 6 طن مجهز بمضخات دفع حديثة لسرعة التفريغ في كل الأماكن.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "وايت مياه عذبة للمنازل والبيوت", d: "مياه معالجة صالحة للشرب لخزانات المنازل والفلل بأعلى معايير النظافة.", i: "🏠" },
            { t: "مياه للمباني والمشروعات والإنشاءات", d: "تزويد ورش البناء والمقاولين بالمياه اللازمة على مدار الساعة.", i: "🏗️" },
            { t: "تعبئة مسابح واستراحات ومزارع", d: "خدمة سريعة لتعبئة المسابح والاستراحات والمزارع في كل أحياء الرياض.", i: "🏊" },
            { t: "صهريج 6 طن بمضخات دفع حديثة", d: "صهاريج نظيفة معقّمة بمضخات قوية لتفريغ سريع دون تلوث.", i: "🚛" },
          ].map(s => (
            <div key={s.t} className="group rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-3 grid h-12 w-12 place-items-center rounded-xl bg-sky-100 text-2xl">{s.i}</div>
              <h3 className="text-lg text-[#0369A1]">{s.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl">تغطية جميع أحياء الرياض</h2>
          <p className="mt-2 text-slate-600">نصلك بأسرع وقت في شمال، شرق، جنوب، وغرب الرياض.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "شمال الرياض", n: ["الملقا","الصحافة","الياسمين","العارض","النرجس","الربيع"] },
              { t: "شرق الرياض", n: ["اليرموك","المونسية","الخليج","الروضة","القدس","النظيم"] },
              { t: "جنوب الرياض", n: ["الشفا","المصانع","الدار البيضاء","بدر","المنصورة","العزيزية"] },
              { t: "غرب الرياض", n: ["ديراب","العريجاء","طويق","الحزم","نمار","السويدي"] },
            ].map(a => (
              <div key={a.t} className="rounded-2xl border border-sky-100 bg-[#F8FAFC] p-5">
                <h3 className="text-[#0369A1]">{a.t}</h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-700">
                  {a.n.map(x => <li key={x} className="flex items-center gap-2"><span className="text-[#06B6D4]">•</span>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-3xl">الأسئلة الشائعة</h2>
        <div className="mt-6 space-y-3">
          {[
            { q: "كم يستغرق وصول الوايت؟", a: "عادةً من 30 إلى 90 دقيقة بحسب الحي وحركة السير." },
            { q: "هل المياه صالحة للشرب؟", a: "نعم، مياه معالجة عذبة من محطات معتمدة مطابقة لمواصفات الشرب." },
            { q: "ما هي أسعار التوصيل؟", a: "تختلف الأسعار بحسب الحي وبُعد المسافة وطبيعة التفريغ. اتصل بنا للسعر المباشر." },
            { q: "هل تعملون 24 ساعة؟", a: "نعم، خدمتنا متاحة طوال الأسبوع 24 ساعة بما فيها العطل الرسمية." },
          ].map(f => (
            <details key={f.q} className="group rounded-xl border border-sky-100 bg-white p-4 open:shadow-md">
              <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between" style={{fontFamily:"Cairo"}}>
                {f.q}<span className="text-[#0369A1] transition group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-3 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>ملاحظة:</strong> تختلف أسعار التوصيل بحسب الحي وبعد المسافة وطبيعة التفريغ. اتصل بنا للحصول على السعر المباشر.
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-gradient-to-l from-[#0369A1] to-[#0284C7] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl text-white">تحتاج وايت مياه الآن؟ نحن جاهزون</h2>
          <p className="mt-3 text-sky-100">اتصل بنا أو راسلنا عبر واتساب وسيصلك الوايت في أسرع وقت.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a id="call-btn" href={`tel:${PHONE}`} className="call-btn inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-[#0369A1] shadow-xl hover:bg-sky-50" style={{ fontFamily: "Cairo" }}>
              📞 <span className="font-digits">{PHONE}</span>
            </a>
            <a id="whatsapp-btn" href={WA} target="_blank" rel="noopener" className="whatsapp-btn inline-flex items-center gap-2 rounded-xl bg-[#06B6D4] px-6 py-4 font-semibold text-white shadow-xl hover:bg-[#0891B2]" style={{ fontFamily: "Cairo" }}>
              💬 واتساب مباشر
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-10 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="وايت مياه" className="h-12 w-12 rounded-full bg-white p-1" />
              <div className="text-lg font-bold text-white" style={{fontFamily:"Cairo"}}>وايت مياه 6 طن بالرياض</div>
            </div>
            <p className="mt-3 text-sm">خدمة توصيل مياه عذبة نقية على مدار 24 ساعة لجميع أحياء الرياض.</p>
          </div>
          <div>
            <h4 className="text-white">تواصل معنا</h4>
            <p className="mt-3 text-sm">📞 <a href={`tel:${PHONE}`} id="call-btn" className="call-btn font-digits hover:text-white">{PHONE}</a></p>
            <p className="mt-1 text-sm">📍 الرياض، المملكة العربية السعودية</p>
            <p className="mt-1 text-sm">💬 <a href={WA} id="whatsapp-btn" className="whatsapp-btn hover:text-white" target="_blank" rel="noopener">محادثة واتساب</a></p>
          </div>
          <div>
            <h4 className="text-white">روابط</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-white">سياسة الخصوصية</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white">شروط الخدمة</Link></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-800 px-4 pt-6 text-center text-xs text-slate-400">
          © 2026 وايت مياه 6 طن — جميع الحقوق محفوظة
        </div>
      </footer>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-sky-100 bg-white p-2 shadow-2xl md:hidden">
        <a id="call-btn" href={`tel:${PHONE}`} className="call-btn flex items-center justify-center gap-2 rounded-xl bg-[#0369A1] py-3 font-semibold text-white" style={{ fontFamily: "Cairo" }}>
          📞 <span className="font-digits">{PHONE}</span>
        </a>
        <a id="whatsapp-btn" href={WA} target="_blank" rel="noopener" className="whatsapp-btn flex items-center justify-center gap-2 rounded-xl bg-[#06B6D4] py-3 font-semibold text-white" style={{ fontFamily: "Cairo" }}>
          💬 واتساب
        </a>
      </div>
    </div>
  );
}

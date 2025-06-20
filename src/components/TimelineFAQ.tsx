// src/components/TimelineFAQ.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestion } from "react-icons/fa";

/* بيانات FAQ – عدّل كما تشاء */
const faqs = [
  {
    q: "Quel est notre projet de fin d'études ?",
    a: "Nous développons une plateforme intelligente d’accompagnement des étudiants et mentors tout au long du PFE.",
  },
  {
    q: "Pourquoi avons-nous choisi ce sujet ?",
    a: "Il répond à un besoin réel d’encadrement innovant et nous passionne pour la pédagogie numérique.",
  },
  {
    q: "Comment puis-je contribuer ?",
    a: "Rejoignez-nous sur GitHub, ouvrez une issue ou proposez un pull-request pour vos idées !",
  },
];

export default function TimelineFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="relative">
        {/* الخطّ العمودي */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-sky-300 dark:bg-sky-700" />

        <ul className="space-y-8">
          {faqs.map((item, i) => (
            <TimelineItem
              key={i}
              index={i}
              question={item.q}
              answer={item.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

/* عنصر واحد من الخط الزمني */
interface ItemProps {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}
function TimelineItem({ question, answer, isOpen, onToggle }: ItemProps) {
  return (
    <li className="relative pl-12">
      {/* الدائرة (زر) */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          group absolute -left-1 top-1.5
          flex items-center justify-center
          focus:outline-none
        "
      >
        <span
          data-open={isOpen}
          className="
            relative z-10 w-6 h-6
            flex items-center justify-center
            rounded-full border-2 border-sky-500 bg-white dark:bg-slate-900
            text-sky-600 dark:text-sky-300
            transition-transform
            data-[open=true]:scale-125
            data-[open=true]:shadow-[0_0_0_6px_rgb(56_189_248_/_0.35)]
          "
        >
          <FaQuestion className="text-[0.65rem]" />
        </span>
      </button>

      {/* نصّ السؤال */}
      <h3
        className="
          font-semibold text-sky-700 dark:text-sky-300
          cursor-pointer
          select-none
        "
        onClick={onToggle}
      >
        {question}
      </h3>

      {/* الجواب المتحرك */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="relative mt-3">
              {/* الفقاعة */}
              <div
                className="
                  bg-white dark:bg-slate-800
                  text-slate-700 dark:text-slate-200
                  rounded-lg py-4 px-6 shadow-md
                  leading-relaxed
                "
              >
                {answer}
              </div>

              {/* ذيل الفقاعة باستخدام pseudo عبر before:(...) */}
              <span
                className="
                  absolute -left-2 top-4 w-0 h-0
                  border-y-8 border-y-transparent
                  border-r-8 border-r-white dark:border-r-slate-800
                "
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/* ——————————————————————————————— */
/* إضافات Tailwind مخصّصة (ذيل الفقاعة) */
/* ——————————————————————————————— */
/* ضع هذا المقطع في globals.css أو tailwind.css إن لم تدعم
   pseudo-classes بـ Tailwind الافتراضي */


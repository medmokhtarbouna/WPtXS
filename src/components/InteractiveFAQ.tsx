// src/components/InteractiveFAQ.tsx
import { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

/* بيانات FAQ – عدّل كما تشاء */
const faqs = [
  {
    q: "Pourquoi avons-nous choisi ce sujet ?",
    a: "Parce qu’il répond à un besoin réel et qu’il nous passionne profondément.",
  },
  {
    q: "Quels sont nos objectifs ?",
    a: "Apporter une réelle valeur ajoutée, partager nos connaissances et créer une communauté engagée.",
  },
  {
    q: "Comment puis-je contribuer ?",
    a: "Vous pouvez nous rejoindre sur GitHub, soumettre des issues ou proposer des pull-requests.",
  },
];

export default function InteractiveFAQ() {
  /* رقم السؤال المفتوح (أو null إذا لا شيء) */
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      {faqs.map((item, i) => (
        <FAQRow
          key={i}
          index={i}
          q={item.q}
          a={item.a}
          isOpen={open === i}
          toggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </section>
  );
}

/* صفّ واحد */
interface RowProps {
  index: number;
  q: string;
  a: string;
  isOpen: boolean;
  toggle: () => void;
}
function FAQRow({ q, a, isOpen, toggle }: RowProps) {
  return (
    <div>
      {/* شريط السؤال */}
      <div className="flex items-center justify-center select-none">
        <Bubble onClick={toggle} />

        <div
          className="
            mx-2 px-8 py-3
            bg-sky-200/70 dark:bg-sky-200/10
            rounded-full
            text-lg sm:text-xl font-semibold
            text-sky-700 dark:text-sky-300
            whitespace-nowrap
            shadow-[0_4px_12px_-2px_rgb(3_105_161_/_0.25)]
          "
        >
          {q}
        </div>

        <Bubble onClick={toggle} />
      </div>

      {/* الجواب */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-4 px-6 text-slate-700 dark:text-slate-300 leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* فقاعة علامة الاستفهام */
function Bubble({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center focus:outline-none"
      aria-label="Ouvrir ou fermer la réponse"
    >
      {/* الهالة الخارجية */}
      <div className="absolute inset-0 rounded-full bg-sky-300/30 blur-[2px]" />
      {/* الدائرة */}
      <div
        className="
          relative w-12 h-12 sm:w-14 sm:h-14
          rounded-full bg-sky-500 text-white
          flex items-center justify-center
          transition-transform duration-150
          hover:scale-105 active:scale-95
        "
      >
        <FaQuestion className="text-xl sm:text-2xl" />
      </div>
    </button>
  );
}

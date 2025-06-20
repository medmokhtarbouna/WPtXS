// src/components/FancyBannerFAQ.tsx
import { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

/* ➊ أسئلة وأجوبة – عدِّل كما تريد */
const faqs = [
  {
    q: "Quel est notre projet de fin d'études ?",
    a: "Nous développons une plateforme intelligente qui facilite la collaboration entre étudiants et mentors tout au long du PFE.",
  },
  {
    q: "Pourquoi avons-nous choisi ce sujet ?",
    a: "Parce qu’il répond à un besoin réel d’accompagnement et nous passionne pour l’innovation pédagogique.",
  },
];

export default function FancyBannerFAQ() {
  /* ➋ حالة السؤال المفتوح */
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      {faqs.map((item, i) => (
        <FAQRow
          key={i}
          index={i}
          question={item.q}
          answer={item.a}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </section>
  );
}

/* ———————————————————————————————— */
/* صفّ واحد                                                           */
/* ———————————————————————————————— */
interface RowProps {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}
function FAQRow({ question, answer, isOpen, onToggle }: RowProps) {
  return (
    <div className="relative">
      {/* كبسولة السؤال */}
      <div
        className="
          relative flex justify-center
          bg-sky-200/70 dark:bg-sky-200/10
          rounded-full
          py-4 sm:py-3
          px-20   /* فراغ داخلي لإفساح مكان الفقاعتين */
          text-[1.1rem] sm:text-xl font-semibold
          text-sky-700 dark:text-sky-300
          select-none
          shadow-[0_4px_12px_-2px_rgb(3_105_161_/_0.25)]
        "
      >
        {question}
      </div>

      {/* فقاعة يسار */}
      <Bubble
        position="left"
        label="Ouvrir ou fermer la réponse"
        onClick={onToggle}
      />

      {/* فقاعة يمين */}
      <Bubble
        position="right"
        label="Ouvrir ou fermer la réponse"
        onClick={onToggle}
      />

      {/* الجواب القابل للطيّ */}
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
            <p className="mt-4 px-8 text-slate-700 dark:text-slate-300 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ———————————————————————————————— */
/* مكوّن الفقاعة الذي يُوضع يمينًا ويسارًا                            */
/* ———————————————————————————————— */
interface BubbleProps {
  position: "left" | "right";
  onClick: () => void;
  label: string;
}
function Bubble({ position, onClick, label }: BubbleProps) {
  /* المسافة السالبة لتداخل نصف الفقاعة داخل الكبسولة */
  const side = position === "left" ? "-left-7" : "-right-7";

  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={`absolute top-1/2 ${side} -translate-y-1/2 focus:outline-none`}
    >
      {/* الهالة الخارجية الخفيفة */}
      <span
        className="
          absolute inset-0
          rounded-full
          bg-sky-300/30
          blur-[2px]
        "
      />
      {/* الدائرة المحورية */}
      <span
        className="
          relative w-14 h-14 sm:w-16 sm:h-16
          rounded-full
          bg-sky-500 text-white
          flex items-center justify-center
          transition-transform duration-150
          hover:scale-105 active:scale-95
        "
      >
        <FaQuestion className="text-2xl sm:text-3xl" />
      </span>
    </button>
  );
}

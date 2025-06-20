// src/components/FancyFAQ.tsx
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { q: "How do I reset my password?", a: "Click on ‘Forgot Password’ at login..." },
  { q: "Can I change my plan later?", a: "Absolutely. Head to Settings > Billing..." },
  // أضف المزيد
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-16">Need&nbsp;Help?</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[1200px]">
        {faqs.map((item, i) => {
          const flipped = open === i;
          return (
            <motion.div
              key={i}
              className="w-full aspect-square cursor-pointer"
              onClick={() => setOpen(flipped ? null : i)}
              whileHover={{ rotateX: 6, rotateY: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* الحاوية ثلاثيّة الأبعاد */}
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* الوجه الأمامي */}
                <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl shadow-xl backface-hidden p-6">
                  <span className="text-lg font-medium text-center">{item.q}</span>
                </div>

                {/* الوجه الخلفي */}
                <div
                  className="absolute inset-0 flex items-center justify-center bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl shadow-xl p-6 backface-hidden"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <p className="text-sm leading-relaxed">{item.a}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

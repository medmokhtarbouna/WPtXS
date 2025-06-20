// QuestionBanner.tsx
import { FaQuestion } from "react-icons/fa";

interface Props {
  text: string;
}

export default function QuestionBanner({ text }: Props) {
  return (
    <div className="flex items-center justify-center my-6">
      {/* أيقونة يسار */}
      <Bubble />

      {/* الحبة الوسطى */}
      <div className="
        mx-2 px-8 py-3
        bg-blue-200/70 dark:bg-blue-200/10   /* شفافية ليظهر غradient الخلفية */
        rounded-full
        text-xl font-semibold text-blue-700 dark:text-blue-300
        whitespace-nowrap
        shadow-[0_4px_10px_-2px_rgb(0_100_250_/0.25)]
      ">
        {text}
      </div>

      {/* أيقونة يمين */}
      <Bubble />
    </div>
  );
}

/* مكوّن الفقاعة: دائرة داخل دائرة باهتة */
function Bubble() {
  return (
    <div className="relative flex items-center justify-center">
      {/* الدائرة الخارجية الباهتة */}
      <div className="absolute inset-0 rounded-full bg-blue-300/30 blur-[2px]" />
      {/* الدائرة الأساسية */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500 text-white flex items-center justify-center">
        <FaQuestion className="text-2xl" />
      </div>
    </div>
  );
}

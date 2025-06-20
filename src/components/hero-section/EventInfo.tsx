// src/components/EventInfo.tsx
import { FiCalendar, FiMapPin } from "react-icons/fi";

interface EventInfoProps {
  date: string;
  location: string;
}

export default function EventInfo({ date, location }: EventInfoProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm sm:text-lg">
      {/* Date */}
      <div className="flex items-center gap-2">
        <FiCalendar className="w-5 h-5 text-teal-300" />
        <span>{date}</span>
      </div>
      {/* Location */}
      <div className="flex items-center gap-2">
        <FiMapPin className="w-5 h-5 text-teal-300" />
        <span>{location}</span>
      </div>
    </div>
  );
}



// // src/components/EventInfo.tsx
// import { FiCalendar, FiMapPin } from "react-icons/fi";

// interface EventInfoProps {
//   date: string;
//   location: string;
// }

// export default function EventInfo({ date, location }: EventInfoProps) {
//   return (
//     <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm sm:text-base">
//       {/* التاريخ */}
//       <div className="flex items-center gap-2">
//         <div className="p-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400">
//           <FiCalendar className="w-5 h-5 text-white" />
//         </div>
//         <span>{date}</span>
//       </div>
//       {/* الموقع */}
//       <div className="flex items-center gap-2">
//         <div className="p-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400">
//           <FiMapPin className="w-5 h-5 text-white" />
//         </div>
//         <span>{location}</span>
//       </div>
//     </div>
//   );
// }








// src/components/AboutSection.tsx
import { Zap, Cpu, Users, Globe } from "lucide-react";

const features = [
  {
    Icon: Zap,
    title: "Green Hydrogen Revolution",
    description:
      "Explore cutting-edge technologies transforming renewable energy into sustainable hydrogen solutions.",
  },
  {
    Icon: Cpu,
    title: "Power-to-X Innovation",
    description:
      "Discover how excess renewable energy is being converted into valuable chemicals, fuels, and materials.",
  },
  {
    Icon: Users,
    title: "Global Collaboration",
    description:
      "Connect with industry leaders, researchers, and policymakers driving the energy transition.",
  },
  {
    Icon: Globe,
    title: "African Energy Future",
    description:
      "Unlock Africa's renewable energy potential and its role in the global green hydrogen economy.",
  },
];

export default function ABS() {
  return (
    <section
      id="about"
      className="relative py-20 bg-white dark:bg-base-card transition-colors duration-300"
    >
      {/* Subtle radial spotlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.05),transparent)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="font-bold text-3xl md:text-4xl text-base-text dark:text-white">
          About the Summit
        </h2>
        <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full" />
        <p className="mx-auto max-w-2xl text-base-muted dark:text-white/90 leading-relaxed">
          The World Power-to-X Summit 2025 brings together the global energy
          community in Marrakesh to accelerate the transition to sustainable
          energy systems through innovative Power-to-X technologies and green
          hydrogen solutions.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, title, description }, i) => (
            <div
              key={i}
              className="
                bg-white/80 dark:bg-white/5
                backdrop-blur-sm
                border border-gray-200 dark:border-white/20
                rounded-xl px-6 py-8
                transform transition
                hover:scale-105 hover:backdrop-blur-md hover:cursor-pointer
              "
            >
              <Icon className="mx-auto mb-4 w-10 h-10 text-teal-500 dark:text-teal-400" />
              <h3 className="text-xl font-semibold text-base-text dark:text-white mb-3">
                {title}
              </h3>
              <p className="text-sm text-base-muted dark:text-white/80 leading-snug">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

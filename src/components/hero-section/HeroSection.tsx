// src/components/HeroSection.tsx
import { Button } from "../ui/button";
import CountdownTimer from "../CountdownTimer";
import EventInfo from "./EventInfo";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg2.jpg')" }}
      />

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0  bg-a " />
      <div className="hero-bg-a absolute inset-0">
        {/* Animated gradient blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
          <div
            className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Event Badge */}
          {/* <div className="inline-flex items-center px-6 py-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium transition-colors duration-300">
            March 15-17, 2025 • Marrakesh, Morocco
            </div> */}

          {/* Main Title */}
          <div className="space-y-4 mt-8">
            <div className="flex justify-center mb-4 mt-20">
              <img src="./patronage.svg" alt="" className="h-9 md:h-10 " />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              World Power-to-X
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Summit 2025
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {/* Shaping the future of green hydrogen and sustainable energy
              transformation in the heart of Africa */}
            </p>
          </div>

          <div className="flex justify-center mt-4">
            <div className="text-center">
              <div className="">
                <div className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white mt-3 mb-1">
                  THE HYDROGEN CROSSROAD
                </div>
                {/* الخط الأزرق تحت العنوان */}
                <div className="mx-auto my-4 h-1 w-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full" />

                <div className="text-xs sm:text-sm text-white/80 tracking-wide w-full md:w-[1000px]">
                  The World Power-to-X Summit is a must-attend event to witness
                  the start of a new clean energy era based on green hydrogen
                  and clean fuels. A cross road for policy-makers, industry
                  leaders, research experts and global innovators to discuss PtX
                  opportunities and challenges.
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <EventInfo date="March 15–16, 2025" location="Marrakesh, Morocco" />
          </div>
          {/* Countdown Timer */}
          <div className="py-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className="text-center w-full md:w-[600px]">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 transition-colors duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white mb-1 ">
                    Countdown Timer
                  </div>
                  <div className="text-xs sm:text-sm text-white/80  tracking-wide">
                    Here
                  </div>
                </div>
              </div>
            </div>
            {/* <CountdownTimer /> */}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-700 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
            >
              View Agenda
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {[
              { number: "500+", label: "Global Speakers" },
              { number: "50+", label: "Countries" },
              { number: "100+", label: "Exhibitors" },
              { number: "3", label: "Days of Innovation" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

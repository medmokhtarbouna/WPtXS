
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set event date (example: March 15, 2025)
    const eventDate = new Date('2025-03-15T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center">
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 transition-colors duration-300">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide">
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;

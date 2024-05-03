import { FC, useEffect, useState } from "react";

interface ITimeLeft {
  days: number | null;
  hours: number | null;
  minutes: number | null;
  seconds: number | null;
}

interface TimerProps {
  date: Date;
}

const Timer: FC<TimerProps> = ({ date }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft as ITimeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<ITimeLeft>({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  const items = [
    { label: "Day", value: timeLeft.days },
    { label: "Hour", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-between gap-5 text-white font-outline-2 [text-shadow:-2px_2px_0px_#000000] z-40">
      {items.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <p className="md:text-6xl text-4xl">
            {value !== null ? (value < 10 ? `0${value}` : value) : "--"}
          </p>
          <p className="text-xl text-yellow-400">
            {value === 1 ? label : `${label}s`}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timer;

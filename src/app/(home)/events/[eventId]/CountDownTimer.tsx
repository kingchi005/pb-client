"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { intervalToDuration, setDate, isPast, isAfter } from "date-fns";

type CountDownTimerProps = {
  startDate: Date;
  endDate: Date;
};

type IntervalType = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function CountDownTimer({
  startDate,
  endDate,
}: CountDownTimerProps) {
  const [dateInterval, setDateInterval] = useState<IntervalType>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const isEventOngoing = () => {
    return isAfter(new Date(), startDate) && isPast(endDate) !== true;
  };

  const memoisedEventFunction = useCallback(isEventOngoing, [
    endDate,
    startDate,
  ]);

  const [isOngoing, setIsOngoing] = useState(isEventOngoing());
  const [isEventPast, setIsEventPast] = useState(isPast(endDate));
  useEffect(() => {
    const calculateInterval = () => {
      if (isPast(endDate)) {
        setIsOngoing(false);
        setIsEventPast(true);
      }
      if (memoisedEventFunction()) {
        setIsOngoing(true);
      }
      const newDate = startDate;
      const currentDate = new Date(Date.now());
      const duration = intervalToDuration({
        start: currentDate,
        end: newDate,
      });

      setDateInterval({ ...(duration as IntervalType) });
    };

    const interval = setInterval(calculateInterval, 1000);
    return () => clearInterval(interval);
  }, [startDate, endDate, memoisedEventFunction]);

  return (
    <div>
      {isOngoing ? (
        <p className="w-full rounded-md bg-primary p-2 text-center text-white">
          Happening now!!!
        </p>
      ) : isEventPast ? (
        <p className="w-full rounded-md bg-primary p-2 text-center text-white">
          Event has ended
        </p>
      ) : (
        <div className="flex w-full justify-evenly gap-1">
          <div className="flex flex-1 flex-col items-center rounded-md bg-primary p-2 text-white">
            <p className="text-2xl font-bold">{dateInterval.days}</p>
            <h2 className="text-sm font-bold">Days</h2>
          </div>
          <div className="flex flex-1 flex-col items-center rounded-md bg-primary p-2 text-white">
            <p className="text-2xl font-bold">{dateInterval.hours}</p>
            <h2 className="text-sm font-bold">Hours</h2>
          </div>
          <div className="flex flex-1 flex-col items-center rounded-md bg-primary p-2 text-white">
            <p className="text-2xl font-bold">{dateInterval.minutes}</p>
            <h2 className="text-sm font-bold">Minutes</h2>
          </div>
          <div className="flex flex-1 flex-col items-center rounded-md bg-primary p-2 text-white">
            <p className="text-2xl font-bold">{dateInterval.seconds}</p>
            <h2 className="text-sm font-bold">Seconds</h2>
          </div>
        </div>
      )}
    </div>
  );
}

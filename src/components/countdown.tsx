'use client';

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

function calculateDiff() {
  const weddingDate = dayjs('2025-06-17T17:00:00-03:00');
  const now = dayjs();

  return weddingDate.diff(now);
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => calculateDiff());

  useEffect(() => {
    const interval = setInterval(() => {
      if (window) {
        setTimeLeft(calculateDiff());
      }
    }, 1000 * 60);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
  );
  const days = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
  );
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-5">
      <div className="flex flex-col items-center divide-y divide-foreground rounded-sm p-4 ring-1 ring-foreground shadow-lg">
        <span>{years}</span>
        <span>anos</span>
      </div>
      <div className="flex flex-col items-center divide-y divide-foreground rounded-sm p-4 ring-1 ring-foreground shadow-lg">
        <span>{months}</span>
        <span>meses</span>
      </div>
      <div className="flex flex-col items-center divide-y divide-foreground rounded-sm p-4 ring-1 ring-foreground shadow-lg">
        <span>
          <span>{days}</span>
        </span>
        <span>dias</span>
      </div>
      <div className="flex flex-col items-center divide-y divide-foreground rounded-sm p-4 ring-1 ring-foreground shadow-lg">
        <span>{hours}</span>
        <span>horas</span>
      </div>
      <div className="flex flex-col items-center divide-y divide-foreground rounded-sm p-4 ring-1 ring-foreground shadow-lg">
        <span>{minutes}</span>
        <span>minutos</span>
      </div>
    </section>
  );
}

export default Countdown;

'use client';

import dayjs from 'dayjs';
import pluralize from 'pluralize';
import { useEffect, useState } from 'react';

// pluralize.addPluralRule(/mes/i, 'meses');
pluralize.addIrregularRule('mes', 'meses');

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

  const infos = [
    {
      label: pluralize('ano', years),
      value: years,
    },
    {
      label: pluralize('mes', months),
      value: months,
    },
    {
      label: pluralize('dia', days),
      value: days,
    },
    {
      label: pluralize('hora', hours),
      value: hours,
    },
    {
      label: pluralize('minuto', minutes),
      value: minutes,
    },
  ].filter((item) => item.value > 0);

  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {infos.map((info) => (
        <div
          key={info.label}
          className="col-span-1 flex flex-col items-center divide-y divide-wedding rounded-sm p-4 shadow-lg ring-1 ring-wedding last:odd:col-span-2 last:odd:lg:col-span-1"
        >
          <span>{info.value}</span>
          <span>{info.label}</span>
        </div>
      ))}
    </section>
  );
}

export default Countdown;

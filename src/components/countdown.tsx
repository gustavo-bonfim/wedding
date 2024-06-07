'use client';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import pluralize from 'pluralize';
import { useEffect, useState } from 'react';

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);

pluralize.addIrregularRule('mes', 'meses');

function calculateDiff() {
  const weddingDate = dayjs.tz('2025-06-07T17:00:00', 'America/Sao_Paulo');
  const now = dayjs();

  const years = weddingDate.diff(now, 'year');
  const months = weddingDate.diff(now.add(years, 'years'), 'month');
  const days = weddingDate.diff(
    now.add(years, 'years').add(months, 'months'),
    'day',
  );
  const hours = weddingDate.diff(
    now.add(years, 'years').add(months, 'months').add(days, 'days'),
    'hour',
  );
  const minutes = weddingDate.diff(
    now
      .add(years, 'years')
      .add(months, 'months')
      .add(days, 'days')
      .add(hours, 'hours'),
    'minute',
  );

  return {
    years,
    months,
    days,
    hours,
    minutes,
  };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateDiff);

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

  const { years, months, days, hours, minutes } = timeLeft;

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
    <section className="grid grid-cols-2 gap-4 md:auto-cols-fr md:grid-flow-col md:grid-cols-none">
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

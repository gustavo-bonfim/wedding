'use client';

import Countdown from '~/components/countdown';

function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex h-80 w-[350px] select-none flex-col items-center justify-center font-burgues text-7xl leading-[0.6]">
        <span>Kethelyn</span>
        <span className="text-6xl">e</span>
        <span>Gustavo</span>
      </section>

      <div className="flex w-full items-center gap-8">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-center text-xl">07/06/2025</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>
      <span className="mb-10 text-slate-400 italic">Save the date</span>

      <Countdown />
    </div>
  );
}

export default Home;

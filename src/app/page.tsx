'use client';

import Countdown from '~/components/countdown';

function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex h-96 w-[350px] flex-col justify-center font-burgues text-6xl text-gold">
        <p>Kethelyn</p>
        <span className="self-center font-doulaise">&</span>
        <p className="self-end">Gustavo</p>
      </section>

      <Countdown />
    </div>
  );
}

export default Home;

'use client';

import Countdown from '~/components/countdown';
import SectionContent from '~/components/section-content';
import SectionTitle from '~/components/section-title';

function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex min-h-[calc(100dvh-70px)] w-full flex-col items-center">
        <div className="flex h-80 w-[350px] select-none flex-col items-center justify-center font-burgues text-7xl leading-[0.6]">
          <span>Kethelyn</span>
          <span className="text-6xl">e</span>
          <span>Gustavo</span>
        </div>

        <SectionTitle>07/06/2025</SectionTitle>
        <span className="mt-2 mb-10 text-gold italic">Save the date</span>

        <Countdown />
      </section>

      <div className="mb-12 max-w-[800px] text-xl">
        <span>Olá queridos amigos e familiares,</span>
        <p>
          É com grande alegria que estamos nos preparando para o nosso grande
          dia, o nosso casamento! Gostaríamos de expressar o quanto significa
          para nós tê-los presentes nesse momento especial de nossas vidas.
        </p>
      </div>

      <SectionTitle>Lista de presentes</SectionTitle>

      <SectionContent>
        <p>
          Mais do que qualquer presente material, o que realmente valorizamos é
          ter vocês ao nosso lado enquanto embarcamos nesta nova fase de nossas
          vidas.
        </p>
        <p>
          Se você gostaria de nos presentear, por favor, sinta-se à vontade para
          explorar nossa lista de presentes através do link fornecido abaixo.
        </p>
      </SectionContent>

      <SectionContent>
        <p>
          Mais do que qualquer presente material, o que realmente valorizamos é
          ter vocês ao nosso lado enquanto embarcamos nesta nova fase de nossas
          vidas.
        </p>
        <p>
          Se você gostaria de nos presentear, por favor, sinta-se à vontade para
          explorar nossa lista de presentes através do link fornecido abaixo.
        </p>
      </SectionContent>
    </div>
  );
}

export default Home;

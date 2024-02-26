'use client';

import Countdown from '~/components/countdown';
import Header from '~/components/header';
import MainLogo from '~/components/main-logo';
import SectionContent from '~/components/section-content';
import SectionTitle from '~/components/section-title';

function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <section className="flex min-h-[calc(100dvh-70px)] w-full flex-col items-center">
          <MainLogo />

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

        <SectionTitle id="presentes">Lista de presentes</SectionTitle>

        <SectionContent>
          <p>
            Mais do que qualquer presente material, o que realmente valorizamos
            é ter vocês ao nosso lado enquanto embarcamos nesta nova fase de
            nossas vidas.
          </p>
          <p>
            Se você gostaria de nos presentear, por favor, sinta-se à vontade
            para explorar nossa lista de presentes através do link fornecido
            abaixo.
          </p>
          <button className='bg-wedding text-white px-4 py-2 rounded-md flex mx-auto mt-4 hover:bg-transparent hover:border hover:border-wedding hover:text-wedding transition'>
            <a href="https://lista.havan.com.br/Convidado/ItensListaPresente/734798" target='_blank'>Ver lista de presentes</a>
            </button>
        </SectionContent>
      </div>
    </>
  );
}

export default Home;

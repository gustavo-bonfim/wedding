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
          <button
            type="button"
            className="mx-auto mt-4 flex rounded-md bg-wedding px-4 py-2 text-white transition hover:border hover:border-wedding hover:bg-transparent hover:text-wedding"
          >
            <a
              href="https://lista.havan.com.br/Convidado/ItensListaPresente/734798"
              target="_blank"
              rel="noreferrer"
            >
              Ver lista de presentes
            </a>
          </button>
        </SectionContent>
        <SectionTitle id="location">Como chegar:</SectionTitle>
        <SectionContent>
          <div className="flex justify-between">
            <div>
              <p>
                Chacara Lighting Decor Tv. <br />
                Chiquinha Gonzaga, 246 - Chácaras <br />
                Califórnia, Araçatuba - SP, 16023
              </p>
            </div>
            <div>
              <iframe
                className="rounded-md border border-wedding"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.371590288143!2d-50.480062525810446!3d-21.217108579674612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94964370ac46c477%3A0xb510cb82c579579!2sChacara%20Lighting%20Decor!5e0!3m2!1spt-BR!2sbr!4v1709042664315!5m2!1spt-BR!2sbr"
              >
                {''}
              </iframe>
            </div>
          </div>
        </SectionContent>
      </div>
    </>
  );
}

export default Home;

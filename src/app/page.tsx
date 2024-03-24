import { Suspense } from 'react';
import Countdown from '~/components/countdown';
import FadeDiv from '~/components/fade-div';
import Footer from '~/components/footer';
import Header from '~/components/header';
import MainLogo from '~/components/main-logo';
import SectionContent from '~/components/section-content';
import SectionTitle from '~/components/section-title';
import TimelineItem from '~/components/timeline-item';
import { Button } from '~/components/ui/button';
import PresenceForm from './presence-form';

function Home() {
  return (
    <>
      <FadeDiv>
        <Header />
      </FadeDiv>
      <div className="flex flex-col items-center gap-12 pb-12 md:gap-16">
        <FadeDiv className="flex w-full flex-col items-center justify-center">
          <MainLogo />

          <SectionTitle>07/06/2025</SectionTitle>
          <span className="mt-2 mb-10 text-gold text-xl italic">
            Save the date
          </span>

          <Countdown />
        </FadeDiv>

        <SectionContent className="space-y-4">
          <TimelineItem
            year="2021"
            title="Como nos conhecemos"
            content="Nossas mães haviam se conhecido e já sabiam que seríamos perfeitos um para o outro. Nos conhecemos no dia 27/06 e ali nosso amor começou."
          />
          <TimelineItem
            year="2023"
            title="Nossas escolhas e conquistas"
            content="Firmamos nossas decisões e começamos a trabalhar duro para que tudo se realizasse. Decidimos onde iríamos morar e começamos a pensar como seria o nosso grande dia ao lado de quem amamos."
          />
          <TimelineItem
            year="2024"
            title="Ele pediu, eu disse sim"
            content="Em 04/01 nosso noivado começou, em um jantar sob a luz de velas foi feito o pedido que dava início a nossa história juntos."
          />
          <TimelineItem
            year="2025"
            title="O grande dia"
            content="O dia do nosso casamento vai ser o mais especial. Juntos aos que amamos vamos curtir e celebrar o nosso amor."
          />
        </SectionContent>

        <SectionContent>
          <span>Olá queridos amigos e familiares,</span>
          <p>
            É com grande alegria que estamos nos preparando para o nosso grande
            dia, o nosso casamento! Gostaríamos de expressar o quanto significa
            para nós tê-los presentes nesse momento especial de nossas vidas.
          </p>
        </SectionContent>

        <SectionContent>
          <SectionTitle id="presentes">Lista de presentes</SectionTitle>

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
          <Button variant="outline" type="button" className="mx-auto mt-8 flex">
            <a
              href="https://lista.havan.com.br/Convidado/ItensListaPresente/734798"
              target="_blank"
              rel="noreferrer"
            >
              Ver lista de presentes
            </a>
          </Button>
        </SectionContent>

        <SectionContent id="presence">
          <SectionTitle>Confirmar presença</SectionTitle>

          <Suspense>
            <PresenceForm />
          </Suspense>
        </SectionContent>

        <SectionContent>
          <iframe
            id="location"
            title="location map"
            className="h-60 w-full rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.371590288143!2d-50.480062525810446!3d-21.217108579674612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94964370ac46c477%3A0xb510cb82c579579!2sChacara%20Lighting%20Decor!5e0!3m2!1spt-BR!2sbr!4v1709042664315!5m2!1spt-BR!2sbr"
          />
        </SectionContent>
      </div>
      <Footer />
    </>
  );
}

export default Home;

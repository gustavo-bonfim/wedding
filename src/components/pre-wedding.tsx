import { list } from '@vercel/blob';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
import ImageDialog from './image-dialog';

async function PreWedding() {
  const { blobs } = await list({
    prefix: 'pre-wedding/',
    mode: 'folded',
  });

  const images = blobs.filter((b) => !b.url.endsWith('/'));

  return (
    <div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.pathname} className="basis-1/3">
              <ImageDialog
                image={image.url}
                trigger={
                  <Image
                    className="w-[100em] rounded"
                    src={image.url}
                    alt="Imagem do pré wedding"
                    width={120}
                    height={120}
                    quality={100}
                  />
                }
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default PreWedding;

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
import ImageDialog from './image-dialog';

function PreWedding() {
  const images = Array.from({ length: 10 }).map((_, index) => ({
    id: index,
    image: 'https://via.placeholder.com/120',
  }));
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
            <CarouselItem key={image.id} className="lg:basis-1/3 md:basis-1/2">
              <ImageDialog
                image={image.image}
                trigger={
                  <img
                    className="aspect-square w-[100em] rounded"
                    src={image.image}
                    alt="Imagem do pré wedding"
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

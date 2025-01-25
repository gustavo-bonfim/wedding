import { list } from '@vercel/blob';
import ImageDialog from '~/components/image-dialog';

async function Photos() {
  const { blobs } = await list({
    prefix: 'pre-wedding/',
    mode: 'folded',
  });

  const images = blobs.filter((b) => !b.url.endsWith('/'));

  return (
    <div className="mx-auto max-w-[800px]">
      <h1 className="font-bold text-3xl text-wedding">Fotos do evento</h1>
      <span className="text-2xl">
        Relembre os melhores momentos da festa. Você pode encontrar sua foto e
        baixar.
      </span>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <ImageDialog
            key={image.pathname}
            altTitle="Imagem do casal em tela cheia"
            image={image.url}
            trigger={
              <img
                alt="Imagem do casal"
                key={image.pathname}
                src={image.url}
                className="h-52 w-full rounded object-contain"
              />
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Photos;

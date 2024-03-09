import ImageDialog from './image-dialog';

function Photos() {
  const images = Array.from({ length: 50 }).map((_, index) => ({
    id: index,
    image: 'https://via.placeholder.com/120',
  }));
  return (
    <div className="mx-auto max-w-[800px]">
      <h1 className="font-bold text-3xl text-wedding">Fotos do evento</h1>
      <span className="text-2xl">
        Relembre os melhores momentos da festa. Você pode encontrar sua foto e
        baixar.
      </span>

      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
        {images.map((image) => (
          <ImageDialog
            image={image.image}
            trigger={
              <img
                alt="test pic"
                key={image.id}
                src={image.image}
                className="rounde h-52 w-full object-coverd"
              />
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Photos;

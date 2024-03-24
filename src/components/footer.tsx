import Logo from './logo';

function Footer() {
  return (
    <footer className="mt-12 flex w-full flex-col items-center gap-12">
      <Logo />
      <div>
        Made with &#10084;&#65039;&#65039; by{' '}
        <a
          className="font-semibold text-wedding underline"
          href="https://github.com/GustavoBonfimS"
          target="_blank"
          rel="noreferrer"
        >
          Gustavo Bonfim
        </a>
        {' and '}
        <a
          className="font-semibold text-wedding underline"
          href="https://github.com/OtavioPortella"
          target="_blank"
          rel="noreferrer"
        >
          Otavio Portella
        </a>
      </div>
    </footer>
  );
}

export default Footer;

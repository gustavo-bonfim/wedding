import Logo from './logo';

function Footer() {
  return (
    <footer className="mt-12 flex w-full flex-col items-center gap-12">
      <Logo />
      <div>
        Feito com &#10084;&#65039;&#65039; pelo noivo{' '}
        <a
          className="font-semibold text-wedding underline"
          href="https://github.com/gustavo-bonfim"
          target="_blank"
          rel="noreferrer"
        >
          Gustavo Bonfim
        </a>
      </div>
    </footer>
  );
}

export default Footer;

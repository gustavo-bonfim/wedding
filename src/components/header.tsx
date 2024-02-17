'use client';

import Logo from './logo';

function Header() {
  return (
    <header className="invisible flex h-[60px] w-full items-center justify-between md:visible">
      <Logo />
      <ul className="invisible flex gap-5 uppercase md:visible">
        <li>
          <a className="hover:underline hover:opacity-70" href="/">
            Confirmar Presença
          </a>
        </li>
        <li>
          <a className="hover:underline hover:opacity-70" href="/">
            Lista de Presentes
          </a>
        </li>
        <li>
          <a className="hover:underline hover:opacity-70" href="/">
            Como Chegar
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;

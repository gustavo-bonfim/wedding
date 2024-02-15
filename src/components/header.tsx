'use client';

import Logo from './logo';

function Header() {
  return (
    <header className="flex w-full items-center justify-between">
      <Logo />
      <ul className="flex gap-5 font-unna text-gold uppercase">
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
